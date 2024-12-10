<template>
  <div
    class="invisible absolute top-full left-0 z-20 w-full origin-top-right translate-y-1 scale-90 flex-col flex-wrap justify-end gap-6 rounded-3xl border border-gray-100 bg-white p-8 opacity-0 shadow-2xl shadow-gray-600/10 transition-all duration-300 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none lg:visible lg:relative lg:flex lg:w-7/12 lg:translate-y-0 lg:scale-100 lg:flex-row lg:items-center lg:gap-0 lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none"
    :class="{
      '!visible !scale-100 !opacity-100 !lg:translate-y-0': store.isToggled,
    }"
  >
    <div
      class="w-full font-[700] text-lime-700 dark:text-gray-200 lg:w-auto lg:pr-4 lg:pt-0"
    >
      <ul
        class="flex flex-col gap-6 tracking-wide lg:flex-row lg:gap-0 lg:text-sm"
      >
        <NavbarLinksItem
          v-for="(nav, index) in store.navlinks"
          :key="index"
          :link="nav.link"
          @click="store.toggle"
          >{{ nav.text }}
        </NavbarLinksItem>
      </ul>
    </div>
  </div>
</template>

<script setup>
const store = useNavState();
</script>

<style lang="scss" scoped></style>
