<template>
    <div class="bg-white">
        <div class="pt-6">
            <div class="flex w-full px-8">
                <span class="text-md font-normal text-gray-900">{{ $t("williamBondi") }}</span>
                <div @click="$emit('closeModal')"
                    class="cursor-pointer ml-auto">
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
            </div>

            <!-- Image gallery -->
            <div class="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
                <div class="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
                    <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg" alt="William Bondi">
                </div>
                <div class="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                    <div class="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                        <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg" alt="William Bondi" class="w-full h-full object-center object-cover">
                    </div>
                    <div class="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                        <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg" alt="William Bondi" class="w-full h-full object-center object-cover">
                    </div>
                </div>
                <div class="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
                    <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg" alt="William Bondi" class="w-full h-full object-center object-cover">
                </div>
            </div>

            <!-- Product info -->
            <div class="max-w-2xl mx-auto pt-4 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-6 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
                <div class="lg:col-span-3">
                    <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                        {{ image.Name }}
                    </h2>
                </div>

                <div>
                    <p class="mt-4 sm:mt-8 mb-2 sm:mb-4 text-lg font-semibold text-gray-900">{{$t("details")}}</p>
                    <div class="grid grid-cols-3">
                        <div class="flex flex-col grid-cols-1 col-span-2">
                            <span class="text-gray-800 font-semibold text-md">{{$t("numberOfItem")}}</span>
                            <span class="text-gray-800 font-semibold text-md">{{$t("condition")}}</span>
                            <span class="text-gray-800 font-semibold text-md">{{$t("binding")}}</span>
                            <span class="text-gray-800 font-semibold text-md">{{$t("extra")}}</span>
                            <span class="text-gray-800 font-semibold text-md">{{$t("status")}}</span>
                        </div>
                        <div class="flex flex-col grid-cols-3">
                            <span class="text-gray-800 text-md">{{ image.NumOfItem }}</span>
                            <span class="text-gray-800 text-md">{{ image.Condition }}</span>
                            <span class="text-gray-800 text-md">{{ image.Binding }}</span>
                            <span class="text-gray-800 text-md">{{ image.Extra }}</span>
                            <span class="text-gray-800 text-md">{{ image.Sold }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Overview",
    props: {
        image: { 
            type: Object, 
            required: true
        }
    },
}
</script>
