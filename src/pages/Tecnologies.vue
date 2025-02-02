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

ul {
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 30px;
  list-style: none;
}

li {
  max-height: 150px;
  display: grid;
  padding: 10px;
  text-align: center;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

li:hover {
  transform: translateY(-5px);
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.3);
}

img {
  width: 100px;
  height: 100px;
  transition: transform 0.2s linear;
}

// li:hover img {
//   transform: scale(1.1);
// }

span {
  text-transform: uppercase;
  padding: 5px 15px;
  font-weight: 600;
  margin-bottom: 50px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
}

</style>