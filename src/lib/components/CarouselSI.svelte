<script>
  import { Splide, SplideSlide } from "@splidejs/svelte-splide";
  import "@splidejs/splide/dist/css/themes/splide-default.min.css";

  let index = 0;

  const carouselImages = [
    {
      image:
        "https://tbpublicsite.blob.core.windows.net/tinkerblox/Smart%20Industry%20Images/Stories%20we%20bring%20to%20life_A%20roadmap%20for%20_your_%20industry%20X.0%20outcomes.png",
      head: "",
      text: "Every enterprise has different smart manufacturing goals, & every one takes a different path to achieve them. TInkerBloX curated realistic but visionary roadmaps for multiple manufacturers, and ensured achievement of each & every milestone along the way to the larger goal.",
    },
    {
      image:
        "https://tbpublicsite.blob.core.windows.net/tinkerblox/Smart%20Industry%20Images/Stories%20we%20bring%20to%20life_Targeting%20ZERO%20unplanned%20downtimes.png",
      head: "Clients: Automotive Tier-1, Industrial machines OEM, O&G refineries…",
      text: "TinkerBloX helps shopfloor managers & line supervisors monitor their machines real-time 🡪 predictive 🡪 prescriptive to ensure peak performance & zero unplanned downtime",
    },
    {
      image:
        "https://tbpublicsite.blob.core.windows.net/tinkerblox/Smart%20Industry%20Images/Stories%20we%20bring%20to%20life_Vision%20Systems%20for%20in-line%20quality%20management.png",
      head: "Clients: Automotive OEM, Tier-1, Semiconductor Mfg…",
      text: "TinkerBloX vision systems deployed at the network edge aids manufacturers to mature from defect outflow detection 🡪 defect detection 🡪 defect prevention",
    },
    {
      image:
        "https://tbpublicsite.blob.core.windows.net/tinkerblox/Smart%20Industry%20Images/Stories%20we%20bring%20to%20life_Tracking%20goods%20through%20the%20Warehouse.png",
      head: "Clients: Industrial warehouses",
      text: "Logistics players can extract tremendous value by optimizing goods movement & storage, thereby unlocking locked capital TinkerBloX enhances your ability to track & trace goods across your warehouses maximising space utility & order fulfilment",
    },
    {
      image:
        "https://tbpublicsite.blob.core.windows.net/tinkerblox/Smart%20Industry%20Images/Stories%20we%20bring%20to%20life_Digital%20Supply%20Chain%20Resiliency.png",
      head: "Cients: 3PL players, Industrial warehouses, Automotive Tier 1…",
      text: "Geopolitical disruptions have prompted the industry players to focus on supply chain resiliency like never before. Leverage TinkerBloX to improve your supply chain visibility, security & sustainability",
    },
    {
      image:
        "https://tbpublicsite.blob.core.windows.net/tinkerblox/Smart%20Industry%20Images/Stories%20we%20bring%20to%20life_AIEdge%20Security%20Systems.png",
      head: "Clients: Warehouses, Industrial complex…",
      text: "Enhance your perimeter security management leveraging edge-to-edge AI monitoring from TinkerBloX We build on your existing infrastructure to deploy sensor/camera based security",
    },
    {
      image:
        "https://tbpublicsite.blob.core.windows.net/tinkerblox/Smart%20Industry%20Images/Stories%20we%20bring%20to%20life_Sustainabilty%20scope%201%20_%202.png",
      head: "Clients: Automotive Tier-1, Industrial OEM, CPG Tier 1…",
      text: "TinkerBloX helps you moderate your carbon footprint by optimizing your energy [W.A.G.E.S] consumption across production and utility assets",
    },
    {
      image:
        "https://tbpublicsite.blob.core.windows.net/tinkerblox/Smart%20Industry%20Images/Stories%20we%20bring%20to%20life_Sustainability%20_%C2%A0Scope%203.png",
      head: "Clients: Industrial warehouses",
      text: "Scope 3 emissions (esp. upstream) put the biggest dent in a manufacturer’s sustainability outcomes. Leverage TInkerBloX assets to bring visibility & controllability across your supply chain",
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
