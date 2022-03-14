<template>
    <Layout>
        <AlternativeHero title="bio" />
        <Bio />
        <Footer />
    </Layout>
</template>

<script>
import AlternativeHero from "../../components/AlternativeHero";
import Footer from "../../components/Footer";
import Bio from "../../components/Bio";

export default {
    name: "Biography",
    components: {
        AlternativeHero,
        Footer,
        Bio
    }
}
</script>