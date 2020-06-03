<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style>
  div {
    display: grid;
    grid-template-rows: 1fr 5fr 50px;
    height: 100vh;
  }

  header {
    padding: 1em;
  }

  h1 {
    position: relative;
    left: 5px;
  }

  main {
    position: relative;
    background-color: white;
    box-sizing: border-box;
  }

  footer {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    grid-row: 3/-1;
    text-align: center;
  }
</style>

<div>

  <header>
    <h1>Brittney's Blog</h1>
    <Nav {segment} />
  </header>

  <main>
    <slot />
  </main>

  <footer>🐯</footer>
</div>
