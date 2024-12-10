<template>
  <div class="pt-16 relative h-full">
    <div class="relative h-full">
      <div
        class="relative bg-[#231f20] text-[#fff] z-[5] fadeInDown"
        style="visibility: visible; animation-name: fadeInDown"
      >
        <img
          class="w-full lg:h-40 h-24 object-cover object-center"
          src="/images/long_cover.jpg"
          alt=""
        />
        <div
          class="absolute left-0 top-[25%] w-full z-[8] translate-y-[-50%] px-8 lg:px-16"
        >
          <div class="!mx-auto">
            <n-breadcrumb separator=">" class="mt-6 lg:mb-6">
              <n-breadcrumb-item @click="$router.push('/topics/treasures')">
                <template #default>
                  <div class="text-white">神奇森林在哪里</div>
                </template>
              </n-breadcrumb-item>
              <n-breadcrumb-item>
                <template #default>
                  <div class="text-white">
                    {{ store.title }}
                  </div>
                </template>
              </n-breadcrumb-item>
            </n-breadcrumb>
          </div>
        </div>
        <img
          class="absolute w-full left-0 bottom-[-1.6vw] z-20"
          src="/textures/slider-overly.svg"
          alt="花边"
        />
      </div>
      <div
        class="pt-20 pb-20 bg-white px-16 lg:px-48 bg-[url('/textures/bg1.png')] bg-center bg-no-repeat bg-cover"
      >
        <div class="!m-auto">
          <div class="text-center md:mb-8 md:pb-4">
            <h1
              class="text-[#333] xl:text-[3.375rem] lg:text-[3rem] md:text-[2.25rem] text-[1.625rem] mb-4 md:mb-8 xl:mb-12 fadeInUp font-[700]"
              style="visibility: visible; animation-name: fadeInUp"
            >
              {{ store.title }}
            </h1>
          </div>
          <main
            class="xl:pb-[3rem] xl:mb-[3rem] md:pb-[2rem] md:mb-[2rem] pb-[1rem] mb-[1rem] fadeInUp"
            id="artContent"
            style="visibility: visible; animation-name: fadeInUp"
            v-html="filtImg(store.content)"
          ></main>
          <div class="text-right mb-20">
            <a class="back" href="javascript:history.go(-1);">返回</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const id = route.params.id;
const store = useContentState().treasures.third[id];
// console.log(store)
</script>

<style lang="scss">
h2 {
  @apply font-[700] text-[1.5rem] pb-4;
}

p {
  @apply mt-0 mb-[1rem] text-justify;
}

figure {
  @apply mx-auto mb-4 lg:w-1/2 w-3/4 flex justify-center;
}

ol {
  @apply list-decimal ps-4;
}

li {
  @apply pb-4;
}

.back {
  @media (min-width: 1200px) {
    @apply w-60 h-[61px] bg-pos1 leading-[61px] hover:text-black hover:bg-pos2;
  }

  @apply text-white w-[150px] h-[50px] bg-pos1 bg-[100%_100%,100%_100%] inline-block bg-[url(~/assets/button-bg4.svg),url(~/assets/button-bg5.svg)] text-center leading-[50px] font-bold transition-all duration-[0.3s] bg-no-repeat hover:text-[#000] hover:bg-pos2;
}
</style>
