<script>
import { sendEmail } from "../components/utilities/emailUtils";
export default {
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {
    sendEmail, // Usa la funzione email
  },
};
</script>

<template>
  <main>
    <div class="container">
      <h1>About me</h1>
      <span class="cta from-bottom" @click="sendEmail">contact me here <i class="fa-solid fa-arrow-right"></i></span>
      <p>Hi! I’m Argel and I’m a junior full-stack web developer. I love working on the web and making sure it continues to be a place for our creative, personal, and weird passions.</p>
      <p>I usually enjoy experimenting with the web. This portfolio reflects my learning journey and my passion for using web technologies in unexpected ways.</p>
      <p>I am currently exploring new opportunities. When I’m not coding, you’ll find me enjoying pop punk, Dr. Pepper, musicals, playing cards and walking in the park.</p>
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

  .cta {    
    padding: 5px 20px;
    position: relative; 
    color: var(--white);
    text-transform: uppercase;
    transition: all 500ms cubic-bezier(0.77, 0, 0.175, 1);  
    cursor: pointer;
    user-select: none;
    margin-bottom: 150px;
  }

  .cta:before, .cta:after {
    content: '';
    position: absolute; 
    transition: inherit;
    z-index: -1;
  }

  .cta:hover {
    color: var(--dawn-dark);
    
    background-color: var(--color-accent);  
    transition-delay: .5s;
  }

  .cta:hover:before {
    transition-delay: 0s;
  }

  .cta:hover:after {
    background: var(--white);
    transition-delay: .35s;
  }

  .from-bottom:before, 
  .from-bottom:after {
    left: 0;
    height: 0;
    width: 100%;
  }

  .from-bottom:before {
    top: 0; 
    border: var(--border-width) solid var(--border-color);
    border-top: 0;
    border-bottom: 0;
  }

  .from-bottom:after {
    bottom: 0;
    height: 0;
  }

  .from-bottom:hover:before,
  .from-bottom:hover:after {
    height: 100%;
  }
}
</style>
