<script>
import { sendEmail } from "../components/utilities/emailUtils";
import { openLinkedIn } from "../components/utilities/socialUtils";

export default {
  name: "Footer",
  methods: {
    sendEmail, // Usa la funzione email
    openLinkedIn, // Usa la funzione LinkedIn
  },
};
</script>

<template>
  <footer>
    <nav>
      <ul>
        <li>
          <span @click.prevent="sendEmail">
            <i class="fa-regular fa-envelope"></i>
          </span>
        </li>
        <li>
          <span @click="openLinkedIn">
            <i class="fa-brands fa-linkedin-in"></i>
          </span>
        </li>
      </ul>
    </nav>
  </footer>
</template>

<style scoped>
footer {
  width: 100%;
  height: 50px;
  position: absolute;
  bottom: 0;
  left: 0;
  border-top: var(--border-width) solid var(--border-color);
}

footer nav {
  height: 100%;
  display: flex;
  align-items: center;
  z-index: 100;
  background-color: var(--nav-bg-color);
}

footer nav ul {
  display: flex;
  list-style: none;
}

footer nav ul li {
  margin-left: 20px;
}

footer nav ul li span i {
  font-size: var(--font-md);
  color: var(--text-color);
  transition: scale 0.2s linear;
  cursor: pointer;
}

footer nav ul li span:hover i {
  color: var(--color-accent);
  scale: 1.3;
}
</style>
