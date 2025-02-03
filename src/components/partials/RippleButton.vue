<script setup>
import { ref } from "vue";

const props = defineProps({
  label: String, // Testo del bottone
});

const ripple = ref(null);
const hoverColor = ref("--color-green-light"); // Colore predefinito

// Array di colori vivaci definiti in :root
const colors = [
  "--color-red-bright",
  "--color-orange-bright",
  "--color-yellow-bright",
  "--color-lime-bright",
  "--color-cyan-bright",
  "--color-blue-bright",
  "--color-purple-bright",
  "--color-pink-bright",
  "--color-magenta-bright",
  "--color-turquoise-bright",
  "--color-accent"
];

const createRipple = (event) => {
  const rect = event.target.getBoundingClientRect();
  ripple.value = {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
  };

  setTimeout(() => {
    ripple.value = null;
  }, 300);
};

// Cambia il colore del bottone in hover
const changeHoverColor = () => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  hoverColor.value = colors[randomIndex]; // Seleziona un colore casuale
};
</script>

<template>
  <button
    class="ripple-button"
    @click="createRipple"
    @mouseover="changeHoverColor"
    :style="{ '--hover-color': `var(${hoverColor})` }"
  >
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
  transition: all 0.3s ease;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);
  background-color: var(--dawn-dark);
  z-index: 999;
}

.ripple-button:hover {
  background-color: var(--hover-color);
  color: var(--dawn-dark);
  border: 2px solid var(--dawn-dark);
  box-shadow: 0 0 15px var(--hover-color);
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
