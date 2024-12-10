<template>
  <div
    id="navLayer"
    aria-hidden="true"
    class="fixed inset-0 z-10 h-screen w-screen origin-bottom scale-y-0 bg-white/70 backdrop-blur-2xl transition duration-500 dark:bg-gray-900/70 lg:hidden"
    :class="{ 'origin-top scale-y-100': store.isToggled }"
  ></div>
</template>

<script setup>
const store = useNavState();
</script>

<style lang="scss" scoped></style>
