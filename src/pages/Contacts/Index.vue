<template>
    <Layout>
        <AlternativeHero title="contacts" description="contactsDesc"/>
        <Footer />
    </Layout>
</template>

<script>
import AlternativeHero from "../../components/AlternativeHero";
import Footer from "../../components/Footer";

export default {
    name: "Contacts",
    components: {
        AlternativeHero,
        Footer
    }
}
</script>