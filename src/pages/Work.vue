<script>
export default {
  data() {
    return {
      dots: "", 
    };
  },
  mounted() {
    this.animateDots(); 
  },
  methods: {
    animateDots() {
      let count = 0;
      setInterval(() => {
        count = (count + 1) % 4; 
        this.dots = ".".repeat(count); 
      }, 1500); 
    },
  },
};
</script>

<template>
  <main>
    <!-- <div class="text">sorry,</div>
    <div class="text">i'm still</div>
    <div class="text">
      working on it<span class="dots">{{ dots }}</span>
    </div> -->
  </main>
</template>

<style lang="scss" scoped>
main {
  height: calc(100vh - 200px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.text {
  font-size: var(--font-xxxxl);
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  line-height: 1;
  margin-bottom: 20px;
}

.dots {
  display: inline-block;
  width: 24px; 
  text-align: left;
}
</style>
