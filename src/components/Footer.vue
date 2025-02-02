<script>
	export default {
		name: 'Footer',
	}
</script>

<template>
	<footer>
		<nav>
			<ul>
        <li><a href="#"><i class="fa-regular fa-envelope"></i></a></li>
        <li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
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

footer nav ul li a i {
  font-size: var(--font-md);
  color: var(--text-color);
  transition: scale 0.2s linear;
}

footer nav ul li a:hover i {
  color: var(--color-accent);
  scale: 1.3;
}
</style>