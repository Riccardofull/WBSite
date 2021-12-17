<template>
  <div class="bg-white">
    <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
      <div class="space-y-12">
        <div class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
          <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">{{$t("categories")}}</h2>
          <p class="text-xl text-gray-700">{{$t("categoriesDesc")}}</p>
        </div>
        <ul role="list" class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
          <li>
            <div class="space-y-4">
              <div class="aspect-w-2 aspect-h-3">
                <img class="object-cover shadow-lg rounded-lg border-gray-700 border" src="../assets/img/williamBondiBlackAndWhiteCategory.jpg" alt="William Bondi black and white">
              </div>
              <div class="space-y-2">
                <div class="text-lg leading-6 font-medium space-y-1 text-center">
                  <h3>{{$t("blackAndWhite")}}</h3>
                </div>
              </div>      
            </div>
          </li>

          <li>
            <div class="space-y-4">
              <div class="aspect-w-2 aspect-h-3">
                <img class="object-cover shadow-lg rounded-lg border-gray-700 border" src="../assets/img/williamBondiRedAndWhiteCategory.jpg" alt="William Bondi red and white">
              </div>
              <div class="space-y-2">
                <div class="text-lg leading-6 font-medium space-y-1 text-center">
                  <h3>{{$t("redAndWhite")}}</h3>
                </div>
              </div>      
            </div>
          </li>

          <li>
            <div class="space-y-4">
              <div class="aspect-w-2 aspect-h-3">
                <img class="object-cover shadow-lg rounded-lg border-gray-700 border" src="../assets/img/williamBondiColorsCategory.jpg" alt="William Bondi colors">
              </div>
              <div class="space-y-2">
                <div class="text-lg leading-6 font-medium space-y-1 text-center">
                  <h3>{{$t("colors")}}</h3>
                </div>
              </div>      
            </div>
          </li>

          <li>
            <div class="space-y-4">
              <div class="aspect-w-2 aspect-h-3">
                <img class="object-cover shadow-lg rounded-lg border-gray-700 border" src="../assets/img/williamBondiBearCategory.jpg" alt="William Bondi bear">
              </div>
              <div class="space-y-2">
                <div class="text-lg leading-6 font-medium space-y-1 text-center">
                  <h3>{{$t("bear")}}</h3>
                </div>
              </div>      
            </div>
          </li>

          <li>
            <div class="space-y-4">
              <div class="aspect-w-2 aspect-h-3">
                <img class="object-cover shadow-lg rounded-lg border-gray-700 border" src="../assets/img/williamBondiZodiacCategory.jpg" alt="William Bondi zodiac">
              </div>
              <div class="space-y-2">
                <div class="text-lg leading-6 font-medium space-y-1 text-center">
                  <h3>{{$t("zodiac")}}</h3>
                </div>
              </div>      
            </div>
          </li>

          <li>
            <div class="space-y-4">
              <div class="aspect-w-2 aspect-h-3">
                <img class="object-cover shadow-lg rounded-lg border-gray-700 border" src="../assets/img/williamBondiHardCategory.jpg" alt="William Bondi hard">
              </div>
              <div class="space-y-2">
                <div class="text-lg leading-6 font-medium space-y-1 text-center">
                  <h3>{{$t("hard")}}</h3>
                </div>
              </div>      
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>