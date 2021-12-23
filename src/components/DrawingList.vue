<template>
    <div class="bg-gray-50">
        <div class="relative">
            <nav aria-label="Top" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="border-b pb-6 border-gray-200">
                    <div class="pt-4 flex items-center justify-center">
                        <div class="grid grid-cols-1 sm:grid-cols-3 gap-y-3 gap-x-6 lg:grid-cols-6 xl:gap-x-8 w-full ">
                            <div v-for="category in categories" 
                                :key="category.Id"
                                @click="selectCategory(category)"
                                class="text-center items-center text-sm font-medium text-gray-700 flex-nowrap flex-shrink-0 cursor-pointer"
                                :class="selectedCategory == category.Name ? 'font-semibold' : 'font-medium'">                           
                                {{ category.ViewName }}
                            </div>                          
                        </div>
                    </div>
                </div>
            </nav>
        </div>

        <div class="max-w-2xl mx-auto py-8 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
            <div class="grid grid-cols-1 gap-y-24 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                <div class="group" v-for="image in filteredImages" :key="image.Name">
                    <div class="h-full bg-transparent rounded-lg overflow-hidden border border-gray-800">
                        <g-image :src="image.pathLong" alt="William Bondi" class="w-full h-full object-center object-cover group-hover:opacity-75" />
                    </div>
                    <h3 class="mt-1 text-md text-gray-800 font-semibold">
                       {{ image.Name }}
                    </h3>
                    <span v-if="image.Sold != ''" 
                        class="text-red-600 text-sm font-semibold uppercase">  {{ image.Sold }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {categories} from "../static/categories.js";

export default {
    name: "DrawingList",
    data() {
        return {
            images: [],
            categories: [],
            selectedCategory: "blackandwhite",
        }
    },
    mounted() {
        this.categories = categories;
        this.selectedCategory = this.$route.query.category;
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
                let sold = false;
                if(image.pathShort.split("_").length > 1 && image.pathShort.split("_")[2] && image.pathShort.split("_")[2].replace('.jpg', '') == "V") {
                    sold = true;
                }   
                image = {
                    ...image,
                    Category: image.pathShort.replace('./', '').split("_")[0],
                    Name: image.pathShort.split("_")[1].replace('.jpg', ''),
                    Sold: sold ? this.$t("sold") : "",
                };
                return image;
            });
        },
        selectCategory(category){
            this.selectedCategory = category.Name;
            if(this.$route.query.category != this.selectedCategory){       
                this.$router.replace({ path: "/drawings", query: { category: category.Name } });
            }
        }
    },
     watch: {
        $route(to, from) {
            if(to.query.categories && to.query.category != "" && this.categories && this.categories.length > 0){
                let cat = this.categories.find(c => c.Name == to.query.category);
                if(cat !== null && cat !== undefined){
                    this.selectedCategory = cat.Name;
                }
            }     
        }
    }
}
</script>