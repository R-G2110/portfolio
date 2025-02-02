<script> 
export default {
  name: 'Header',
  data() {
    return {
      links: [
        { name: 'home', label: 'ad' },
        { name: 'work', label: 'work' },
        // { name: 'worklayout', label: 'work layout' },
        { name: 'tecnologies', label: 'tecnologies' },
        { name: 'about', label: 'about me' },
      ],
      menuOpen: false, // Stato per aprire/chiudere il menu
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen; // Cambia lo stato di "menuOpen"
    },
  },
};
</script>

<template>
  <header>
    <!-- Menu di navigazione -->
    <nav class="main-nav" :class="{ 'menu-open': menuOpen }">
      <router-link
        v-for="(item, index) in links"
        :key="index"
        :to="{ name: item.name }"
        :class="{'is-first': index === 0 }"
        @click="menuOpen = false"
      >
        <span>{{ item.label }}</span>
      </router-link>
    </nav>
  </header>
</template>

<style scoped>
header {
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  height: 50px;
  border-bottom: var(--border-width) solid var(--border-color);
}

/* Menu di navigazione */
.main-nav {
  width: 100%;
  padding-right: var(--nav-padding);
  min-height: var(--header-height);
  display: flex;
  align-items: center;
  z-index: 100;
  background-color: var(--dawn-dark);
  border-bottom: var(--border-width) solid var(--border-color);
}

.main-nav a {
  display: flex;
  padding: 0 20px;
  text-decoration: none;
  font-size: var(--font-xs);
  height: var(--header-height);
  line-height: 1;
  text-transform: uppercase;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.main-nav a.is-first {
  background-color: var(--color-accent);
  font-weight: 800;
}

.main-nav a.is-first:hover span {
  color: var(--dawn-dark);
}

.main-nav a.is-first:hover span::before {
  background-color: var(--dawn-dark);
}

.main-nav a span {
  position: relative;
}

.main-nav a span::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background-color: var(--color-accent-light);
  transition: width 0.7s ease, background-color 0.7s ease;
}

.main-nav a:hover span {
  color: var(--color-accent-light);
}

.main-nav a:hover span::before {
  width: 100%;
}

</style>
