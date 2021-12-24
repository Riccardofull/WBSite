<template>
  <Layout>
    <Hero />
    <Banner />
    <Categories />
    <Testimonials />
    <Footer />
  </Layout>
</template>

<script>
import Hero from "../components/Hero.vue";
import Categories from "../components/Categories.vue";
import Footer from "../components/Footer";
import Banner from "../components/Banner.vue";
import Testimonials from "../components/Testimonials.vue";

export default {
  metaInfo: {
    title: "William Bondi"
  },
  components: {
    Hero,
    Categories,
    Footer,
    Banner,
    Testimonials,
  }
};
</script>