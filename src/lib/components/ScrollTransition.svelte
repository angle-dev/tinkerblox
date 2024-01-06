<script lang="ts">
  import { inview } from "svelte-inview";
  let isInView;
  export let threshold;
  export let rootMargin;
</script>

<div
  use:inview={{
    unobserveOnEnter: true,
    threshold: threshold || 0.2,
    rootMargin: rootMargin || "-10%",
  }}
  on:inview_enter={(event) => {
    const { inView } = event.detail;
    isInView = inView;
  }}
>
  <div
    style={`transform: translateY(${isInView ? 0 : 80}px);
    opacity: ${isInView ? 1 : 0}; transition: all 0.75s ease-in-out;`}
  >
    <slot />
  </div>
</div>
