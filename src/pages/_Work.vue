<script>
export default {
  data() {},
  mounted() {},
  methods: {},
};
</script>

<template>
  <main>
    <div class="container">
      <h1>work in progress...</h1>
      <p>My bad, I'm still working on it.</p>

    </div>
  </main>
</template>

<style lang="scss" scoped>
.container {
  width: 800px;
  flex-direction: column;
  align-items: center;
}

h1 {
  width: fit-content;
  font-size: var(--font-xxxxl);
  border-bottom: var(--border-width) solid var(--border-color);
  text-transform: capitalize;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.3);
}

p {
  padding: 5px 15px;
  margin-bottom: 50px;
  color: var(--text-color);
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
}
</style>
