<template>
    <div class="flex flex-col lg:flex-row items-center bg-gray-800 px-4 sm:pt-4 pb-8 sm:pb-10 lg:pt-10 lg:pb-16 lg:px-8 xl:px-56">
        <h2 class="mt-6 text-xl sm:text-3xl font-semibold text-white">
            {{ $t("contactMeForMoreInfo") }}
        </h2>
        <div class="mx-auto lg:ml-auto lg:mx-0 mt-6">
            <a @click="goToPage('/contacts')" class="p-4 border border-transparent text-base font-medium rounded-md text-gray-800 bg-white hover:opacity-90 md:text-lg cursor-pointer">
                {{$t("contactMe")}}
            </a>
        </div>
    </div>
</template>

<script>
export default{
    methods: {
        goToPage(page){  
            let language = this.$i18n.locale.split("-")[0]; 
            this.$router.push({ path: "/" + language + page });     
        }
    }
};
</script>