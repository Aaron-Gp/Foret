<template>
    <div class="relative flex max-h-10 items-center lg:hidden ">
        <button aria-label="humburger" id="hamburger" class="relative -mr-6 p-6" :class="{toggled: store.isToggled}" @click="store.toggle">
            <div aria-hidden="true" :aria-expanded="store.isToggled" id="line"
                class="m-auto h-0.5 w-5 rounded bg-sky-900 transition duration-300 dark:bg-gray-300 aria-expanded:translate-y-1.5 aria-expanded:rotate-45">
            </div>
            <div aria-hidden="true" :aria-expanded="store.isToggled" id="line2"
                class="m-auto mt-2 h-0.5 w-5 rounded bg-sky-900 transition duration-300 dark:bg-gray-300 aria-expanded:-translate-y-1 aria-expanded:-rotate-45">
            </div>
        </button>
    </div>
</template>

<script setup>
const store = useNavState()
</script>

<style lang="scss" scoped></style>