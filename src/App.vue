<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer
  },
  computed: {
    shouldShowFooter() {
      return !(this.$route.path === "/" || this.$route.path === "/home");
    }
  }
};
</script>

<template>
  <Header />
  <RouterView/>
  <Footer v-if="shouldShowFooter" />
</template>
