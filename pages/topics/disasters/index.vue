<template>
  <div class="pt-16 relative h-full">
    <div class="relative h-full">
      <div
        class="text-white relative bg-secondary font-black banner-follow fadeInDown visible"
        :style="{ backgroundImage: 'url(' + store.bg + ')' }"
      >
        <div class="max-w-max px-6 pt-6 pb-6 mx-auto">
          <!-- 面包屑 -->
          <n-breadcrumb separator=">" class="mb-4 lg:mb-6">
            <n-breadcrumb-item @click="$router.push('/topics')">
              <template #default>
                <div class="text-white">关注</div>
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
          <!-- 面包屑 -->
          <div class="row">
            <div class="md:flex-[0_0_auto] md:w-6/12">
              <div
                class="text-white bg-black bg-opacity-50 p-4 border-t-4 border-solid border-t-secondary"
              >
                <h1
                  class="lg:mb-8 mb-4 xl:text-[3.375rem] lg:text-[3rem] md:text-[2.25rem] sm:text-[1.625rem]"
                >
                  {{ store.title }}
                </h1>
                <p class="font-normal leading-[1.3] text-justify mb-4">
                  {{ store.desc }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="xl:pt-20 lg:pt-16 md:pt-12 pt-8 px-8 pb-8 bg-[url('/textures/bg1.png')] bg-center bg-no-repeat bg-cover"
      >
        <section class="!mx-auto xl:mb-24 lg:mb-20 md:mb-16 mb-12 w-full px-3">
          <div class="relative text-[#231f20] xl:mb-32 lg:mb-24 md:mb-16 mb-8">
            <h2
              class="xl:pl-[1.2rem] pl-4 xl:text-[2.375rem] text-[1.375rem] xl:border-l-[4px] border-l-[3px] border-[#df711a] leading-[1] font-[700]"
            >
              最新动态
            </h2>
          </div>
          <div class="mb-8">
            <div class="row g-4 g-lg-5 g-xxl-6">
              <div
                class="block md:flex-[0_0_auto] md:w-6/12"
                v-for="(page, index) in second"
                :key="index"
              >
                <NuxtLink :to="'/topics/disasters/' + index">
                  <n-card
                    bordered
                    class="block transition-all hover:bg-[--hover_color] hover:text-[#ffffff] hover:[--n-title-text-color:#fff] lg:hover:translate-x-[-1rem] lg:hover:translate-y-[-1rem] lg:hover:shadow-[1rem_1rem_0_#d8d8d8]"
                    :class="{ 'lg:-mt-8': index % 2 != 0 }"
                    :style="{ '--hover_color': page.color }"
                  >
                    <template class="title" #header>
                      {{ page.title }}
                    </template>
                    <template #cover>
                      <img
                        class="object-cover max-w-full object-center w-full"
                        :src="page.cover"
                      />
                    </template>
                    {{ page.desc }}
                  </n-card>
                </NuxtLink>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
const store = useContentState().disasters;
const second = store.second;
</script>

<style lang="scss" scoped>
.banner-follow {
  -webkit-mask-image: image(url(~/assets/mask-home.svg), #cae296);
  mask-image: image(url(~/assets/mask-home.svg), #cae296);
  -webkit-mask-position: center center;
  mask-position: center center;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
  @apply relative bg-[50%] bg-no-repeat bg-cover bg-fixed pb-8;
}

.row {
  @apply flex flex-wrap mt-[calc(var(--bs-gutter-y)*-1)] mr-[calc(var(--bs-gutter-x)*-0.5)] ml-[calc(var(--bs-gutter-x)*-0.5)];
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
}

.row > * {
  box-sizing: border-box;
  flex-shrink: 0;
  // width: 100%;
  max-width: 100%;
  padding-right: calc(var(--bs-gutter-x));
  padding-left: calc(var(--bs-gutter-x));
  margin-top: var(--bs-gutter-y);
}

.g-4,
.gx-4 {
  --bs-gutter-x: 1.5rem;
}

.g-4,
.gy-4 {
  --bs-gutter-y: 1.5rem;
}

@media (min-width: 992px) {
  .g-lg-5,
  .gx-lg-5 {
    --bs-gutter-x: 3rem;
  }
}

@media (min-width: 992px) {
  .g-lg-5,
  .gy-lg-5 {
    --bs-gutter-y: 3rem;
  }
}
</style>
