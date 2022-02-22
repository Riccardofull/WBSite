<template>
    <div class="relative bg-white overflow-hidden">
        <div class="relative pt-6 pb-4">
            <div>
                <div class="max-w-7xl mx-auto px-4 sm:px-6">
                    <nav class="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
                    <div class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                        <div class="flex items-center justify-between w-full md:w-auto">
                        <g-image 
                            @click="goToPage('/')"
                            class="h-8 w-auto sm:h-10 cursor-pointer"
                            src="../assets/svg/williamBondi.svg"
                            alt="William Bondi" />
                        <div class="-mr-2 flex items-center md:hidden">
                            <button @click="open = true" type="button" class=" rounded-md p-2 inline-flex items-center justify-center text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset" aria-expanded="false">
                            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            </button>
                        </div>
                        </div>
                    </div>
                    <div class="hidden md:flex md:space-x-10 ml-auto">
                        <a @click="goToPage('/')" class="font-medium text-gray-800 cursor-pointer">{{$t("home")}}</a>
                        <a @click="goToPage('/gallery')" class="font-medium text-gray-800 cursor-pointer">{{$t("gallery")}}</a>
                        <a @click="goToPage('/contacts')" class="font-medium text-gray-800 cursor-pointer">{{$t("contacts")}}</a>
                         <LanguageSwitcher /> 
                    </div> 
                    </nav>
                </div>

                <!--Mobile menu, show/hide based on menu open state-->
                <div v-if="open" class="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                    <div class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div class="px-5 pt-4 flex items-center justify-between">
                            <div>
                            <g-image class="h-8 w-auto" src="../assets/svg/williamBondi.svg" alt="William Bondi" />
                            </div>
                            <div class="-mr-2">
                            <button @click="open = false" type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-inset">
                                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            </div>
                        </div>
                        <div class="px-2 pt-2 pb-3 space-y-1">
                            <a @click="goToPage('/')" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover: cursor-pointer">{{$t("home")}}</a>
                            <a @click="goToPage('/gallery')" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover: cursor-pointer">{{$t("gallery")}}</a>
                            <a @click="goToPage('/contacts')" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover: cursor-pointer">{{$t("contacts")}}</a>
                        </div>
                    </div>
                </div>
            </div>

            <main class="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
                <div class="text-center">
                    <h2 class="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
                        <span class="block xl:inline">{{$t(title)}}</span>
                    </h2>
                    <p class="mt-3 max-w-md mx-auto text-base text-gray-800 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                        {{$t(description)}}
                    </p>
                </div>
            </main>
        </div>
    </div>
</template>

<script>
import LanguageSwitcher from "../components/LanguageSwitcher.vue";

export default {
    components: { LanguageSwitcher },
    props: {
        title: String,
        description: String,
    },
    data() {
        return {
        open: false
        };
    },
    methods:{
        goToPage(page){  
            let language = this.$i18n.locale.split("-")[0]; 
            this.$router.push({ path: "/" + language + page });     
        }
    }
};
</script>