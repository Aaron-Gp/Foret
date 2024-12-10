<template>
  <li class="">
    <NuxtLink
      :to="link"
      class="text-[1.25rem] hover:text-[#36ad6a] block transition dark:hover:text-white md:px-4"
    >
      <span class="">
        <slot />
      </span>
    </NuxtLink>
  </li>
</template>

<script setup>
defineProps(["link"]);
</script>

<style lang="scss" scoped></style>
