<template>
    <div class="bg-gray-800 pt-0 sm:pt-6">
        <Modal v-if="modalOpen && selectedImage" 
            @closeModal="modalOpen = false"
            :image="selectedImage"/>
        <Alert v-if="alertOpen" 
            :title="'redZone'"
            :description="'redZoneAlertDesc'"
            @confirm="proceedToRedZone"
            @back="alertOpen = false" />
        <div class="relative">
            <nav aria-label="Top" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="border-b pb-6 border-white">
                    <div class="pt-4 flex items-center justify-center">
                        <div class="grid grid-cols-1 sm:grid-cols-5 gap-y-3 gap-x-6 lg:grid-cols-5 xl:gap-x-8 w-full ">
                            <div v-for="category in categories" 
                                :key="category.Id"
                                @click="selectCategory(category)"
                                class="text-center items-center text-sm font-medium text-white flex-nowrap flex-shrink-0 cursor-pointer"
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
                class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                <div class="group" 
                    v-for="image in filteredImages" :key="image.Name">
                    <div @click="openModal(image)"
                        class="container h-full bg-transparent overflow-hidden border border-white cursor-pointer ">
                        <div class="overlay">
                            <div class="text font-semibold uppercase">{{ image.Name }}</div> 
                        </div>
                        <g-image
                            :src="image.ImageUrl"
                            alt="William Bondi"
                            class="zoom w-full h-full object-center object-cover group-hover:opacity-75 block">
                        </g-image>
                    </div>
                </div>
            </div>
            <div v-else
                class="text-center white">{{ $t("noWorks")}}</div>
        </div>
    </div>
</template>

<script>
import { categories } from "../static/categories.js";
import { images } from "../static/images.js";
import Modal from "./Modal.vue";
import Alert from "./Alert.vue";

export default {
    name: "DrawingList",
    components: { Modal, Alert },
    data() {
        return {
            images: [],
            categories: [],
            selectedCategory: "BlackAndWhite",
            selectedImage: null,
            modalOpen: false,
            alertOpen: false,
            canOpenRedZone: false,
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
        proceedToRedZone() {
            this.alertOpen = false;
            this.canOpenRedZone = true;
            this.loadSelectedCategory("RedZone");
        },
        selectCategory(category){      
            if(category.Name == "RedZone" && !this.canOpenRedZone){
                this.alertOpen = true;
            }
            else{
                this.loadSelectedCategory(category.Name);
            }
        },
        loadSelectedCategory(category){
            this.selectedCategory = category;
        },
        openModal(img){
            this.selectedImage = img;
            this.modalOpen = true; 
        },
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

.container {
  position: relative;
  width: 100%;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .3s ease;
  background-color: #2B363B;
}

.container:hover .overlay {
  opacity: 1;
}

.text {
    z-index: 99;
    color: white;
    font-size: 25px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
}
</style>