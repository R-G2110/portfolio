import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Work from './pages/Work.vue';
import WorkLayout from './pages/WorkLayout.vue';
import Tecnologies from './pages/Tecnologies.vue';
import Error404 from './pages/Error404.vue';

const router = createRouter({
	history: createWebHistory(),

	routes: [
    
    {
			path: '/',
      name: 'home',
			component: Home
		},
    {
			path: '/about-me',
      name: 'about',
			component: About
		},
    {
			path: '/work',
      name: 'work',
			component: Work
		},
    {
			path: '/worklayout',
      name: 'worklayout',
			component: WorkLayout
		},
    {
			path: '/tecnologies',
      name: 'tecnologies',
			component: Tecnologies
		},
		{
			path: '/:pathMatch(.*)*',
			component: Error404
		}
	]
});

export { router }