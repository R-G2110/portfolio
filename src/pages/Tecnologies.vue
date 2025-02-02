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
      <h1>tecnologies</h1>
      <p>These are the tecnologies i usually use:</p>
      <ul>
        <li>
          <img src="/html5.png" alt="">
          <span>html 5</span>
        </li>
        <li>
          <img src="/css3.png" alt="">
          <span>css</span>
        </li>
        <li>
          <img src="/csharp.png" alt="">
          <span>c#</span>
        </li>
        <li>
          <img src="/javascript.png" alt="">
          <span>javascript</span>
        </li>
        <li>
          <img src="/php.png" alt="">
          <span>php</span>
        </li>
        <li>
          <img src="/netcore.png" alt="">
          <span>.net</span>
        </li>
        <li>
          <img src="/laravel.png" alt="">
          <span>laravel</span>
        </li>
        <li>
          <img src="/vuejs.png" alt="">
          <span>vue js</span>
        </li>
        <li>
          <img src="/angular.png" alt="">
          <span>angular</span>
        </li>
        <li>
          <img src="/mysql.png" alt="">
          <span>mysql</span>
        </li>
        <li>
          <img src="/sqlserver.png" alt="">
          <span>sql server</span>
        </li>
      </ul>
    </div>
  </main>
</template>


<style lang="scss" scoped>
.container {
  width: 800px;
  flex-direction: column;
  align-items: center;
  h1 {
    width: fit-content;
    font-size: var(--font-xxxxl);
    border-bottom: var(--border-width) solid var(--border-color);
    text-transform: capitalize;
  }
  p {
    //text-transform: ;
    padding: 5px 15px;
    //font-weight: 600;
    margin-bottom: 50px;
  }
  ul {
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(5, 1fr); // Cinque colonne di larghezza uguale
    gap: 30px; // Distanza tra gli elementi
    list-style: none;
    li { 
      max-height: 150px;
      display: grid;
      padding: 10px;
      text-align: center;
      cursor: pointer;
    }
    img {
      width: 100px;
      height: 100px;
      transition: scale 0.2s linear
    }
    li:hover img {
      scale: 1.1;
    }
    span {
    text-transform: uppercase;
    padding: 5px 15px;
    font-weight: 400;
    margin-bottom: 50px;
  }
  }
}
</style>