<template>
  <div class="bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
        <h2 class="text-2xl font-extrabold text-gray-900 mb-2 md:mb-4 lg:mb-6">{{$t("categories")}}</h2>

        <div class="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
          <div class="group relative">
              <div @click="goToCategory('BlackAndWhite')"
                  class="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1 border-gray-700 border">
                <g-image src="https://res.cloudinary.com/william-bondi/image/upload/v1640299137/BlackAndWhite_Jungla_girl_130_Web_c7vrne.jpg" alt="William Bondi black and white" class="w-full h-full object-center object-cover" />
              </div>
            <h3 class="mt-2 text-sm text-gray-700">
              William Bondi
            </h3>
            <p class="text-base font-semibold text-gray-900">{{$t("blackAndWhite")}}</p>
          </div>

          <div class="group relative">
            <div @click="goToCategory('Colors')"
              class="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1 border-gray-700 border">
              <g-image src="https://res.cloudinary.com/william-bondi/image/upload/v1640299145/Colors_Pinup_002_nme6uy.jpg" alt="William Bondi red and white" class="w-full h-full object-center object-cover" />
            </div>
            <h3 class="mt-2 text-sm text-gray-700">
              William Bondi
            </h3>
            <p class="text-base font-semibold text-gray-900">{{$t("colors")}}</p>
          </div>

          <div class="group relative">
            <div @click="goToCategory('RedAndWhite')"
              class="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1 border-gray-700 border">
              <g-image src="https://res.cloudinary.com/william-bondi/image/upload/v1640299099/RedAndWhite_PinUp258WEB_l36fvi.jpg" alt="William Bondi red and white" class="w-full h-full object-center object-cover" />
            </div>
            <h3 class="mt-2 text-sm text-gray-700">
              William Bondi
            </h3>
            <p class="text-base font-semibold text-gray-900">{{$t("redAndWhite")}}</p>
          </div>

          <div class="group relative lg:pt-12">
            <div @click="goToCategory('Bear')"
              class="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1 border-gray-700 border">
              <g-image src="https://res.cloudinary.com/william-bondi/image/upload/v1640299097/Bear_Opp180Web_zeou7n.jpg" alt="William Bondi red and white" class="w-full h-full object-center object-cover" />
            </div>
            <h3 class="mt-2 text-sm text-gray-700">
              William Bondi
            </h3>
            <p class="text-base font-semibold text-gray-900">{{$t("bear")}}</p>
          </div>
          
          <div class="group relative lg:pt-12">
            <div @click="goToCategory('Zodiac')"
              class="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1 border-gray-700 border">
              <g-image src="https://res.cloudinary.com/william-bondi/image/upload/v1640300825/00-copertina-zodiaco2_rpmt5p.jpg" alt="William Bondi red and white" class="w-full h-full object-center object-cover" />
            </div>
            <h3 class="mt-2 text-sm text-gray-700">
              William Bondi
            </h3>
            <p class="text-base font-semibold text-gray-900">{{$t("zodiac")}}</p>
          </div>

          <div class="group relative lg:pt-12">
            <div @click="goToCategory('Hard')"
              class="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1 border-gray-700 border">
              <g-image src="https://res.cloudinary.com/william-bondi/image/upload/v1640299144/BlackAndWhite_Biancaneve_Frollo154_lqx12k.jpg" alt="William Bondi red and white" class="w-full h-full object-center object-cover" />
            </div>
            <h3 class="mt-2 text-sm text-gray-700">
              William Bondi
            </h3>
            <p class="text-base font-semibold text-gray-900">{{$t("hard")}}</p>
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
    goToCategory(categoryName){
      this.$router.push({ path: `/drawings`, query: { category: categoryName } });
    }
  }
}
</script>