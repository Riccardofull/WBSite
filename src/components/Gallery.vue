<template>
    <div>
        <Modal v-if="modalOpen && selectedImage" 
            @closeModal="closeModal"
            :image="selectedImage"/>
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
                                {{ $t(category.ViewName) }}
                            </div>                          
                        </div>
                    </div>
                </div>
            </nav>
        </div>

        <div class="max-w-2xl mx-auto py-8 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
            <div v-if="filteredImages.length > 0"
                class="grid grid-cols-1 gap-y-24 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                <div class="group" 
                    v-for="image in filteredImages" :key="image.Name">
                    <div @click="openModal(image)"
                        class="h-full bg-transparent overflow-hidden border border-gray-800">
                        <g-image
                            :src="image.ImageUrl"
                            alt="William Bondi"
                            class="zoom w-full h-full object-center object-cover group-hover:opacity-75 cursor-pointer" />
                    </div>
                    <h3 class="mt-1 text-xl text-gray-800 font-normal">
                       {{ image.Name }}
                    </h3>
                    <span class="text-sm uppercase"
                        :class="image.Sold != 'available' ? 'text-red-600 font-semibold' : 'text-gray-800'">  {{ $t(image.Sold) }}</span>
                </div>
            </div>
            <div v-else
                class="text-center text-gray-700">{{ $t("noWorks")}}</div>
        </div>
    </div>
</template>

<script>
import { categories } from "../static/categories.js";
import { images } from "../static/images.js";
import Modal from "./Modal.vue";

export default {
    name: "DrawingList",
    components: { Modal },
    data() {
        return {
            images: [],
            categories: [],
            selectedCategory: "BlackAndWhite",
            selectedImage: null,
            modalOpen: false,
        }
    },
    mounted() {
        this.categories = categories;
        this.images = images;
        if(this.$route.query.category){
            this.selectedCategory = this.$route.query.category;
        }
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
        selectCategory(category){
            this.selectedCategory = category.Name;
            if(this.$route.query.category != this.selectedCategory){       
                let language = this.$i18n.locale.split("-")[0]; 
                this.$router.replace({ path: "/" + language + "/gallery", query: { category: category.Name } });
            }
        },
        openModal(img){
            this.selectedImage = img;
            this.modalOpen = true; 
        },
        closeModal(){
            this.modalOpen = false;
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

<style scoped>
.zoom {
    transform: scale(1.2);
    transition: transform .7s; 
}

.zoom:hover {
    transform: scale(1.0); 
}
</style>