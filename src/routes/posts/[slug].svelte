<script context="module">
  export async function preload({ params }) {
    this.redirect(301, "blog/" + params.slug);
  }
</script>
