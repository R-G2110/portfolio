<script setup>
import { ref } from "vue";

const props = defineProps({
  label: String, // Testo del bottone
});

const ripple = ref(null);

const createRipple = (event) => {
  const rect = event.target.getBoundingClientRect();
  ripple.value = {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
  };

  // Rimuove l'effetto dopo un breve momento
  setTimeout(() => {
    ripple.value = null;
  }, 300);
};
</script>

<template>
  <button class="ripple-button" @click="createRipple">
    {{ label }}
    <span v-if="ripple" class="ripple" :style="{ left: ripple.x + 'px', top: ripple.y + 'px' }"></span>
  </button>
</template>

<style scoped>
.ripple-button {
  position: relative;
  overflow: hidden;
	font-size: var(--font-sm);
	font-weight: bold;
  padding: 10px 20px;
  border: 2px solid var(--white);
  border-radius: 8px;
  background-color: transparent;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);
  background-color: var(--dawn-dark);
}

.ripple-button:hover {
  background-color: var(--color-green-light);
  color: var(--dawn-dark);
  border: 2px solid var(--dawn-dark);
  box-shadow: 0 0 15px var(--color-green-light);
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
