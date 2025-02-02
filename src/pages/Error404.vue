<script>
export default {
  data() {
    return {
      ripple: null, // Per gestire l'effetto onda
    };
  },
  methods: {
    goBack(event) {
      // Effetto onda (ripple)
      const rect = event.target.getBoundingClientRect();
      this.ripple = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      };

      // Rimuove l'effetto dopo un breve momento
      setTimeout(() => {
        this.ripple = null;
        window.history.back(); // Torna alla pagina precedente
      }, 300);
    }
  }
};
</script>

<template>
  <div class="error-wrapper">
    <div class="error-image">
      <img src="/error-404.jpg" alt="Error 404">
    </div>
    <button class="back-button" @click="goBack">
      Go Back
      <span v-if="ripple" class="ripple" :style="{ left: ripple.x + 'px', top: ripple.y + 'px' }"></span>
    </button>
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

  .back-button {
    position: relative;
    font-size: var(--font-sm);
    font-weight: bold;
    margin-top: 20px;
    padding: 10px 20px;
    border: 2px solid var(--white);
    border-radius: 8px;
    background-color: transparent;
    color: #fff;
    cursor: pointer;
    transition: all 0.2s ease;
    overflow: hidden;
    z-index: 999;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);
    background-color: var(--dawn-dark);

    &:hover {
      background-color: var(--color-green-light);
      color: var(--dawn-dark);
      border: 2px solid var(--dawn-dark);
      box-shadow: 0 0 15px var(--color-green-light);
    }

    &.clicked {
      transform: scale(0.95);
    }

    .ripple {
      position: absolute;
      width: 100px;
      height: 100px;
      background: rgba(255, 255, 255, 0.5);
      border-radius: 50%;
      transform: scale(0);
      animation: ripple-effect 0.4s ease-out forwards;
    }
  }
}

/* Effetto onda (ripple) */
@keyframes ripple-effect {
  0% {
    transform: scale(0);
    opacity: 0.8;
  }
  100% {
    transform: scale(3);
    opacity: 0;
  }
}
</style>
