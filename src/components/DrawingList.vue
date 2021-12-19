<template>
    <div class="bg-white">
        <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                <div class="group" v-for="image in images" :key="image.Name">
                    <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8 border border-gray-800">
                        <a :href="image.Path">
                            <g-image :src="image.pathLong" alt="William Bondi" class="w-full h-full object-center object-cover group-hover:opacity-75" />
                        </a>
                    </div>
                    <h3 class="mt-4 text-sm text-gray-800">
                        {{image.Name}}
                    </h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "DrawingList",
    data() {
        return {
            images: [],
        }
    },
    mounted() {
        this.importAll(require.context('../assets/img/drawings/', true, /\.jpg$/));
    },
    methods: {
        importAll(r) {
            r.keys().forEach(key => (this.images.push({ pathLong: r(key), pathShort: key })));
            this.images = this.images.map(image => {
                image = {
                    ...image,
                    Name: image.pathShort.replace('./', '').replace('.jpg',''),
                    Path: "/" + Name
                };
                return image;
            });
        },
    }
}
</script>
