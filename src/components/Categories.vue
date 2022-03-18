<template>
  <div class="relative bg-white overflow-hidden">
    <div class="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
        <div class="sm:max-w-lg">
          <h1 class="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">
            {{$t("gallery")}}
          </h1>
          <p class="mt-4 text-xl text-gray-500">{{$t("galleryDesc")}}</p>
          <div class="mt-4 sm:flex sm:justify-center lg:justify-start">
            <div>
              <a @click="goToPage('/gallery')" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:opacity-90 md:text-lg cursor-pointer">
                {{$t("show")}}
              </a>
            </div>
          </div>
        
          <div class="mt-10">
            <div aria-hidden="true" class="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full">
              <div class="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                <div class="flex items-center space-x-6 lg:space-x-8">
                  <div class="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div class="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100 border border-gray-100">
                      <g-image src="../assets/img/BlackAndWhite/BB022.jpg V.jpg" alt="William Bondi Black And White" class="w-full h-full object-center object-cover" />
                    </div>
                    <div class="w-44 h-64 rounded-lg overflow-hidden border border-gray-100">
                      <g-image src="../assets/img/Bear/OPP-2-serie01.jpg" alt="William Bondi Bear" class="w-full h-full object-center object-cover" />
                    </div>
                  </div>
                  <div class="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div class="w-44 h-64 rounded-lg overflow-hidden border border-gray-100">
                      <g-image src="../assets/img/BlackAndWhite/le-sbirrine27b.jpg" alt="William Bondi Hard" class="w-full h-full object-center object-cover" />
                    </div>
                    <div class="w-44 h-64 rounded-lg overflow-hidden border border-gray-100">
                      <g-image src="../assets/img/Zodiaco/00-copertina-zodiaco2.jpg" alt="William Bondi Zodiac" class="w-full h-full object-center object-cover" />
                    </div>
                    <div class="w-44 h-64 rounded-lg overflow-hidden border border-gray-100">
                      <g-image src="../assets/img/BlackAndWhite/pin-up04-V.jpg" alt="William Bondi" class="w-full h-full object-center object-cover" />
                    </div>
                  </div>
                  <div class="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div class="w-44 h-64 rounded-lg overflow-hidden border border-gray-100">
                      <g-image src="../assets/img/RedAndWhite/pinup138WEB.jpg" alt="William Bondi Red And White" class="w-full h-full object-center object-cover" />
                    </div>
                    <div class="w-44 h-64 rounded-lg overflow-hidden border border-gray-100">
                      <g-image src="../assets/img/BlackAndWhite/pin-up256WEB.jpg" alt="William Bondi Black And White" class="w-full h-full object-center object-cover" />
                    </div>
                  </div>
                </div>
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
  name: "Categories",
  methods: {
    goToPage(categoryName){
      let language = this.$i18n.locale.split("-")[0]; 
      this.$router.push({ path: "/" + language + "/gallery", query: { category: "BlackAndWhite" } });
    }
  }
}
</script>