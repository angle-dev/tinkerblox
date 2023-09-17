<script>
  import { Splide, SplideSlide } from "@splidejs/svelte-splide";
  import "@splidejs/splide/dist/css/themes/splide-default.min.css";

  let index = 0;

  import IMAGE1 from "$lib/carouselSI/IMAGE1.png";

  import IMAGE2 from "$lib/carouselSI/IMAGE2.png";

  import IMAGE3 from "$lib/carouselSI/IMAGE3.png";

  import IMAGE4 from "$lib/carouselSI/IMAGE4.png";

  import IMAGE5 from "$lib/carouselSI/IMAGE5.png";

  import IMAGE6 from "$lib/carouselSI/IMAGE6.png";

  import IMAGE7 from "$lib/carouselSI/IMAGE7.png";

  import IMAGE8 from "$lib/carouselSI/IMAGE8.png";

  const carouselImages = [
    {
      image: IMAGE1,
      head: "",
      text: "Every enterprise has different smart manufacturing goals, & every one takes a different path to achieve them. TInkerBloX curated realistic but visionary roadmaps for multiple manufacturers, and ensured achievement of each & every milestone along the way to the larger goal.",
    },
    {
      image: IMAGE2,
      head: "Clients: Automotive Tier-1, Industrial machines OEM, O&G refineries…",
      text: "TinkerBloX helps shopfloor managers & line supervisors monitor their machines real-time 🡪 predictive 🡪 prescriptive to ensure peak performance & zero unplanned downtime",
    },
    {
      image: IMAGE3,
      head: "Clients: Automotive OEM, Tier-1, Semiconductor Mfg…",
      text: "TinkerBloX vision systems deployed at the network edge aids manufacturers to mature from defect outflow detection 🡪 defect detection 🡪 defect prevention",
    },
    {
      image: IMAGE4,
      head: "Clients: Industrial warehouses",
      text: "Logistics players can extract tremendous value by optimizing goods movement & storage, thereby unlocking locked capital TinkerBloX enhances your ability to track & trace goods across your warehouses maximising space utility & order fulfilment",
    },
    {
      image: IMAGE5,
      head: "Cients: 3PL players, Industrial warehouses, Automotive Tier 1…",
      text: "Geopolitical disruptions have prompted the industry players to focus on supply chain resiliency like never before. Leverage TinkerBloX to improve your supply chain visibility, security & sustainability",
    },
    {
      image: IMAGE6,
      head: "Clients: Warehouses, Industrial complex…",
      text: "Enhance your perimeter security management leveraging edge-to-edge AI monitoring from TinkerBloX We build on your existing infrastructure to deploy sensor/camera based security",
    },
    {
      image: IMAGE7,
      head: "Clients: Automotive Tier-1, Industrial OEM, CPG Tier 1…",
      text: "TinkerBloX helps you moderate your carbon footprint by optimizing your energy [W.A.G.E.S] consumption across production and utility assets",
    },
    {
      image: IMAGE8,
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
