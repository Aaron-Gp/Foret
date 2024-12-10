<template>
    <div class="h-screen bg-white text-slate-900">
        <header class="top-0 z-10 ">
            <Header />
        </header>
        <main class="space-y-10 h-screen">
            <div class="relative h-screen">
                <Gradient />
                <n-back-top :right="100" />
                <slot />
            </div>
        </main>
    </div>
</template>