<template>
    <Layout>
        <AlternativeHero title="gallery" description=""/>
        <DrawingList />
        <Footer />
    </Layout>
</template>

<script>
import AlternativeHero from "../../components/AlternativeHero.vue";
import Footer from "../../components/Footer.vue";
import DrawingList from "../../components/Gallery.vue";

export default {
    name: "Gallery",
    components: {
        AlternativeHero,
        Footer,
        DrawingList
    }
}
</script>