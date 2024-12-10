<template>
    <div class="md:px-12 xl:px-6 pt-16 relative h-full">
        <div class="relative h-full flex flex-col justify-center bg-no-repeat bg-cover" style=""
            :style="{ backgroundImage: 'url(' + bg + ')', backgroundPosition: 'center center' }">
            <n-carousel class="h-72" effect="card" :centered-slides="true" :slides-per-view="'auto'" draggable
                :show-dots="true" prev-slide-style="transform: translateX(-150%) translateZ(-800px);"
                next-slide-style="transform: translateX(50%) translateZ(-800px);" :dot-type="'line'"
                @update:current-index="changeBackground">
                <n-carousel-item :style="{ width: '60%' }">
                    <n-card :style="{ width: '100%', height: '100%' }" class="relative !opacity-60 bg-black text-white backdrop-blur-[2px]"
                        content-style="padding: 0;">
                        <template #header>
                            <div class="text-white">
                                {{ disasters.title }}
                            </div>
                        </template>
                        <template #header-extra>
                            <a :href="disasters.path">
                                <n-button text class=" text-2xl">
                                    <n-icon class="text-white">
                                        <IconsRightArrow />
                                    </n-icon>
                                </n-button>
                            </a>
                        </template>
                        <div class=" text-center">
                            <n-ellipsis class=" px-4 pt-4 max-h-full" line-clamp="10" :tooltip="false">
                                {{ disasters.desc }}
                            </n-ellipsis>
                        </div>
                    </n-card>
                </n-carousel-item>
                <n-carousel-item :style="{ width: '60%' }">
                    <n-card :style="{ width: '100%', height: '100%' }" class="relative backdrop-blur-[2px] !opacity-60 bg-black text-white"
                        content-style="padding: 0;">
                        <template #header>
                            <div class="text-white">
                                {{ protections.title }}
                            </div>
                        </template>
                        <template #header-extra>
                            <a :href="protections.path">
                                <n-button text class=" text-2xl">
                                    <n-icon class="text-white">
                                        <IconsRightArrow />
                                    </n-icon>
                                </n-button>
                            </a>
                        </template>
                        <div class=" text-center">
                            <n-ellipsis class=" px-4 pt-4 max-h-full" line-clamp="10" :tooltip="false">
                                {{ protections.desc }}
                            </n-ellipsis>
                        </div>
                    </n-card>
                </n-carousel-item>
                <n-carousel-item :style="{ width: '60%' }">
                    <n-card :style="{ width: '100%', height: '100%' }" class="relative backdrop-blur-[2px] !opacity-60 bg-black text-white"
                        content-style="padding: 0;">
                        <template #header>
                            <div class="text-white">
                                {{ treasures.title }}
                            </div>
                        </template>
                        <template #header-extra>
                            <a :href="treasures.path">
                                <n-button text class=" text-2xl">
                                    <n-icon class="text-white">
                                        <IconsRightArrow />
                                    </n-icon>
                                </n-button>
                            </a>
                        </template>
                        <div class=" text-center">
                            <n-ellipsis class=" px-4 pt-4 max-h-full" line-clamp="10" :tooltip="false">
                                {{ treasures.desc }}
                            </n-ellipsis>
                        </div>
                    </n-card>
                </n-carousel-item>
            </n-carousel>
        </div>
    </div>
</template>

<script setup>
const {disasters, protections, treasures} = useContentState()
const bg = ref(disasters.bg)
function changeBackground(currentIndex, lastIndex) {
    console.log(currentIndex)
    switch (currentIndex) {
        case 0:
            bg.value = disasters.bg
            break;
        case 1:
            bg.value = protections.bg
            break
        case 2:
            bg.value = treasures.bg
            break
        default:
            break;
    }
}
</script>

<style lang="scss" scoped>
.carousel-img {
    margin: 0 auto;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>