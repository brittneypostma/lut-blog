<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`blog/recentPosts.json`);
    const posts = await res.json();
    return { posts };
  }
</script>

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
    <aside transition:fly={{ x: 100 }}>
      <h4>Post Archive</h4>
      <ul>
        {#each posts as post}
          <li>
            <a rel="prefetch" href="blog/{post.slug}">{post.title}</a>
          </li>
        {/each}
      </ul>
    </aside>
  {/if}
</div>
