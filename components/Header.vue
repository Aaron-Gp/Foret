<template>
  <nav
    class="fixed z-10 w-full border-b border-black/5 dark:border-white/5 lg:border-transparent backdrop-blur-[2px] shadow-[0_0_10px_rgba(0,0,0,0.25)] rounded-xl [background:rgba(0,0,0,0.05)]"
  >
    <div class="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
      <div
        class="relative flex flex-wrap items-center justify-between gap-6 py-3 md:gap-0 md:py-4"
      >
        <div class="relative z-20 flex w-full justify-between md:px-0 lg:w-max">
          <NuxtLink
            to="/"
            aria-label="logo"
            class="flex items-center space-x-2"
          >
            <div aria-hidden="true" class="flex space-x-1">
              <div
                class="h-4 w-4 rounded-full bg-emerald-400 dark:bg-white"
              ></div>
              <div class="h-6 w-2 bg-lime-600"></div>
            </div>
            <span
              class="text-2xl font-bold text-primary dark:text-white hover:text-[#36ad6a]"
              >FORÊT</span
            >
          </NuxtLink>
          <NavbarHamburger />
        </div>
        <NavbarLayer />
        <NavbarLinks />
      </div>
    </div>
  </nav>
</template>

<script setup></script>

<style lang="scss" scoped></style>
