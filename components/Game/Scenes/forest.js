import * as PIXI from "pixi.js"

export default class Game {
	constructor(options = {}) {
		this.width = 1200
		this.height = 760
		this.el = document.querySelector("div")
		this.resolution = 1
		this.onProgress = function () { }
		Object.assign(this, options)
		return this
	}
	init() {
		let { resolution, width, height, el } = this
		this.app = new PIXI.Application({
			width,
			height,
			background: 0xffffff,
			resolution: 1, // window.devicePixelRatio || 1,
			antialias: true,
		})
		const app = this.app
		el.appendChild(app.view)
		// this.app.resizeTo=(el.width, el.height);
		// const width = window.innerWidth;
		// const height = window.innerHeight;
		const baseTexture = PIXI.BaseTexture.from("/textures/dino.png")
		const dinoTexture = new PIXI.Texture(
			baseTexture,
			new PIXI.Rectangle(848, 2, 44, 47)
		)
		const dino = new PIXI.Sprite(dinoTexture)
		dino.visible = false
		dino.zIndex = 10
		app.stage.addChild(dino)

		// app.stage.addChild(runAnimation);
		// 加载完成

		// first stage
		const container1 = new PIXI.Container()
		app.stage.addChild(container1)

		const disasters = PIXI.Sprite.from("/images/disasters/1_3.jpg")
		disasters.width = width
		disasters.height = height
		// console.log(width, height)
		container1.addChild(disasters)

		const disasters_finish = PIXI.Sprite.from("/images/disasters/1_2.jpg")
		disasters_finish.width = width
		disasters_finish.height = height
		// console.log(width, height)
		disasters_finish.visible = false
		container1.addChild(disasters_finish)

		const text1 = new PIXI.Text("森林着火啦！快来灭火!\n(按住左键持续三秒)", {
			fontFamily: "Arial",
			fontSize: 24,
			fill: 0xffffff,
			align: "center",
		})
		text1.x = app.screen.width / 2
		text1.y = app.screen.height / 3
		text1.anchor.set(0.5, 0.5)
		container1.addChild(text1)

		const text2 = new PIXI.Text("你拯救了森林！\n下面来回答三个问题吧！", {
			fontFamily: "Arial",
			fontSize: 24,
			fill: 0xffffff,
			align: "center",
		})
		text2.visible = false
		text2.x = app.screen.width / 2
		text2.y = app.screen.height / 3
		text2.anchor.set(0.5, 0.5)
		container1.addChild(text2)

		// animaion
		const runTextures = []
		for (let i = 0; i < 2; i++) {
			runTextures.push(
				new PIXI.Texture(
					baseTexture,
					new PIXI.Rectangle(936 + i * 44, 0, 44, 47)
				)
			)
		}
		const runAnimation = new PIXI.AnimatedSprite(runTextures)
		runAnimation.animationSpeed = 0.1
		runAnimation.play()
		runAnimation.scale.set(1.5)
		runAnimation.zIndex = 10
		runAnimation.x = 60
		runAnimation.y = height - 120
		container1.addChild(runAnimation)

		let start = 0
		disasters.eventMode = "static"
		disasters.on("mousedown", () => {
			start = new Date()
			// console.log(start)
		})

		// timu
		const container2 = new PIXI.Container()

		const rectangle = new PIXI.Graphics()
		rectangle.beginFill(0x66aa66, 0.8)
		rectangle.drawRect(0, 0, 400, 300)
		rectangle.endFill()
		container2.addChild(rectangle)

		// q1
		const q1 = new PIXI.Text("全国统一的森林火警电话是_______。", {
			fontFamily: "Arial",
			fontSize: 12,
			fill: 0xffffff,
			align: "left",
		})
		q1.visible = true
		q1.x = 10
		q1.y = 0
		container2.addChild(q1)
		const c1 = new PIXI.Graphics()
		c1.lineStyle(2, 0xff0000, 1)
		c1.beginFill(0xff0000, 1)
		c1.drawRect(10, 20, 12, 12)
		c1.endFill()
		container2.addChild(c1)

		const c11 = new PIXI.Graphics()
		c11.lineStyle(2, 0xff0000, 1)
		c11.drawRect(10, 20, 12, 12)
		c11.endFill()
		container2.addChild(c11)
		const q11 = new PIXI.Text("12119", {
			fontFamily: "Arial",
			fontSize: 14,
			fill: 0xffffff,
			align: "center",
		})
		q11.visible = true
		q11.x = 25
		q11.y = 20
		container2.addChild(q11)

		const c12 = new PIXI.Graphics()
		c12.lineStyle(2, 0xff0000, 1)
		c12.drawRect(70, 20, 12, 12)
		c12.endFill()
		container2.addChild(c12)
		const q12 = new PIXI.Text("96119", {
			fontFamily: "Arial",
			fontSize: 14,
			fill: 0xffffff,
			align: "center",
		})
		q12.visible = true
		q12.x = 85
		q12.y = 20
		container2.addChild(q12)

		const c13 = new PIXI.Graphics()
		c13.lineStyle(2, 0xff0000, 1)
		c13.drawRect(130, 20, 12, 12)
		c13.endFill()
		container2.addChild(c13)
		const q13 = new PIXI.Text("13119", {
			fontFamily: "Arial",
			fontSize: 14,
			fill: 0xffffff,
			align: "center",
		})
		q13.visible = true
		q13.x = 145
		q13.y = 20
		container2.addChild(q13)

		const c14 = new PIXI.Graphics()
		c14.lineStyle(2, 0xff0000, 1)
		c14.drawRect(190, 20, 12, 12)
		c14.endFill()
		container2.addChild(c14)
		const q14 = new PIXI.Text("17119", {
			fontFamily: "Arial",
			fontSize: 14,
			fill: 0xffffff,
			align: "center",
		})
		q14.visible = true
		q14.x = 205
		q14.y = 20
		container2.addChild(q14)

		// q2
		const q2 = new PIXI.Text(
			"现行《森林防火条例》适用于中国境内森林火灾\n的预防和扑救，但不适用于______。",
			{
				fontFamily: "Arial",
				fontSize: 12,
				fill: 0xffffff,
				align: "left",
			}
		)
		q2.visible = true
		q2.x = 10
		q2.y = 50
		container2.addChild(q2)
		const c2 = new PIXI.Graphics()
		c2.lineStyle(2, 0xff0000, 1)
		c2.beginFill(0xff0000, 1)
		c2.drawRect(10, 80, 12, 12)
		c2.endFill()
		container2.addChild(c2)

		const c21 = new PIXI.Graphics()
		c21.lineStyle(2, 0xff0000, 1)
		c21.drawRect(10, 80, 12, 12)
		c21.endFill()
		container2.addChild(c21)
		const q21 = new PIXI.Text("农村地区", {
			fontFamily: "Arial",
			fontSize: 14,
			fill: 0xffffff,
			align: "center",
		})
		q21.visible = true
		q21.x = 25
		q21.y = 80
		container2.addChild(q21)

		const c22 = new PIXI.Graphics()
		c22.lineStyle(2, 0xff0000, 1)
		c22.drawRect(85, 80, 12, 12)
		c22.endFill()
		container2.addChild(c22)
		const q22 = new PIXI.Text("城市市区", {
			fontFamily: "Arial",
			fontSize: 14,
			fill: 0xffffff,
			align: "center",
		})
		q22.visible = true
		q22.x = 100
		q22.y = 80
		container2.addChild(q22)

		const c23 = new PIXI.Graphics()
		c23.lineStyle(2, 0xff0000, 1)
		c23.drawRect(160, 80, 12, 12)
		c23.endFill()
		container2.addChild(c23)
		const q23 = new PIXI.Text("城市郊区", {
			fontFamily: "Arial",
			fontSize: 14,
			fill: 0xffffff,
			align: "center",
		})
		q23.visible = true
		q23.x = 175
		q23.y = 80
		container2.addChild(q23)

		const c24 = new PIXI.Graphics()
		c24.lineStyle(2, 0xff0000, 1)
		c24.drawRect(235, 80, 12, 12)
		c24.endFill()
		container2.addChild(c24)
		const q24 = new PIXI.Text("城乡接合部", {
			fontFamily: "Arial",
			fontSize: 14,
			fill: 0xffffff,
			align: "center",
		})
		q24.visible = true
		q24.x = 250
		q24.y = 80
		container2.addChild(q24)

		// q3
		const q3 = new PIXI.Text(
			"森林火灾的发生必须具备三个条件，\n即森林可燃物、火险天气和______。",
			{
				fontFamily: "Arial",
				fontSize: 12,
				fill: 0xffffff,
				align: "left",
			}
		)
		q3.visible = true
		q3.x = 10
		q3.y = 100
		container2.addChild(q3)
		const c3 = new PIXI.Graphics()
		c3.lineStyle(2, 0xff0000, 1)
		c3.beginFill(0xff0000, 1)
		c3.drawRect(10, 130, 12, 12)
		c3.endFill()
		container2.addChild(c3)

		const c31 = new PIXI.Graphics()
		c31.lineStyle(2, 0xff0000, 1)
		c31.drawRect(10, 130, 12, 12)
		c31.endFill()
		container2.addChild(c31)
		const q31 = new PIXI.Text("木材", {
			fontFamily: "Arial",
			fontSize: 14,
			fill: 0xffffff,
			align: "center",
		})
		q31.visible = true
		q31.x = 25
		q31.y = 130
		container2.addChild(q31)

		const c32 = new PIXI.Graphics()
		c32.lineStyle(2, 0xff0000, 1)
		c32.drawRect(85, 130, 12, 12)
		c32.endFill()
		container2.addChild(c32)
		const q32 = new PIXI.Text("火源", {
			fontFamily: "Arial",
			fontSize: 14,
			fill: 0xffffff,
			align: "center",
		})
		q32.visible = true
		q32.x = 100
		q32.y = 130
		container2.addChild(q32)

		const c33 = new PIXI.Graphics()
		c33.lineStyle(2, 0xff0000, 1)
		c33.drawRect(160, 130, 12, 12)
		c33.endFill()
		container2.addChild(c33)
		const q33 = new PIXI.Text("枯叶", {
			fontFamily: "Arial",
			fontSize: 14,
			fill: 0xffffff,
			align: "center",
		})
		q33.visible = true
		q33.x = 175
		q33.y = 130
		container2.addChild(q33)

		const c34 = new PIXI.Graphics()
		c34.lineStyle(2, 0xff0000, 1)
		c34.drawRect(235, 130, 12, 12)
		c34.endFill()
		container2.addChild(c34)
		const q34 = new PIXI.Text("杂草", {
			fontFamily: "Arial",
			fontSize: 14,
			fill: 0xffffff,
			align: "center",
		})
		q34.visible = true
		q34.x = 250
		q34.y = 130
		container2.addChild(q34)

		// answer

		let a1 = 1,
			a2 = 1,
			a3 = 1
		const b1 = new PIXI.Text("点我切换选项1", {
			fontFamily: "Arial",
			fontSize: 14,
			fill: 0xffffff,
			align: "center",
		})
		b1.visible = true
		b1.x = 10
		b1.y = 150
		container2.addChild(b1)
		b1.eventMode = "static"
		b1.on("click", () => {
			console.log("switch1")
			a1++
			if (a1 == 5) {
				a1 = 1
			}
			switch (a1) {
				case 1:
					c1.x = c11.geometry.graphicsData[0].shape.x - 10
					c1.y = c11.geometry.graphicsData[0].shape.y - 20
					break
				case 2:
					c1.x = c12.geometry.graphicsData[0].shape.x - 10
					c1.y = c12.geometry.graphicsData[0].shape.y - 20
					break
				case 3:
					c1.x = c13.geometry.graphicsData[0].shape.x - 10
					c1.y = c13.geometry.graphicsData[0].shape.y - 20
					break
				case 4:
					c1.x = c14.geometry.graphicsData[0].shape.x - 10
					c1.y = c14.geometry.graphicsData[0].shape.y - 20
					break
				default:
					break
			}
		})

		const b2 = new PIXI.Text("点我切换选项2", {
			fontFamily: "Arial",
			fontSize: 14,
			fill: 0xffffff,
			align: "center",
		})
		b2.visible = true
		b2.x = 120
		b2.y = 150
		container2.addChild(b2)
		b2.eventMode = "static"
		b2.on("click", () => {
			a2++
			if (a2 == 5) {
				a2 = 1
			}
			switch (a2) {
				case 1:
					c2.x = c21.geometry.graphicsData[0].shape.x - 10
					c2.y = c21.geometry.graphicsData[0].shape.y - 80
					break
				case 2:
					// console.log(c12.geometry.graphicsData[0].shape.x)
					c2.x = c22.geometry.graphicsData[0].shape.x - 10
					c2.y = c22.geometry.graphicsData[0].shape.y - 80
					break
				case 3:
					c2.x = c23.geometry.graphicsData[0].shape.x - 10
					c2.y = c23.geometry.graphicsData[0].shape.y - 80
					break
				case 4:
					c2.x = c24.geometry.graphicsData[0].shape.x - 10
					c2.y = c24.geometry.graphicsData[0].shape.y - 80
					break
				default:
					break
			}
			console.log(c2.x, c2.y)
		})

		const b3 = new PIXI.Text("点我切换选项3", {
			fontFamily: "Arial",
			fontSize: 14,
			fill: 0xffffff,
			align: "center",
		})
		b3.visible = true
		b3.x = 10
		b3.y = 180
		container2.addChild(b3)
		b3.eventMode = "static"
		b3.on("click", () => {
			a3++
			if (a3 == 5) {
				a3 = 1
			}
			switch (a3) {
				case 1:
					c3.x = c31.geometry.graphicsData[0].shape.x - 10
					c3.y = c31.geometry.graphicsData[0].shape.y - 130
					break
				case 2:
					c3.x = c32.geometry.graphicsData[0].shape.x - 10
					c3.y = c32.geometry.graphicsData[0].shape.y - 130
					break
				case 3:
					c3.x = c33.geometry.graphicsData[0].shape.x - 10
					c3.y = c33.geometry.graphicsData[0].shape.y - 130
					break
				case 4:
					c3.x = c34.geometry.graphicsData[0].shape.x - 10
					c3.y = c34.geometry.graphicsData[0].shape.y - 130
					break
				default:
					break
			}
			console.log(c2.x, c2.y)
		})

		const b4 = new PIXI.Text("点我提交答案", {
			fontFamily: "Arial",
			fontSize: 14,
			fill: 0xffffff,
			align: "center",
		})
		b4.visible = true
		b4.x = 120
		b4.y = 180
		container2.addChild(b4)
		b4.eventMode = "static"
		let b5 = null
		let b6 = null
		b4.on("click", () => {
			if (b5 != null) {
				b5.destroy()
			}
			if (b6 != null) {
				b6.destroy()
			}
			if (a1 == 1 && a2 == 2 && a3 == 2) {
				b5 = new PIXI.Text("答对了！", {
					fontFamily: "Arial",
					fontSize: 14,
					fill: 0x00ff11,
					align: "center",
				})
				b5.visible = true
				b5.x = 50
				b5.y = 210
				container2.addChild(b5)
				b6 = new PIXI.Text("点我查看其他内容", {
					fontFamily: "Arial",
					fontSize: 14,
					fill: 0xffffff,
					align: "center",
				})
				b6.visible = true
				b6.x = 50
				b6.y = 240
				container2.addChild(b6)
				b6.eventMode = "static"
				b6.on("click", () => {
					window.location.assign("/topics")
				})
			} else {
				b5 = new PIXI.Text("答错了！", {
					fontFamily: "Arial",
					fontSize: 14,
					fill: 0xff0011,
					align: "center",
				})
				b5.visible = true
				b5.x = 50
				b5.y = 210
				container2.addChild(b5)
				b6 = new PIXI.Text("点我查看答案", {
					fontFamily: "Arial",
					fontSize: 14,
					fill: 0xffffff,
					align: "center",
				})
				b6.visible = true
				b6.x = 50
				b6.y = 240
				container2.addChild(b6)
				b6.eventMode = "static"
				b6.on("click", () => {
					window.location.assign(window.location.pathname + "topics/disasters/1")
				})
			}
		})

		disasters.on("mouseup", () => {
			let end = new Date()
			// console.log(end)
			if (end - start > 3000) {
				// console.log(end-start)
				console.log("wow")
				disasters.destroy()
				disasters_finish.visible = true
				text1.destroy()
				text2.visible = true
				setTimeout(() => {
					app.stage.addChild(container2)
					text2.destroy()
				}, 3000)
			}
		})
	}
}
