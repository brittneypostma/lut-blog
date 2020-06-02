<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`blog.json`);
    const posts = await res.json();
    return { posts };
  }
</script>

<script>
  export let posts;
</script>

<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }
</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<div>

  <h1>Recent posts</h1>

  <ul>
    {#each posts as post}
      <li>
        <a rel="prefetch" href="blog/{post.slug}">{post.title} - {post.date}</a>
      </li>
    {/each}
  </ul>

</div>
