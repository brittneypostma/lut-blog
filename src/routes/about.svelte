<script>
  import { fadeIn, fadeOut } from "../animate";
</script>

<style>
  div {
    padding: 0 20px;
  }
</style>

<svelte:head>
  <title>About</title>
</svelte:head>
<div in:fadeIn out:fadeOut>

  <h1>About this site</h1>

  <p>This is the 'about' page. There's not much here.</p>
</div>
