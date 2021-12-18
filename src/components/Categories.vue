<template>
  <div class="bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
        <h2 class="text-2xl font-extrabold text-gray-900 mb-2 md:mb-4 lg:mb-6">{{$t("categories")}}</h2>

        <div class="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
          <div class="group relative">
            <a href="/blackandwhite">
              <div class="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1 border-gray-700 border">
                <img src="../assets/img/williamBondiBlackAndWhiteCategory.jpg" alt="William Bondi black and white" class="w-full h-full object-center object-cover">
              </div>
            </a>
            <h3 class="mt-2 text-sm text-gray-700">
              William Bondi
            </h3>
            <p class="text-base font-semibold text-gray-900">{{$t("blackAndWhite")}}</p>
          </div>

          <div class="group relative">
            <a href="/colors">
              <div class="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1 border-gray-700 border">
                <img src="../assets/img/williamBondiColorsCategory.jpg" alt="William Bondi red and white" class="w-full h-full object-center object-cover">
              </div>
            </a>
            <h3 class="mt-2 text-sm text-gray-700">
              William Bondi
            </h3>
            <p class="text-base font-semibold text-gray-900">{{$t("colors")}}</p>
          </div>

          <div class="group relative">
            <a href="/redandwhite">
              <div class="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1 border-gray-700 border">
                <img src="../assets/img/williamBondiRedAndWhiteCategory.jpg" alt="William Bondi red and white" class="w-full h-full object-center object-cover">
              </div>
            </a>
            <h3 class="mt-2 text-sm text-gray-700">
              William Bondi
            </h3>
            <p class="text-base font-semibold text-gray-900">{{$t("redAndWhite")}}</p>
          </div>

          <div class="group relative lg:pt-12">
            <a href="/bear">
              <div class="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1 border-gray-700 border">
                <img src="../assets/img/williamBondiBearCategory.jpg" alt="William Bondi red and white" class="w-full h-full object-center object-cover">
              </div>
            </a>
            <h3 class="mt-2 text-sm text-gray-700">
              William Bondi
            </h3>
            <p class="text-base font-semibold text-gray-900">{{$t("bear")}}</p>
          </div>
          
          <div class="group relative lg:pt-12">
            <a href="/zodiac">
              <div class="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1 border-gray-700 border">
                <img src="../assets/img/williamBondiZodiacCategory.jpg" alt="William Bondi red and white" class="w-full h-full object-center object-cover">
              </div>
            </a>
            <h3 class="mt-2 text-sm text-gray-700">
              William Bondi
            </h3>
            <p class="text-base font-semibold text-gray-900">{{$t("zodiac")}}</p>
          </div>

          <div class="group relative lg:pt-12">
            <a href="/hard">
              <div class="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1 border-gray-700 border">
                <img src="../assets/img/williamBondiHardCategory.jpg" alt="William Bondi red and white" class="w-full h-full object-center object-cover">
              </div>
            </a>
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