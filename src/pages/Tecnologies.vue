<script setup>
const technologies = [
  { name: "HTML 5", img: "/html5.png" },
  { name: "CSS", img: "/css3.png" },
  { name: "C#", img: "/csharp.png" },
  { name: "JavaScript", img: "/javascript.png" },
  { name: "PHP", img: "/php.png" },
  { name: ".NET", img: "/netcore.png" },
  { name: "Laravel", img: "/laravel.png" },
  { name: "Vue.js", img: "/vuejs.png" },
  { name: "Angular", img: "/angular.png" },
  { name: "MySQL", img: "/mysql.png" },
  { name: "SQL Server", img: "/sqlserver.png" },
];
</script>

<template>
  <main>
    <div class="container">
      <h1>Technologies</h1>
      <p>These are the technologies I usually use:</p>
      <ul>
        <li v-for="tech in technologies" :key="tech.name">
          <img :src="tech.img" :alt="tech.name" />
          <span>{{ tech.name }}</span>
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

span {
  text-transform: uppercase;
  padding: 5px 15px;
  font-weight: 600;
  margin-bottom: 50px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
}
</style>
