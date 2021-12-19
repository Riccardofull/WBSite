<template>
    <div class="bg-gray-50">
        <div class="relative">
            <nav aria-label="Top" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="border-b pb-8 border-gray-200">
                    <div class="pt-4 flex items-center justify-center">
                        <div class="grid grid-cols-1 sm:grid-cols-3 gap-y-3 gap-x-6 lg:grid-cols-3 lg:grid-cols-6 xl:gap-x-8">
                            <div v-for="category in categories" 
                                :key="category.Id"
                                class="text-center items-center text-sm font-medium text-gray-700 hover:text-gray-900 px-4 flex-nowrap flex-shrink-0"
                                :class="selectedCategory == category.Name ? 'font-semibold' : 'font-medium'">
                                <span @click="selectedCategory = category.Name">
                                    {{ category.Name }}
                                </span>
                            </div>                          
                        </div>
                    </div>
                </div>
            </nav>
        </div>

        <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                <div class="group" v-for="image in images" :key="image.Name">
                    <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8 border border-gray-800">
                        <a :href="image.Path">
                            <g-image :src="image.pathLong" alt="William Bondi" class="w-full h-full object-center object-cover group-hover:opacity-75" />
                        </a>
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
                    Name: this.$t("blackAndWhite"),
                },
                {
                    Id: 2,
                    Name: this.$t("colors"),
                },
                {
                    Id: 3,
                    Name: this.$t("redAndWhite"),
                },
                {
                    Id: 4,
                    Name: this.$t("bear"),
                },
                {
                    Id: 5,
                    Name: this.$t("zodiac"),
                },
                {
                    Id: 6,
                    Name: this.$t("hard"),
                },
            ],
            selectedCategory: this.$t("blackAndWhite"),
        }
    },
    mounted() {
        this.importAll(require.context('../assets/img/drawings/', true, /\.jpg$/));
    },
    computed: {
        filteredCategories(){

        },
    },
    methods: {
        importAll(r) {
            r.keys().forEach(key => (this.images.push({ pathLong: r(key), pathShort: key })));
            this.images = this.images.map(image => {
                image = {
                    ...image,
                    Name: image.pathShort.replace('./', '').replace('.jpg',''),
                    Path: "/" + image.Name
                };
                return image;
            });
        },
    }
}
</script>