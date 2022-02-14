<template>
<div>
	<h1 class="text-center">Hello world</h1>
	<p class="text-center font-bold">{{ msg }} - and bold!</p>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
