<template>
    <div class="bg-white overflow-hidden">
        <div class="relative max-w-7xl mx-auto py-14 lg:py-24 px-12 md:px-48 lg:px-8">
            <div class="hidden lg:block bg-white absolute top-0 bottom-0 left-3/4 w-screen" />
            <div class="max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
              <h1 class="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">
                {{$t("exhibitions")}}
              </h1>
            </div>

            <div class="flow-root mt-12">
              <ul role="list" class="-mb-8">
                <li>
                  <div class="relative pb-14">
                    <span class="absolute top-5 left-10 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                    <div class="relative flex items-start space-x-3">
                      <div class="relative">
                        <img class="flex h-20 w-20 items-center justify-center rounded-full bg-gray-400 ring-8 ring-white border border-1 border-black" src="../assets/img/ExhibitionsLogo/ArtMozaica.png" alt="ArtMozaica">
                      </div>
                      <div class="min-w-0 flex-1">
                        <div>
                          <h2 class="text-2xl font-medium font-semibold text-gray-900">Art Mozaika - Akta Erotica</h2>
                          <p class="text-md mt-0.5 text-sm text-gray-500">15/08/22 to 16/09/22 - {{$t("prague")}}</p>
                        </div>
                        <div class="text-sm mt-2 text-sm text-gray-700">
                          <a href="https://www.artmozaika.eu/en/vystavy/274-akta-erotika-iii/" class="cursor-pointer underline">www.artmozaika.eu</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="relative pb-8">
                    <div class="relative flex items-start space-x-3">
                      <div class="relative">
                        <img class="flex h-20 w-20 items-center justify-center rounded-full bg-gray-400 ring-8 ring-white" src="../assets/img/ExhibitionsLogo/NuvolEros.jpeg" alt="NuvolEros">
                      </div>
                      <div class="min-w-0 flex-1">
                        <h2 class="text-2xl font-medium font-semibold text-gray-900">NuvolEros</h2>
                        <p class="text-md mt-0.5 text-sm text-gray-500">20/06 to 25/08/22 - Milano Marittima</p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
        </div>
    </div>
</template>