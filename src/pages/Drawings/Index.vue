<template>
    <Layout>
        <AlternativeHero title="drawings" description="drawingsDesc"/>
        <DrawingList />
        <Footer />
    </Layout>
</template>

<script>
import AlternativeHero from "../../components/AlternativeHero.vue";
import Footer from "../../components/Footer.vue";
import DrawingList from "../../components/DrawingList.vue";

export default {
    name: "Drawings",
    components: {
        AlternativeHero,
        Footer,
        DrawingList
    }
}
</script>