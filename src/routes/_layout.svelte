<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style>
  main {
    position: relative;
    min-height: 80vh;
    background-color: white;
    box-sizing: border-box;
  }

  footer {
    text-align: center;
  }
</style>

<header>
  <h1>Brittney's Blog</h1>
  <Nav {segment} />
</header>

<main>
  <slot />
</main>

<footer>🐯</footer>
