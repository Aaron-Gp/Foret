<template>
  <div
    class="bg-[url('/images/bg.png')] md:px-12 xl:px-6 pt-16 relative h-full bg-cover bg-no-repeat bg-center"
  >
    <div class="relative h-full">
      <div class="relative h-full px-16" :class="{ hidden: instance > 0 }">
        <h1 class="font-[900] text-[4rem] text-primary pt-8">FORÊT</h1>
        <p class="text-white text-[1.75rem] pt-5">守护我们的森林</p>
        <div class="mt-10 flex md:gap-20 gap-10 items-center">
          <n-button
            round
            type="primary"
            size="large"
            class="btn"
            @click="
              {
                instance > 0 ? pass : getChild();
                instance++;
              }
            "
          >
            <template #icon>
              <n-icon size="1.75rem" class="mr-2">
                <IconsGame />
              </n-icon>
            </template>
            进入游戏
          </n-button>
          <NuxtLink to="/topics">
            <n-button round type="info" size="medium">
              <template #icon>
                <n-icon size="2rem" class="mr-2">
                  <IconsMore />
                </n-icon>
              </template>
              查看更多
            </n-button>
          </NuxtLink>
        </div>
      </div>
      <ClientOnly>
        <Game :class="{ hidden: instance == 0 }" ref="game" />
      </ClientOnly>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const instance = ref(0);
const game = ref();
const getChild = () => {
  // console.log(game.value)
  game.value.show();
};
</script>

<style>
html {
  scroll-behavior: smooth;
}

.btn {
  /* border-radius: 55px; */
  /* background: #4cbf4a; */
  box-shadow: 9px 9px 23px #44aa42, -9px -9px 23px #54d452;
}
</style>
