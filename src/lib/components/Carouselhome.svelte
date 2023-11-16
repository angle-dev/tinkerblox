<script>
  import { Splide, SplideSlide } from "@splidejs/svelte-splide";
  import "@splidejs/splide/dist/css/themes/splide-default.min.css";

  let index = 0;

  const carouselImages = [
    {
      image:
        "https://tbpublicsite.blob.core.windows.net/tinkerblox/Home%20Page/Stories%20we%20bring%20to%20life_Remote%20Asset%20_%20Site%20Management.png",
      head: "Remote Asset & Site Management",
      text: "Oil & gas remote asset monitoring & incident management. ",
    },
    {
      image:
        "https://tbpublicsite.blob.core.windows.net/tinkerblox/Home%20Page/Stories%20we%20bring%20to%20life_Experience%20the%20future%20of%20Community%20Living.png",
      head: "Experience the future of Community Living ",
      text: "Sustainable neighbourhoods with a full-fledged Digital Experience ",
    },
    {
      image:
        "https://tbpublicsite.blob.core.windows.net/tinkerblox/Home%20Page/Stories%20we%20bring%20to%20life_The%20future%20of%20Devices%20is%20User%20Experience.png",
      head: "The future of Devices is User Experience",
      text: "As Devices turn into ecosystems, users buy into the experience delivered at their fingertips ",
    },
    {
      image:
        "https://tbpublicsite.blob.core.windows.net/tinkerblox/Home%20Page/Stories%20we%20bring%20to%20life_Changing%20Farming%20into%20a%20precision%20economy.png",
      head: "Changing Farming into a precision economy",
      text: "Harnessing the best of nature with the smartest technologies for your greenhouse",
    },
    {
      image:
        "https://tbpublicsite.blob.core.windows.net/tinkerblox/Home%20Page/Stories%20we%20bring%20to%20life_Deploying%20Industry%20X.O%20Ensuring%20360%20Degree%20Value.png",
      head: "Deploying Industry X.O Ensuring 360 Degree Value",
      text: "Design to implementation of industry X.O roadmap curated to your specific environment",
    },
    {
      image:
        "https://tbpublicsite.blob.core.windows.net/tinkerblox/Home%20Page/Stories%20we%20bring%20to%20life_Unleashing%20the%20Hidden%20Potential%20of%20your%20Smart%20Utilities.png",
      head: "Unleashing the Hidden Potential of your Smart Utilities",
      text: "From an effective lever for cost optimization to the backbone of sustainable smart spaces",
    },

    {
      image:
        "https://tbpublicsite.blob.core.windows.net/tinkerblox/Home%20Page/Stories%20we%20bring%20to%20life_Predictive%20Manufacturing.png",
      head: "Predictive Manufacturing",
      text: "No Unplanned Downtimes in high speed manufacturing.... Advanced Predictive Maintenance resulting in cost saving & enhance RUL",
    },
    {
      image:
        "https://tbpublicsite.blob.core.windows.net/tinkerblox/Home%20Page/Stories%20we%20bring%20to%20life_Device%20Real-Time%20Precision%20sharing%20of%20Work-Loads.png",
      head: "Device Real-Time Precision sharing of Work-Loads",
      text: "Device interactions to autonomously execute actions",
    },
    {
      image:
        "https://tbpublicsite.blob.core.windows.net/tinkerblox/Home%20Page/Stories%20we%20bring%20to%20life_Stories%20we%20bring%20to%20life_AgriFood%20Net%20Zero.png",
      head: "AgriFood Net Zero",
      text: "Measure & manage emission to track Net-Zero outcomes for food production ",
    },
    {
      image:
        "https://tbpublicsite.blob.core.windows.net/tinkerblox/Home%20Page/Stories%20we%20bring%20to%20life_Autonomous%20Ambient%20Spaces.png",
      head: "Autonomous Ambient Spaces",
      text: "Sustain product sensitive environments via autonomous command and control",
    },
  ];

  const options = {
    type: "loop",
    gap: "1rem",
    padding: "1rem",
    focus: "center",
    pagination: false,
    autoplay: true,
    interval: 2000,
    autoWidth: true,
    width: "100%",
  };
</script>

<div class=" mt-5 flex w-full flex-col items-center pb-[200px] align-middle">
  <div
    class="absolute z-0 h-[450px] w-64 bg-[#F0F0F0] shadow-md md:h-[750px] md:w-[calc(30vw+1rem)]"
  />
  <div class=" hehehoho relative z-10 mt-4">
    <Splide
      on:mounted={(e) => {
        index = e.detail.splide.index;
        console.log(index);
      }}
      on:move={(e) => {
        index = e.detail.splide.index;
        console.log(index);
      }}
      {options}
      aria-labelledby="basic-example-heading"
    >
      {#each carouselImages as carousel}
        <SplideSlide>
          <img
            class="h-auto max-h-[650px] w-60 object-cover md:w-[30vw]"
            src={carousel.image}
            alt="Image{carousel.head}"
          />
        </SplideSlide>
      {/each}
    </Splide>
  </div>

  <div class=" relative h-64 w-60 md:h-44 md:w-[30vw]">
    {#each carouselImages as carousel, i}
      {#if i === index}
        <div class="flex flex-col justify-center p-5">
          <h1 class=" py-2 text-lg font-normal text-info md:py-10 md:text-4xl">
            {carousel.head}
          </h1>
          <p class=" text-base text-neutral/40 md:text-2xl">{carousel.text}</p>
        </div>
      {/if}
    {/each}
  </div>
</div>

<style>
  .hehehoho {
    clip-path: polygon(
      53.451% 10.187%,
      46.549% 10.187%,
      46.549% 10.187%,
      41.263% 9.958%,
      36.085% 9.536%,
      31.027% 8.927%,
      26.1% 8.138%,
      21.318% 7.176%,
      16.692% 6.047%,
      12.235% 4.758%,
      7.96% 3.316%,
      3.877% 1.728%,
      0% 0%,
      0% 100%,
      0% 100%,
      3.877% 98.272%,
      7.959% 96.684%,
      12.235% 95.242%,
      16.692% 93.953%,
      21.318% 92.824%,
      26.1% 91.862%,
      31.026% 91.073%,
      36.085% 90.464%,
      41.263% 90.042%,
      46.549% 89.813%,
      53.451% 89.813%,
      53.451% 89.813%,
      58.737% 90.042%,
      63.915% 90.464%,
      68.973% 91.073%,
      73.9% 91.862%,
      78.682% 92.824%,
      83.308% 93.953%,
      87.765% 95.242%,
      92.04% 96.684%,
      96.123% 98.272%,
      100% 100%,
      100% 0%,
      100% 0%,
      96.123% 1.728%,
      92.041% 3.316%,
      87.765% 4.758%,
      83.308% 6.047%,
      78.682% 7.176%,
      73.9% 8.138%,
      68.974% 8.927%,
      63.915% 9.536%,
      58.737% 9.958%,
      53.451% 10.187%
    );
  }
</style>
