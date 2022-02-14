<template>
  <div id="app">
		<Navbar></Navbar>
		<router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    // Home,
		Navbar,
		// Activities,
		// Creators,
		// DateIdeas,
		// Restaurants
  },
	data() {
		return {
			msg: "I'm centered"
		}
	}
}
</script>

<style>
/* 
	TODO: 
	1. Mess with some quick designs in Figma
	2. Create components to match previous pages 

*/

*, *::before, *::after {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
