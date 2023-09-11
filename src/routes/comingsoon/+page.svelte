<script>
  import comingsoon from "$lib/comingsoon.png";
  import GradientButton from "$lib/components/GradientButton.svelte";
</script>

<section
  style="  background-image: url('{comingsoon}'); "
  class="relative z-30 flex h-fit min-h-[777px] w-full flex-col items-center justify-center bg-cover bg-center bg-no-repeat p-3 py-5 md:p-12"
>
  <div class=" flex flex-col items-center p-3 text-center align-bottom">
    <h3 class=" content-center text-4xl font-bold text-base-100 md:text-7xl">
      Coming Soon…
    </h3>

    <p class="mt-16 max-w-3xl text-center text-xl text-base-100 md:text-2xl">
      This page is still in development and will be launched soon.<br />Stay
      tuned for updates.
    </p>
    <div class=" mt-16 w-fit">
      <GradientButton>LEARN MORE</GradientButton>
    </div>
  </div>
</section>
