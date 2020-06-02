<script>
  import { fly } from "svelte/transition";
  export let segment;
  export let posts;
</script>

<style>
  .two-col {
    display: grid;
    grid-template-columns: 3fr 1fr;
  }

  ul {
    list-style: none;
    padding-inline-start: 0;
  }
</style>

<div class="two-col">
  <slot />
  {#if segment}
    {console.log(segment)}
    <aside transition:fly={{ x: 100, duration: 1000 }}>
      <h4>Post Archive</h4>
      <ul>
        {#each posts as post}
          <li>
            <a rel="prefetch" href="blog/{post.slug}">
              {post.title} - {post.date}
            </a>
          </li>
        {/each}
      </ul>
    </aside>
  {/if}
</div>
