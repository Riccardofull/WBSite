<template>
    <Layout>
        <AlternativeHero title="contacts" description="contactsDesc"/>
        <ContactUs />
        <Footer />
    </Layout>
</template>

<script>
import AlternativeHero from "../../components/AlternativeHero";
import Footer from "../../components/Footer";
import ContactUs from "../../components/ContactUs";

export default {
    name: "Contacts",
    components: {
        AlternativeHero,
        Footer,
        ContactUs
    }
}
</script>