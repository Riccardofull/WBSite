<template>
    <div class="bg-white overflow-hidden">
        <div class="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div class="hidden lg:block bg-white absolute top-0 bottom-0 left-3/4 w-screen"></div>
                <div class="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
                    <div>
                        <h2 class="text-base text-gray-700 font-semibold tracking-wide uppercase">{{$t("historicalNotes")}}</h2>
                        <h3 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">William Bondi</h3>
                    </div>
                </div>
            <div class="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
                <div class="relative lg:row-start-1 lg:col-start-2">
                    <div class="relative text-base mx-auto max-w-prose lg:max-w-none">
                        <figure>
                            <div class="aspect-w-12 aspect-h-7 lg:aspect-none">
                                <g-image class="object-cover object-center" src="https://res.cloudinary.com/william-bondi/image/upload/v1647297109/Screenshot_2022-03-14_232324_x7czs1.png" alt="William bondi ulula" />  
                                <g-image class="object-cover object-center" src="https://res.cloudinary.com/william-bondi/image/upload/v1647297240/Screenshot_2022-03-14_233250_sxevjk.png" alt="William bondi bionika elton cop pornostar" />
                            </div>             
                        </figure>
                    </div>
                </div>
                <div class="mt-8 lg:mt-0">
                    <div class="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1 text-justify px-2 sm:px-12 lg:px-0">
                        <p class="mt-8 text-lg text-gray-500 text-justify mb-16">
                            {{$t("bioDesc1")}}
                        </p>
                        <p class="text-lg text-gray-500 text-justify">{{$t("bioDesc2")}}</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
            <g-image class="h-96 w-full object-cover lg:h-full" style="object-position: 0% 30%" src="https://res.cloudinary.com/william-bondi/image/upload/v1647297650/Screenshot_2022-03-14_234041_v5uhvg.png" alt="" />
            <div class="lg:col-start-2">
                <div class="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1 text-justify px-2 sm:px-12 lg:px-0">
                    <p class="mt-8 text-lg text-gray-500 text-justify">{{$t("bioDesc3")}}</p>
                    <p class="mt-8 text-lg text-gray-500 text-justify">{{$t("bioDesc4")}}</p>
                </div>
            </div>
        </div>
    </div>
</template>