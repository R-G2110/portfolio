<script>
export default {
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<template>
  <main>
    <div class="container">
      <h1>Work Layout</h1>
      <p>This is a collection of my projects. Check 'em out.</p>
    </div>
    <div class="project-wrapper">
      <ul>
        <li>
          <img src="/image1.png" alt="Project 1">
          <p>Project Title</p>
        </li>
        <li>
          <img src="/image1.png" alt="Project 1">
          <p>Project Title</p>
        </li>
        <li>
          <img src="/image1.png" alt="Project 1">
          <p>Project Title</p>
        </li>
        <li>
          <img src="/image1.png" alt="Project 1">
          <p>Project Title</p>
        </li>
        <li>
          <img src="/image1.png" alt="Project 1">
          <p>Project Title</p>
        </li>
        <li>
          <img src="/image1.png" alt="Project 1">
          <p>Project Title</p>
        </li>
        <li>
          <img src="/image1.png" alt="Project 1">
          <p>Project Title</p>
        </li>
        <li>
          <img src="/image1.png" alt="Project 1">
          <p>Project Title</p>
        </li>
        <li>
          <img src="/image1.png" alt="Project 1">
          <p>Project Title</p>
        </li>
        <li>
          <img src="/image1.png" alt="Project 1">
          <p>Project Title</p>
        </li>
        <li>
          <img src="/image1.png" alt="Project 1">
          <p>Project Title</p>
        </li>
      </ul>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.container {
  max-width: 100%;
  width: 800px;
  margin: 0 auto;
  padding: 0 20px;
  flex-direction: column;
  align-items: center;

  h1 {
    width: fit-content;
    font-size: var(--font-xxxxl);
    border-bottom: var(--border-width) solid var(--border-color);
    text-transform: capitalize;
  }
  p {
    padding: 5px 15px;
    font-size: var(--font-md);
    margin-bottom: 50px;
  }
}

.project-wrapper {
  width: 100%;
  border-top: var(--border-width) solid var(--border-color);
  overflow: auto;

  ul {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    list-style: none;

    li {
      height: auto;
      padding: 20px;
      text-align: center;
      cursor: pointer;
      border: var(--border-width) solid var(--border-color);

      img {
        width: 100%;
        height: auto;
        margin-bottom: 10px;
        transition: all 0.2s linear;
        outline: none;
      }

      &:hover img {
        scale: 0.95;
        outline: 3px solid var(--color-accent);
      }
    }
  }
}

@media (max-width: 1024px) {
  .project-wrapper ul {
    grid-template-columns: repeat(3, 1fr); /* Tre colonne per tablet */
  }
}

@media (max-width: 768px) {
  .project-wrapper ul {
    grid-template-columns: repeat(2, 1fr); /* Due colonne per schermi medi */
  }

  li {
    padding: 15px; /* Riduci il padding */
  }
}

@media (max-width: 480px) {
  .project-wrapper ul {
    grid-template-columns: repeat(1, 1fr); /* Una colonna per smartphone */
  }

  .container p {
    font-size: var(--font-sm); /* Riduci il testo */
  }
}
</style>
