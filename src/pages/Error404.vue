<script setup>
import RippleButton from "../components/partials/RippleButton.vue";

const goBack = () => {
  window.history.back();
};
</script>

<template>
  <div class="error-wrapper">
    <div class="error-image">
      <img src="/error-404.jpg" alt="Error 404">
    </div>
    <RippleButton label="Go Back" @click="goBack" />
  </div>
</template>

<style lang="scss" scoped>
.error-wrapper {
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  .error-image {
    width: 500px;
    height: 350px;
    margin-bottom: 100px;
  }

}

</style>
