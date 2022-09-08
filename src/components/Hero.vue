<template>
  <div class="relative bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
        <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>

        <div>
          <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
            <nav class="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
              <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                <div class="flex items-center justify-between w-full md:w-auto">
                  <g-image 
                    @click="goToPage('/')"
                    class="h-8 w-auto sm:h-10 cursor-pointer"
                    src="../assets/svg/williamBondi.svg" />
                  <div class="-mr-2 flex items-center md:hidden">
                    <LanguageSwitcher class="mr-2 sm:mr-8"/>
                    <button @click="open = true" type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset" aria-expanded="false">
                      <!--Open menu-->
                      <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                <a @click="goToPage('/')" class="font-medium text-gray-700 hover:text-gray-900 cursor-pointer">{{$t("home")}}</a>
                <a @click="goToPage('/gallery')" class="font-medium text-gray-700 hover:text-gray-900 cursor-pointer">{{$t("gallery")}}</a>
                <a @click="goToPage('/biography')" class="font-medium text-gray-700 hover:text-gray-900 cursor-pointer">{{$t("bio")}}</a>
                <a @click="goToPage('/contacts')" class="font-medium text-gray-700 hover:text-gray-900 cursor-pointer">{{$t("contacts")}}</a>
              </div>
              <div class="hidden md:block md:ml-8">
                <LanguageSwitcher />
              </div>
            </nav>  
          </div>

          <!--Mobile menu-->
          <div v-if="open" class="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div class="px-5 pt-4 flex items-center justify-between">
                <div>
                  <g-image class="h-8 w-auto" src="../assets/svg/williamBondi.svg" alt="William Bondi" />
                </div>
                <div class="-mr-2">
                  <button @click="open = false" type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset">
                    <!--Close menu-->
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="px-2 pt-2 pb-3 space-y-1">
                <a @click="goToPage('/')" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 cursor-pointer">{{$t("home")}}</a>
                <a @click="goToPage('/gallery')" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 cursor-pointer">{{$t("gallery")}}</a>
                <a @click="goToPage('/biography')" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 cursor-pointer">{{$t("bio")}}</a>
                <a @click="goToPage('/contacts')" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 cursor-pointer">{{$t("contacts")}}</a>    
              </div>    
            </div>
          </div>
        </div>
       
        <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div class="sm:text-center lg:text-left">
            <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span class="block xl:inline">{{$t("williamBondi")}}</span>
            </h1>
            <h2 class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              {{$t("williamBondiDesc")}}
            </h2>
            <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div>
                <a @click="goToPage('/gallery')" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:opacity-90 md:py-4 md:text-lg md:px-10 cursor-pointer">
                  {{$t("discoverMore")}}
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <g-image style="object-position: 0% 13%" class="w-full lg:p-0 object-cover lg:block lg:w-full lg:h-full" src="../assets/img/RedAndWhite/pinup138WEB.jpg" alt="William Bondi" />
    </div>
  </div>
</template>

<script>
import LanguageSwitcher from "../components/LanguageSwitcher.vue";

export default {
  components: { LanguageSwitcher },
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
