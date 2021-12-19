<template>
    <div class="bg-gray-50">
        <div class="relative">
            <nav aria-label="Top" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="border-b pb-6 border-gray-200">
                    <div class="pt-4 flex items-center justify-center">
                        <div class="grid grid-cols-1 sm:grid-cols-3 gap-y-3 gap-x-6 lg:grid-cols-6 xl:gap-x-8">
                            <div v-for="category in categories" 
                                :key="category.Id"
                                class="text-center items-center text-sm font-medium text-gray-700 hover:text-gray-900 px-4 flex-nowrap flex-shrink-0 cursor-pointer"
                                :class="selectedCategory == category.Name ? 'font-semibold' : 'font-medium'">
                                <span @click="selectedCategory = category.Name">
                                    {{ category.ViewName }}
                                </span>
                            </div>                          
                        </div>
                    </div>
                </div>
            </nav>
        </div>

        <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                <div class="group" v-for="image in filteredImages" :key="image.Name">
                    <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8 border border-gray-800">
                        <g-image :src="image.pathLong" alt="William Bondi" class="w-full h-full object-center object-cover group-hover:opacity-75" />
                    </div>
                    <h3 class="mt-4 text-sm text-gray-800">
                        {{image.Name}}
                    </h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "DrawingList",
    data() {
        return {
            images: [],
            categories: [
                {
                    Id: 1,
                    Name: "BlackAndWhite",
                    ViewName: this.$t("blackAndWhite"),
                },
                {
                    Id: 2,
                    Name: "Colors",               
                    ViewName: this.$t("colors"),
                },
                {
                    Id: 3,
                    Name: "RedAndWhite",
                    ViewName: this.$t("redAndWhite"),
                },
                {
                    Id: 4,
                    Name: "Bear",
                    ViewName: this.$t("bear"),
                },
                {
                    Id: 5,
                    Name: "Zodiac",
                    ViewName: this.$t("zodiac"),
                },
                {
                    Id: 6,
                    Name: "Hard",
                    ViewName: this.$t("hard"),
                },
            ],
            selectedCategory: "BlackAndWhite",
        }
    },
    mounted() {
        this.importAll(require.context('../assets/img/drawings/', true, /\.jpg$/));
    },
    computed: {
        filteredImages(){
            if(this.images){
                return this.images.filter(image => image.Category == this.selectedCategory);
            }
            return [];
        },
    },
    methods: {
        importAll(r) {
            r.keys().forEach(key => (this.images.push({ pathLong: r(key), pathShort: key })));
            this.images = this.images.map(image => {
                image = {
                    ...image,
                    Category: image.pathShort.replace('./', '').split("_")[0],
                    Name: image.pathShort.split("_")[1],
                };
                return image;
            });
        },
    }
}
</script>