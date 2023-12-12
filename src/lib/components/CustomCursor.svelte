<script>
  import { onMount } from "svelte";

  export let size = 20;

  let x = -100;
  let y = -100;

  const cx = size / 2;
  const cy = size / 2;

  onMount(() => {
    const initCursor = () => {
      document.addEventListener("mousemove", (e) => {
        x = e.clientX;
        y = e.clientY;
      });
    };
    initCursor();
  });
</script>

<div
  class="custom-cursor"
  style="left: {x - cx}px; top: {y - cy}px;--size:{size}px; "
/>

<div
  class="custom-cursor-follow"
  style="left: {x - cx}px; top: {y - cy}px;--size:{size}px; "
/>

<style>
  .custom-cursor {
    background-color: #00cf15;
    width: 30px;
    height: 30px;

    position: fixed;
    border-radius: 50%;
    pointer-events: none;
    z-index: 99999999999999999999999999999999;
    display: block;

    transform: translate(-50%, -50%);
    cursor: none;
  }

  .custom-cursor-follow {
    background-color: transparent;
    border: 3px solid #00cf15;
    width: 70px;
    height: 70px;
    position: fixed;
    border-radius: 50%;
    pointer-events: none;
    z-index: 99999999999999999999999999999999;
    display: block;
    transition: all 0.15s ease-out;
    transform: translate(-50%, -50%);
    cursor: none;
  }
</style>
