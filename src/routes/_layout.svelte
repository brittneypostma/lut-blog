<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<header>
	<h1>Brittney's Blog</h1>
	<Nav {segment}/>
</header>

<main>
	<slot></slot>
</main>

<footer>
🐯
</footer>

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
	
	footer {
		text-align: center;
	}
</style>