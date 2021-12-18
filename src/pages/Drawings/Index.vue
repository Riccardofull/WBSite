<template>
    <Layout>
        <AlternativeHero />
        <Footer />
    </Layout>
</template>

<script>
import AlternativeHero from "../../components/AlternativeHero";
import Footer from "../../components/Footer";

export default {
    name: "Drawings",
    components: {
        AlternativeHero,
        Footer
    }
}
</script>