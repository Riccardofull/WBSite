<template>
    <div class="bg-white">
        <div class="pt-6">
            <div class="flex w-full px-0 sm:px-6 lg:px-8">
                <span class="text-md font-semibold text-gray-900">{{ $t("williamBondi") }}</span>
                <div @click="$emit('closeModal')"
                    class="cursor-pointer ml-auto">
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
            </div>

            <div class="flex mt-4 lg:mt-6 mx-auto sm:px-6 lg:px-8">           
                <!-- Image -->
                <g-image :src="image.ImageUrl" :alt="'William Bondi ' + image.Name" class="max-w-sm lg:max-w-xl pr-4" />

                <!-- Image info -->
                <div>
                    <div class="lg:col-span-3">
                    <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        {{ image.Name }}
                    </h2>
                </div>

                <div>
                    <p class="mt-4 sm:mt-8 mb-2 sm:mb-4 text-xl leading-tight font-semibold text-gray-900">{{$t("details")}}</p>
                    <div class="grid grid-cols-3">
                        <div class="flex flex-col grid-cols-1 col-span-2">
                            <span class="text-gray-800 font-semibold text-md">{{$t("numberOfItem")}}</span>
                            <span class="text-gray-800 font-semibold text-md">{{$t("condition")}}</span>
                            <span class="text-gray-800 font-semibold text-md">{{$t("binding")}}</span>
                            <span class="text-gray-800 font-semibold text-md">{{$t("extra")}}</span>
                            <span class="text-gray-800 font-semibold text-md">{{$t("status")}}</span>
                            <span class="text-gray-800 font-semibold text-md">{{$t("technique")}}</span>
                            <span class="text-gray-800 font-semibold text-md">{{$t("sizes")}}</span>
                        </div>
                        <div class="flex flex-col grid-cols-3">
                            <span class="text-gray-800 text-md">{{ image.NumOfItem || "-" }}</span>
                            <span class="text-gray-800 text-md">{{ $t(image.Condition) || "-" }}</span>
                            <span class="text-gray-800 text-md">{{ $t(image.Binding) || "-" }}</span>
                            <span class="text-gray-800 text-md">{{ $t(image.Extra) || "-" }}</span>
                            <span class="text-gray-800 text-md"
                                :class="image.Sold != 'available' ? 'text-red-600' : 'text-gray-800'">{{ $t(image.Sold) || "-" }}</span>
                            <span class="text-gray-800 text-md">{{ $t(image.Technique) || "-" }}</span>
                            <span class="text-gray-800 text-md">{{ image.Size || "-" }}</span>
                        </div>
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
