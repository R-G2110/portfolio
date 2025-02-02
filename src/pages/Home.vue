<template>
  <main>
    <div class="title">argel allan dela cruz</div>
    <div class="subtitle">junior web developer</div>

    <!-- Bottone per generare le bolle con effetto click -->
    <button class="action-button" @click="handleButtonClick" :class="{ clicked: isButtonClicked }">
      Click for some bubbles
      <span v-if="ripple" class="ripple" :style="{ left: ripple.x + 'px', top: ripple.y + 'px' }"></span>
    </button>

    <!-- Contenitore per le bolle -->
    <div class="bubble-container">
      <div
        v-for="(bubble, index) in bubbles"
        :key="index"
        class="bubble"
        :class="{ explode: bubble.exploding, growing: !bubble.exploded && !bubble.exploding }"
        :style="{
          left: bubble.x + 'px',
          top: bubble.y + 'px',
          backgroundColor: bubble.color
        }"
        @click="explodeBubble(index)"
      ></div>
    </div>
  </main>
</template>

<script setup>
import { ref, onUnmounted } from "vue";

const bubbles = ref([]);
const isButtonClicked = ref(false);
const ripple = ref(null);
let explosionInterval = null; // Timer per esplodere bolle casualmente ogni 1.5 sec

// Funzione per generare un numero casuale tra due valori
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Effetto di click sul bottone
const handleButtonClick = (event) => {
  isButtonClicked.value = true;

  // Effetto onda (ripple)
  const rect = event.target.getBoundingClientRect();
  ripple.value = {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
  };

  // Rimuove l'effetto dopo un breve momento
  setTimeout(() => {
    isButtonClicked.value = false;
    ripple.value = null;
  }, 300);

  createBubbles(); // Genera le bolle
};


const createBubbles = () => {
  const numBubbles = getRandomInt(200, 400); // Numero casuale di bolle
  bubbles.value = []; // Resetta le bolle esistenti

  for (let i = 0; i < numBubbles; i++) {
    const x = Math.random() * (window.innerWidth - 50);
    const y = Math.random() * (window.innerHeight - 50);
    const hue = Math.random() * 360;
    const randomColor = `hsla(${hue}, 100%, 70%, 0.6)`;

    bubbles.value.push({
      x,
      y,
      color: randomColor,
      exploding: false,
      exploded: false,
      growing: true,
    });
  }

  // Avvia il timer per esplodere bolle casualmente
  startRandomExplosion();
};

// Funzione per far esplodere una bolla a caso ogni 1.5 secondi
const startRandomExplosion = () => {
  if (explosionInterval) clearInterval(explosionInterval);

  explosionInterval = setInterval(() => {
    if (bubbles.value.length > 0) {
      const randomIndex = getRandomInt(0, bubbles.value.length - 1); // Seleziona una bolla casuale
      explodeBubble(randomIndex);
    } else {
      clearInterval(explosionInterval); // Ferma il timer se non ci sono più bolle
    }
  }, 600);
};

// Funzione per attivare l'esplosione della bolla
const explodeBubble = (index) => {
  if (bubbles.value[index]) {
    const bubble = bubbles.value[index];
    bubble.exploding = true;

    setTimeout(() => {
      bubble.exploded = true;
      bubble.growing = false;
      bubbles.value.splice(index, 1); // Rimuove la bolla
    }, 500);
  }
};

// Ferma il timer quando il componente viene smontato
onUnmounted(() => {
  if (explosionInterval) clearInterval(explosionInterval);
});
</script>

<style lang="scss" scoped>
main {
  height: calc(100vh - 200px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  .title,
  .subtitle {
    font-size: var(--font-xxl);
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.7), 0px 0px 10px rgba(0, 0, 0, 0.5);
    line-height: 1;
    margin-bottom: 5px;
    cursor: default;
    z-index: 999;
  }

  .subtitle {
    font-size: var(--font-xl);
    margin-bottom: 100px;
  }

  .action-button {
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

/* Contenitore per le bolle */
.bubble-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
}

/* Stile delle bolle con effetto di crescita */
.bubble {
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  pointer-events: all;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  transition: transform 0.3s, opacity 0.3s;
}

/* Animazione di crescita della bolla */
.growing {
  animation: grow 0.3s ease-out forwards;
}

@keyframes grow {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}

/* Effetto esplosione */
.explode {
  animation: explode 0.5s ease-out forwards;
}

@keyframes explode {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(2);
    opacity: 0.8;
  }
  100% {
    transform: scale(3);
    opacity: 0;
  }
}
</style>
