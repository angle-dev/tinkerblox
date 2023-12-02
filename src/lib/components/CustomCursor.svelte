<script>
  import { onMount } from "svelte";

  import cursorimg from "$lib/cursorimg.png";
  let x = -100;
  let y = -100;

  onMount(() => {
    const initCursor = () => {
      document.addEventListener("mousemove", (e) => {
        x = e.clientX;
        y = e.clientY;
      });
      const hoverables = document.querySelectorAll(".hoverable, a, button");
      hoverables.forEach((hoverable) => {
        hoverable.addEventListener("mouseenter", () => {
          document.body.style.cursor = "none";
        });
        hoverable.addEventListener("mouseleave", () => {
          document.body.style.cursor = "auto";
        });
      });
    };

    initCursor();
  });
</script>

<div
  class="custom-cursor"
  style="left: {x}px; top: {y}px; background-image: url('{cursorimg}');"
/>

<style>
  .custom-cursor {
    width: 32px; /* Adjust width and height as needed */
    height: 32px;
    position: fixed;
    z-index: 99999999999999999999999999999999;
    pointer-events: none;
    background-size: cover;
    background-repeat: no-repeat;
    transition: transform 0.2s ease-out;
    transform: translate(-50%, -50%);
  }
</style>
