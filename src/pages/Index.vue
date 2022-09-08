<template>
  <Layout>
    <Hero />
    <Banner />
    <Categories />
    <Testimonials />
    <Exhibition />
    <MoreInfo />
    <Footer />
  </Layout>
</template>

<script>
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Testimonials from "../components/Testimonials";
import Exhibition from "../components/Exhibition";
import MoreInfo from "../components/MoreInfo";

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
    Exhibition,
    MoreInfo
  }
};
</script>