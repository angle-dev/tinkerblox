<script>
  import { Splide, SplideSlide } from "@splidejs/svelte-splide";
  import "@splidejs/splide/dist/css/themes/splide-default.min.css";

  let index = 0;

  const carouselImages = [
    {
      image:
        "https://tbpublicsite.blob.core.windows.net/tinkerblox/Smart%20Spaces%20Images/Stories%20we%20bring%20to%20life_Map%20out%20Net-Digitalizing%20Storage%20Spaces.png",
      head: "Clients: 3PL players, Industrial warehouses…",
      text: "Storage spaces within global supply chains are black boxes for most stakeholders. TinkerBloX provides transparency & control into the location & health of your high-value assets",
    },
    {
      image:
        "https://tbpublicsite.blob.core.windows.net/tinkerblox/Smart%20Spaces%20Images/Stories%20we%20bring%20to%20life_A%20roadmap%20for%20%E2%80%98your%E2%80%99%C2%A0%20%C2%A0%20Net-Zero%20outcomests.png",
      head: "",
      text: "Every future-focused space needs to be cognizant of moving to net-zero TinkerBloX charted out a roadmap of grounded but scalable opportunities for moving towards lower ecological footprint for multiple buildings",
    },
    {
      image:
        "https://tbpublicsite.blob.core.windows.net/tinkerblox/Smart%20Spaces%20Images/Stories%20we%20bring%20to%20life_Implementing%20Digital%20Refinery.png",
      head: "Client: O&G refinery",
      text: "TinkerBloX works with you to define, pilot, scale & optimize your autonomous & sustainable refinery operations in an edge-centric ecosystem ",
    },
    {
      image:
        "https://tbpublicsite.blob.core.windows.net/tinkerblox/Smart%20Spaces%20Images/Stories%20we%20bring%20to%20life_Taking%20CBD%20farms%20to%20a%20new%20high.png",
      head: "Clients: North American CBD farms",
      text: "TinkerBloX’s deployment of a federated distributed compute system enables end-to-end farm management with higher yield while maximizing resources",
    },
    {
      image:
        "https://tbpublicsite.blob.core.windows.net/tinkerblox/Smart%20Spaces%20Images/Stories%20we%20bring%20to%20life_Nurturing%20communities%20of%20the%20future.png",
      head: "Clients: American smart community",
      text: "Smart communities are a living breathing eco-system that caters to the needs of its occupants while taking care of itself. TinkerBloX powers the nervous system of such neighbourhoods through our self-aware product blocks",
    },
    {
      image:
        "https://tbpublicsite.blob.core.windows.net/tinkerblox/Smart%20Spaces%20Images/Stories%20we%20bring%20to%20life_Uber-powered%205G%20spaces.png",
      head: "Clients: Warehouses, Industrial complex…",
      text: "Monitor-Control-Manage your assets across public/private 5G networks with the power of network-edge",
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
