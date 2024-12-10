<template>
    <div class="h-full flex game w-full items-center justify-center" ref="canvas"></div>
</template>

<script setup>
import { ref, nextTick } from "vue";
import Game from "./Scenes/forest.js"

const canvas = ref();
const winh = window.innerHeight - 64;
const winw = window.innerWidth;

let height = 0
let width = winh / 9 * 16;
if (width < winw) {
    height = winh
} else {
    width = winw
    height = width / 16 * 9
}

const scale = `scale(${window.innerHeight < window.innerWidth
    ? window.innerHeight / height
    : window.innerWidth / width
    })`;

const show = () => {
    console.log(canvas.value);
    new Game({
        width,
        height,
        el: canvas.value,
        resolution: 1,
        onProgress: n => {
            Bus.$emit("changeProgress", n);
        }
    }).init();
}
defineExpose({
    show
})

</script>

<style lang="scss">
.game canvas {
    // transform: v-bind(scale);
    width: v-bind(width);
    height: v-bind(height);
}
</style>