import * as PIXI from "pixi.js";

export default class Game {
	constructor(options = {}) {
		this.width = 1200;
		this.height = 760;
		this.el = document.querySelector("div");
		this.resolution = 1;
		this.onProgress = function () {};
		Object.assign(this, options);
		return this;
	}
	init() {
		let { resolution, width, height, el } = this;
		this.app = new PIXI.Application({
			width,
			height,
			background: 0xffffff,
			resolution: 1, // window.devicePixelRatio || 1,
			antialias: true,
		});
		el.appendChild(this.app.view);
		// this.app.resizeTo=(el.width, el.height);
		const container = new PIXI.Container();
		this.app.stage.addChild(container);
		const baseTexture = PIXI.BaseTexture.from("/textures/dino.png");
		const dinoTexture = new PIXI.Texture(
			baseTexture,
			new PIXI.Rectangle(848, 2, 44, 47)
		);
		const dino = new PIXI.Sprite(dinoTexture);
		dino.visible = false;
		container.addChild(dino);

		const runTextures = [];

		for (let i = 0; i < 2; i++) {
			runTextures.push(
				new PIXI.Texture(
					baseTexture,
					new PIXI.Rectangle(936 + i * 44, 0, 44, 47)
				)
			);
		}
		const runAnimation = new PIXI.AnimatedSprite(runTextures);
		runAnimation.animationSpeed = 0.1;
		runAnimation.play();
		// runAnimation.visible = false
		runAnimation.x = 60;
		runAnimation.y = height - 50 - 40;
		container.addChild(runAnimation);

		const jumpTexture = new PIXI.Texture(
			baseTexture,
			new PIXI.Rectangle(848, 2, 44, 47)
		);
		const jumpSprite = new PIXI.Sprite(jumpTexture);
		jumpSprite.visible = false;
		container.addChild(jumpSprite);

		const groundTexture = new PIXI.Texture(
			baseTexture,
			new PIXI.Rectangle(2, 56, 2200, 12)
		);
		const groundSprite = new PIXI.TilingSprite(groundTexture);
		groundSprite.width = width;
		groundSprite.height = 12;
		groundSprite.position.set(0, height - 50);
		container.addChild(groundSprite);

		const cactusTexture = new PIXI.Texture(
			baseTexture,
			new PIXI.Rectangle(332, 2, 26, 50)
		);
		const cactusSprite = new PIXI.Sprite(cactusTexture);
		cactusSprite.x = width / 2;
		cactusSprite.y = height - 50 - 40;
		container.addChild(cactusSprite);

		let startText = new PIXI.Text("开始游戏", {
			fontFamily: "Arial",
			fontSize: 36,
			fill: 0x333333,
			align: "center",
		});
		startText.x = width / 2;
		startText.y = height / 2;
		startText.anchor.set(0.5);
		container.addChild(startText);
		startText.eventMode = "static";
		startText.on("click", () => {
			playGame();
		});

		let isGaming = false;
		let isGameover = false;

		function playGame() {
			isGaming = true;
			console.log("start");
			startText.visible = false;
			runAnimation.visible = true;
			runAnimation.x = 60;
			jumpSprite.x = 60;
			runAnimation.y = height - 50 - 40;
			jumpSprite.y = height - 50 - 40;
		}

		function gameover() {
			console.log("end");
			isGaming = false;
			isGameover = true;
		}

		let score = 0;
		let jumpVelocity = 20;
		let gravity = 0.5;

		this.app.ticker.add((delta) => {
			if (isGameover) {
				return;
			}
			if (isGaming) {
				groundSprite.tilePosition.x -= 5 * delta;
				cactusSprite.x -= 5 * delta;
				if (cactusSprite.x < -30) {
					cactusSprite.x = width;
					score++;
				}
				if (jumpSprite.visible) {
					jumpVelocity -= gravity;
					jumpSprite.y -= jumpVelocity * delta;
					if (jumpSprite.y > height - 50 - 40) {
						jumpSprite.y = height - 50 - 40;
						jumpVelocity = 20;
						jumpSprite.visible = false;
						runAnimation.visible = true;
					}
				}
				if (
					jumpSprite.y > cactusSprite.y - 48 &&
					cactusSprite.x < jumpSprite.x + 40 &&
					cactusSprite.x > jumpSprite.x - 40
				) {
					gameover();
					let overText = new PIXI.Text("游戏结束，你的分数：" + score, {
						fontFamily: "Arial",
						fontSize: 36,
						fill: 0x333333,
						align: "center",
					});
					overText.x = width / 2;
					overText.y = height / 2;
					overText.anchor.set(0.5);
					container.addChild(overText);
					// overTextIndex = container.getChildIndex(overText)
					overText.eventMode = "static";
					overText.on("click", () => {
						location.reload();
					});
				}
			}
		});
		window.addEventListener("keydown", (e) => {
			if (isGaming && e.code === "Space") {
                e.preventDefault();
				console.log("jump");
				runAnimation.visible = false;
				jumpSprite.visible = true;
                return false
			}
		});
	}
}
