<template>
  <Layout>
    <Hero />
    <Banner />
    <Categories />
    <Footer />
  </Layout>
</template>

<script>
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Banner from "../components/Banner.vue";

export default {
  metaInfo: {
    title: "William Bondi"
  },
  components: {
    Hero,
    Categories,
    Footer,
    Banner,
  }
};
</script>