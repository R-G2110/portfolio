<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer
  },
  methods: {},
  mounted() {},
};
</script>

<template>
  <Header />
  <RouterView/>
  <Footer />
  
</template>

<style scoped>

</style>
