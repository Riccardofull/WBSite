<template>
  <Layout>
    <Hero />
    <Footer />
  </Layout>
</template>

<script>
import Hero from "../components/Hero";
import Footer from "../components/Footer";

export default {
  metaInfo: {
    title: "William Bondi"
  },
  components: {
    Hero,
    Footer,
  }
};
</script>