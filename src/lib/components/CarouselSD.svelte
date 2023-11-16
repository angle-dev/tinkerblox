<script>
  import { Splide, SplideSlide } from "@splidejs/svelte-splide";
  import "@splidejs/splide/dist/css/themes/splide-default.min.css";

  let index = 0;

  const carouselImages = [
    {
      image:
        "https://tbpublicsite.blob.core.windows.net/tinkerblox/Smart%20devices%20Image/Stories%20we%20bring%20to%20life%20_%20Realizing%20the%20lifecycle%20digital%20thread.png",
      head: "Clients: Utility OEMs, Utility distribution enterprises",
      text: "Accelerated orchestration of the enterprise digital thread across the product lifecycle thus providing real-time field insights to R&D, engineering and field service teams",
    },
    {
      image:
        "https://tbpublicsite.blob.core.windows.net/tinkerblox/Smart%20devices%20Image/Stories%20we%20bring%20to%20life_%20Plug%20_%20play%20device%20connectivity.png",
      head: "Clients: Industrial machines OEM, Utility OEM",
      text: "TinkerBloX partners with device OEMs to leapfrog their devices into a smart & connected portfolio with out hardware-agnostic, OS-agnostic, environment-agnostic software blocks",
    },
    {
      image:
        "https://tbpublicsite.blob.core.windows.net/tinkerblox/Smart%20devices%20Image/Stories%20we%20bring%20to%20life_%20Unparalled%20feild%20service%20with%20in%20built%20digital%20twins.png",
      head: "Clients: Utility OEM, Smart building operators",
      text: "TinkerBloX deploys out-of-the-box digital twins for device manufacturers to provide prescriptive field support for remote installations",
    },
    {
      image:
        "https://tbpublicsite.blob.core.windows.net/tinkerblox/Smart%20devices%20Image/Stories%20we%20bring%20to%20life_%20Plug%207%20play%20software%20infrastructure%20%20the%20edge.png",
      head: "Clients: MedTech R&D divisions",
      text: "Tinkerblox provides pre-curated certified infrastructure packages for faster Proofs & Time-to-Market Companies targeting faster smart device releases use this as a scalable platform to develop & release their product versions",
    },
    {
      image:
        "https://tbpublicsite.blob.core.windows.net/tinkerblox/Smart%20devices%20Image/Stories%20we%20bring%20to%20life_%20The%20name%20of%20the%20game%20is%20teamwork.png",
      head: "Clients: Advanced Tech orgs, Consumer Goods R&D",
      text: "Workload sharing is the sure-shot way to succeed at the edge. Companies leverage Tinkerblox to build highly configurable distributed compute ecosystems for easy & secure workload sharing",
    },
    {
      image:
        "https://tbpublicsite.blob.core.windows.net/tinkerblox/Smart%20devices%20Image/Stories%20we%20bring%20to%20life_%20stand%20alone%20decive%20ecosystems.png",
      head: "Clients: Future Tech companies",
      text: "Tinkerblox ecosystem helps build device centric experience of the future with multiple interactive components",
    },
    {
      image:
        "https://tbpublicsite.blob.core.windows.net/tinkerblox/Smart%20devices%20Image/Stories%20we%20bring%20to%20life_Device%20centric%20sustainabilty%20on%20the%20go.png",
      head: "Client: Industrial OEM",
      text: "TinkerBloX helps curate devices aware of its inherent & ancillary footprint through its operational lifecycle in real time",
    },
    {
      image:
        "https://tbpublicsite.blob.core.windows.net/tinkerblox/Smart%20devices%20Image/Stories%20we%20bring%20to%20life_%20re-defining%20gaming.png",
      head: "Clients: NA gaming company",
      text: "The future of gaming is more than AR-VR Device rendered gaming experience is the obvious future",
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

<div
  class=" mt-5 flex w-full flex-col items-center overflow-hidden bg-cover bg-center bg-no-repeat pb-[200px] align-middle"
  style="background-image: url(/defaultbg.png);"
>
  <h2 class=" mt-32 text-3xl font-normal text-primary md:pb-14 md:text-6xl">
    Stories we bring to Life
  </h2>
  <div class="absolute z-0 h-[450px] w-[80vw] md:h-[750px]" />
  <div class=" relative z-10 mt-4">
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
            class="h-auto max-h-[650px] w-[80vw] object-contain"
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
          <h6 class=" text-center text-base text-neutral/40 md:text-2xl">
            {carousel.text}
          </h6>
          <p
            class=" bg-gradient-to-l from-secondary to-info bg-clip-text py-2 text-center text-base font-normal text-info text-transparent md:py-10 md:text-2xl"
          >
            {carousel.head}
          </p>
        </div>
      {/if}
    {/each}
  </div>
</div>
