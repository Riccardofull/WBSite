<template>
  <div class="relative bg-white overflow-hidden">
    <div class="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
        <div class="sm:max-w-lg">
          <h1 class="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">
            {{$t("categories")}}
          </h1>
          <p class="mt-4 text-xl text-gray-500">{{$t("categoriesDesc")}}</p>
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
                      <g-image src="https://res.cloudinary.com/william-bondi/image/upload/v1640299151/Colors_OPP125WEB_cbip7i.jpg" alt="William Bondi Colors" class="w-full h-full object-center object-cover" />
                    </div>
                    <div class="w-44 h-64 rounded-lg overflow-hidden border border-gray-100">
                      <g-image src="https://res.cloudinary.com/william-bondi/image/upload/v1640299084/Bear_Opp2_zvstlo.jpg" alt="William Bondi Bear" class="w-full h-full object-center object-cover" />
                    </div>
                  </div>
                  <div class="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div class="w-44 h-64 rounded-lg overflow-hidden border border-gray-100">
                      <g-image src="https://res.cloudinary.com/william-bondi/image/upload/v1640299133/BlackAndWhite_2C_n87yks.jpg" alt="William Bondi Hard" class="w-full h-full object-center object-cover" />
                    </div>
                    <div class="w-44 h-64 rounded-lg overflow-hidden border border-gray-100">
                      <g-image src="https://res.cloudinary.com/william-bondi/image/upload/v1640300825/00-copertina-zodiaco2_rpmt5p.jpg" alt="William Bondi Zodiac" class="w-full h-full object-center object-cover" />
                    </div>
                    <div class="w-44 h-64 rounded-lg overflow-hidden border border-gray-100">
                      <g-image src="https://res.cloudinary.com/william-bondi/image/upload/v1640299107/RedAndWhite_Studio182WEB_V_fo3iyx.jpg" alt="William Bondi" class="w-full h-full object-center object-cover" />
                    </div>
                  </div>
                  <div class="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div class="w-44 h-64 rounded-lg overflow-hidden border border-gray-100">
                      <g-image src="https://res.cloudinary.com/william-bondi/image/upload/v1640299102/RedAndWhite_Studio179WEB_mautpl.jpg" alt="William Bondi Red And White" class="w-full h-full object-center object-cover" />
                    </div>
                    <div class="w-44 h-64 rounded-lg overflow-hidden border border-gray-100">
                      <g-image src="https://res.cloudinary.com/william-bondi/image/upload/v1640299097/Bear_Opp180Web_zeou7n.jpg" alt="William Bondi Black And White" class="w-full h-full object-center object-cover" />
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