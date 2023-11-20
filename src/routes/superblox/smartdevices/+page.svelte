<script>
  import gradientbackground from "$lib/gradient_background.png";
  import GradientButton from "$lib/components/GradientButton.svelte";
  import c1 from "$lib/c1.png";
  import c2 from "$lib/c2.png";
  import c3 from "$lib/c3.png";
  import c4 from "$lib/c4.png";
  import c5 from "$lib/c5.png";
  import I1 from "$lib/I1.png";
  import I2 from "$lib/I2.png";
  import I3 from "$lib/I3.png";
  import I4 from "$lib/I4.png";
  import I5 from "$lib/I5.png";
  import A1 from "$lib/A1.png";
  import A2 from "$lib/A2.png";
  import A3 from "$lib/A3.png";
  import A4 from "$lib/A4.png";
  import A5 from "$lib/A5.png";
  import S1 from "$lib/S1.png";
  import S2 from "$lib/S2.png";
  import S3 from "$lib/S3.png";
  import S4 from "$lib/S4.png";
  import S5 from "$lib/S5.png";
  import ScrollTransition from "../../../lib/components/ScrollTransition.svelte";

  import CarouselSD from "$lib/components/CarouselSD.svelte";
  let selected = "Sustainable";
  function handleClick(newValue) {
    selected = newValue;
  }

  import { onMount, onDestroy, afterUpdate } from "svelte";

  import Scroller from "@sveltejs/svelte-scroller";

  let greetings = [
    { text: "Edge-Centric", colorClass: "red-text" },
    { text: "Data-Secure", colorClass: "blue-text" },
    { text: "5G Ready", colorClass: "green-text" },
    { text: "Autonomous", colorClass: "purple-text" },
    { text: "True Real-Time", colorClass: "orange-text" },
    { text: "Sustainable", colorClass: "pink-text" },
  ];
  let index2 = 0;
  let roller;

  onMount(() => {
    roller = setInterval(() => {
      if (index2 === greetings.length - 1) index2 = 0;
      else index2++;
    }, 1250);
  });

  onDestroy(() => {
    clearInterval(roller);
  });

  let colorIndicator = null;
  let sections = [
    { id: "safe", text: "SMART Devices for you" },
    { id: "future", text: "The Future Device Habitat" },
    { id: "tinker", text: "The TinkerBloX USP" },
    { id: "stories", text: "Our Stories" },
  ];

  // Initialize with the first section

  let fullwidth = false;
  $: active_class = fullwidth ? "max-w-full" : "max-w-5xl";
  let count;
  let index;
  let offset;
  let progress;
  let top = 0;
  let threshold = 0;
  let bottom = 0;

  let targetElement;
  let intersectionObserver;

  // Options for the Intersection Observer
  const options = {
    root: null, // Use the viewport as the root
    rootMargin: "0px",
    threshold: 0.8, // Trigger when at least 50% of the target is visible
  };

  // Callback function when the target is in/out of the intersection
  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        fullwidth = true;
      } else if (!entry.isIntersecting && entry.boundingClientRect.top > 0) {
        fullwidth = false;
      }
    });
  };

  onMount(() => {
    targetElement = document.getElementById("line"); // Replace with your target element's ID or reference
    intersectionObserver = new IntersectionObserver(
      handleIntersection,
      options
    );
    intersectionObserver.observe(targetElement);
  });
</script>

<section
  style="  background-image: url('https://tbpublicsite.blob.core.windows.net/tinkerblox/Smart%20devices%20Image/Smart%20device_header.png'); "
  class="relative z-30 flex h-fit min-h-[777px] w-full flex-col items-center justify-center bg-cover bg-center bg-no-repeat p-3 py-2 md:p-10"
>
  <div class=" flex w-full flex-col items-start gap-2 p-10 md:flex-row">
    <div class=" w-full md:ml-40 md:w-1/3">
      <h1 class="text-4xl font-bold text-base-100 md:text-8xl">Experience</h1>
      <div class="relative">
        <!-- Image -->
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img
          src={"https://tbpublicsite.blob.core.windows.net/tinkerblox/Tinkerblox_16th%20Nov/Header_Strip.png"}
          alt="Image"
          class=" w-full"
        />

        <!-- Text Carousel Container 1 -->
        <div
          class="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center bg-opacity-50 text-white opacity-100 transition-opacity duration-500"
          id="text-carousel-1"
        >
          <!-- Text Content 1 -->
          <div class="text-center">
            {#key index2}
              <h1
                class=" greeting ml-8 text-2xl font-bold italic text-secondary sm:text-2xl md:ml-14 xl:text-4xl 2xl:text-5xl {greetings[
                  index2
                ].colorClass}"
              >
                {greetings[index2].text}
              </h1>
            {/key}
          </div>
        </div>
      </div>
      <h1 class="text-4xl font-bold text-base-100 md:text-8xl">Smart Device</h1>

      <p
        class=" mt-20 max-w-3xl p-5 text-justify text-xl text-base-100 md:p-5 md:text-2xl"
      >
        Build an adaptive eco-system of interactive experience between man &
        machine
      </p>
    </div>
  </div>
</section>

<section
  style="background-image: url(/defaultbg.png);"
  class=" w-full bg-cover bg-center bg-no-repeat py-20"
>
  <ScrollTransition>
    <div class="m-auto flex max-w-6xl flex-col items-center gap-2">
      <h4 class=" w-3/5 text-center text-2xl text-secondary md:text-4xl">
        Take the next step in your <span class=" font-bold text-info"
          >smart devices</span
        >
        journey…
        <span class="text-accent"> one BloX</span> @ a time !!
      </h4>

      <p
        class="mt-5 p-6 text-justify text-xl text-neutral/60 md:p-0 md:text-center md:text-2xl"
      >
        Businesses strive to enable real-time, hyper-personalized, secure,
        data-responsible and ubiquitous customer experience through devices
        interactions. The need for a “servitized”, autonomous and sustainable
        applications of devices at the field has never seen as much demand as we
        experience today, and it’s predicted to grow leaps & bounds in the near
        future.
        <br /> <br /> With every evolving man-machine interaction at the end
        point, the need for decentralized compute and the possibility to effect
        these outcomes at close proximity to the point of action [& decision]
        creates an unique opportunity for device manufacturers [OEMs] to curate
        a self-aware, autonomous eco-systems around their smart devices.<br />
        <br />
        <span
          class=" m-auto w-fit bg-gradient-to-l from-secondary to-info bg-clip-text text-center font-medium text-info text-transparent"
        >
          TinkerBloX provides you with the building blocks of device-native edge
          tech, as you reimagine the future of your smart devices to be
          Connected, Intelligent, Autonomous & Sustainable.
        </span>
      </p>
    </div>
  </ScrollTransition>
</section>

<div
  class="min-h-4 sticky top-16 z-50 m-auto grid h-fit grid-cols-4 {active_class}  items-center justify-between gap-2 overflow-hidden rounded-md bg-[#B5B5B5] py-2 text-[10px] text-white duration-75 md:text-lg"
>
  {#each sections as section (section.id)}
    <a
      href={"#" + section.id}
      class="relative z-10 flex items-center text-center"
    >
      <span class="w-full text-center">{section.text}</span>
    </a>
  {/each}

  <div class="absolute left-0 z-0 grid h-full w-full grid-cols-4">
    {#if index === 0 || index > 0}
      {#if offset > 0}
        <div
          style="width: {index > 0 ? 100 : offset * 2000}%;"
          class=" z-0 h-full w-0 max-w-full bg-gradient-to-b from-info to-secondary transition-all duration-75"
        />
      {/if}
    {:else}
      <div />
    {/if}
    {#if index === 1 || index > 1}
      <div
        style="width: {index > 1 ? 100 : offset * 2000}%;"
        class=" z-0 h-full w-0 max-w-full bg-gradient-to-b from-info to-secondary transition-all duration-75"
      />
    {:else}
      <div />
    {/if}
    {#if index === 2 || index > 2}
      <div
        style="width: {index > 2 ? 100 : offset * 2000}%;"
        class="z-0 h-full w-0 max-w-full bg-gradient-to-b from-info to-secondary transition-all duration-75"
      />
    {:else}
      <div />
    {/if}
    {#if index === 3 || index > 3}
      <div
        style="width: {index > 3 ? 100 : offset * 2000}%;"
        class="z-0 h-full w-0 max-w-full bg-gradient-to-b from-info to-secondary transition-all duration-75"
      />
    {:else}
      <div />
    {/if}
  </div>
</div>

<br />

<Scroller
  {top}
  {threshold}
  {bottom}
  bind:count
  bind:index
  bind:offset
  bind:progress
>
  <div slot="background" />
  <div slot="foreground">
    <section
      id="safe"
      style=" background-image: url({gradientbackground}) "
      class="w-full bg-primary bg-cover bg-bottom bg-no-repeat py-20"
    >
      <ScrollTransition>
        <div id="line">
          <h4
            class="m-auto mb-10 mt-12 w-full max-w-2xl p-5 text-center text-5xl text-base-100 md:p-0 md:text-6xl"
          >
            SMART devices for you
          </h4>
          <!-- svelte-ignore a11y-no-static-element-interactions -->
          <div
            class=" min-h-4 rounded-fullpx-4 m-auto mt-7 flex h-fit w-full flex-wrap items-center justify-center gap-6 overflow-hidden py-2 text-center text-sm text-white md:text-lg"
          >
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <span
              on:click={() => handleClick("Sustainable")}
              class="{'relative z-10 w-80 cursor-pointer rounded-full border border-[#00BE2A] px-3 py-2   '} {selected ===
              'Sustainable'
                ? 'bg-[#00BE2A] shadow-md shadow-[#00BE2A] '
                : ''}">Connected</span
            >
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <span
              on:click={() => handleClick("Autonomous")}
              class="relative z-10 w-80 cursor-pointer rounded-full border border-[#00A7E5] px-3 py-2 {selected ===
              'Autonomous'
                ? 'bg-[#00A7E5] shadow-md shadow-[#00A7E5]'
                : ''}">Intelligent</span
            >
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <span
              on:click={() => handleClick("Federated")}
              class="relative z-10 w-80 cursor-pointer rounded-full border border-[#E76120] px-3 py-2 {selected ===
              'Federated'
                ? 'bg-[#E76120] shadow-md shadow-[#E76120]'
                : ''}">Autonomous</span
            >
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <span
              on:click={() => handleClick("Efficient")}
              class="relative z-10 w-80 cursor-pointer rounded-full border border-[#A1499C] px-3 py-2 {selected ===
              'Efficient'
                ? 'bg-[#A1499C] shadow-md shadow-[#A1499C]'
                : ''}">Sustainable</span
            >
          </div>

          {#if selected === "Sustainable"}
            <div
              class=" min-h-4 m-auto mt-7 flex h-fit w-full max-w-7xl flex-wrap items-center justify-center gap-6 overflow-hidden py-2"
            >
              <div class=" flex w-96 flex-col items-center gap-4 p-8">
                <img class=" w-32" src={c1} alt="" />
                <h5 class=" w-80 text-center text-2xl font-semibold text-white">
                  Device Connectivity
                </h5>
                <p class="w-80 text-center font-normal text-white">
                  Creation of connected devices [OE & Retrofit] to stream data
                  and execute command & control
                </p>
              </div>

              <div class=" flex w-96 flex-col items-center gap-4 p-8">
                <img class=" w-32" src={c2} alt="" />
                <h5 class="w-80 text-center text-2xl font-semibold text-white">
                  Boundless Interoperability
                </h5>
                <p class="w-80 text-center font-normal text-white">
                  Interoperability across tech stacks & vendors for a seamless
                  system of operations
                </p>
              </div>

              <div class=" flex w-96 flex-col items-center gap-4 p-8">
                <img class=" w-32" src={c3} alt="" />
                <h5 class="w-80 text-center text-2xl font-semibold text-white">
                  First Mile & Last Mile Transparency
                </h5>
                <p class="w-80 text-center font-normal text-white">
                  Device transparency at the most remote points of the value
                  chain
                </p>
              </div>

              <div class=" flex w-96 flex-col items-center gap-4 p-8">
                <img class=" w-32" src={c4} alt="" />
                <h5 class="w-80 text-center text-2xl font-semibold text-white">
                  Field Support
                </h5>
                <p class="w-80 text-center font-normal text-white">
                  Maintenance & upkeep of field assets for continuous operations
                </p>
              </div>

              <div class=" flex w-96 flex-col items-center gap-4 p-8">
                <img class=" w-32" src={c5} alt="" />
                <h5 class="w-80 text-center text-2xl font-semibold text-white">
                  Secure Field Assets
                </h5>
                <p class="w-80 text-center font-normal text-white">
                  Uniquely identifiable field assets with secure communications
                </p>
              </div>

              <a href="/connect">
                <div
                  class=" bold flex w-96 flex-col items-center gap-4 p-8 text-3xl text-white underline"
                >
                  Learn More...
                </div>
              </a>
            </div>
          {/if}
          {#if selected === "Autonomous"}
            <div
              class=" min-h-4 m-auto mt-7 flex h-fit w-full max-w-7xl flex-wrap items-center justify-center gap-6 overflow-hidden py-2"
            >
              <div class=" flex w-96 flex-col items-center gap-4 p-8">
                <img class=" w-32" src={I1} alt="" />
                <h5 class=" w-80 text-center text-2xl font-semibold text-white">
                  Digital Twins : <br />Assets
                </h5>
                <p class="w-80 text-center font-normal text-white">
                  Move to prescriptive interventions with digital twins
                </p>
              </div>

              <div class=" flex w-96 flex-col items-center gap-4 p-8">
                <img class=" w-32" src={I2} alt="" />
                <h5 class=" w-80 text-center text-2xl font-semibold text-white">
                  Packaged Device software infrastructure
                </h5>
                <p class="w-80 text-center font-normal text-white">
                  Pre-curated certified infrastructure packages for faster
                  Proofs & Time-to-Market
                </p>
              </div>

              <div class=" flex w-96 flex-col items-center gap-4 p-8">
                <img class=" w-32" src={I3} alt="" />
                <h5 class=" w-80 text-center text-2xl font-semibold text-white">
                  Product lifecycle<br /> Digital Thread
                </h5>
                <p class="w-80 text-center font-normal text-white">
                  Tap into complete product lifecycle transparency & feedback
                  from cradle to grave
                </p>
              </div>

              <div class=" flex w-96 flex-col items-center gap-4 p-8">
                <img class=" w-32" src={I4} alt="" />
                <h5 class=" w-80 text-center text-2xl font-semibold text-white">
                  Edge for Trust
                </h5>
                <p class="w-80 text-center font-normal text-white">
                  Edge for trust exchange applications. Device as a single
                  source of truth
                </p>
              </div>

              <div class=" flex w-96 flex-col items-center gap-4 p-8">
                <img class=" w-32" src={I5} alt="" />
                <h5 class=" w-80 text-center text-2xl font-semibold text-white">
                  Diagnostics for heterogeneous device ecosystems
                </h5>
                <p class="w-80 text-center font-normal text-white">
                  Plug & play diagnostics of fungible, heterogenous device
                  eco-systems as a service
                </p>
              </div>

              <a href="/connect">
                <div
                  class=" bold flex w-96 flex-col items-center gap-4 p-8 text-3xl text-white underline"
                >
                  Learn More...
                </div>
              </a>
            </div>
          {/if}
          {#if selected === "Federated"}
            <div
              class=" min-h-4 m-auto mt-7 flex h-fit w-full max-w-7xl flex-wrap items-center justify-center gap-6 overflow-hidden py-2"
            >
              <div class=" flex w-96 flex-col items-center gap-4 p-8">
                <img class=" w-32" src={A1} alt="" />
                <h5 class=" w-80 text-center text-2xl font-semibold text-white">
                  Autonomous self-diagnosis & treatment
                </h5>
                <p class="w-80 text-center font-normal text-white">
                  Near-self-aware devices that optimize their own settings for
                  higher efficiency and sustainability
                </p>
              </div>

              <div class=" flex w-96 flex-col items-center gap-4 p-8">
                <img class=" w-32" src={A2} alt="" />
                <h5 class=" w-80 text-center text-2xl font-semibold text-white">
                  Adaptive Device Ecosystems
                </h5>
                <p class="w-80 text-center font-normal text-white">
                  Adaptive and autonomous closed-loop systems that self-adjust
                  to the environment
                </p>
              </div>

              <div class=" flex w-96 flex-col items-center gap-4 p-8">
                <img class=" w-32" src={A3} alt="" />
                <h5 class=" w-80 text-center text-2xl font-semibold text-white">
                  Autonomous Field Operations
                </h5>
                <p class="w-80 text-center font-normal text-white">
                  Un-intervened, self-supervised device operations with
                  low-latency outcomes
                </p>
              </div>

              <div class=" flex w-96 flex-col items-center gap-4 p-8">
                <img class=" w-32" src={A4} alt="" />
                <h5 class=" w-80 text-center text-2xl font-semibold text-white">
                  Autonomous Workload Sharing
                </h5>
                <p class="w-80 text-center font-normal text-white">
                  Constraint-driven autonomous workload sharing between
                  co-working devices
                </p>
              </div>

              <div class=" flex w-96 flex-col items-center gap-4 p-8">
                <img class=" w-32" src={A5} alt="" />
                <h5 class=" w-80 text-center text-2xl font-semibold text-white">
                  Millions &<br /> Millions…
                </h5>
                <p class="w-80 text-center font-normal text-white">
                  Self-optimizing federated system of millions of devices
                  managed across generations & diversities
                </p>
              </div>

              <a href="/connect">
                <div
                  class=" bold flex w-96 flex-col items-center gap-4 p-8 text-3xl text-white underline"
                >
                  Learn More...
                </div>
              </a>
            </div>
          {/if}
          {#if selected === "Efficient"}
            <div
              class=" min-h-4 m-auto mt-7 flex h-fit w-full max-w-7xl flex-wrap items-center justify-center gap-6 overflow-hidden py-2"
            >
              <div class=" flex w-96 flex-col items-center gap-4 p-8">
                <img class=" w-32" src={S1} alt="" />
                <h5 class=" w-80 text-center text-2xl font-semibold text-white">
                  Green &<br /> Sustainable
                </h5>
                <p class="w-80 text-center font-normal text-white">
                  Low footprint, inherently green-aware AI@Edge devices
                </p>
              </div>

              <div class=" flex w-96 flex-col items-center gap-4 p-8">
                <img class=" w-32" src={S2} alt="" />
                <h5 class=" w-80 text-center text-2xl font-semibold text-white">
                  Circular <br />Economy
                </h5>
                <p class="w-80 text-center font-normal text-white">
                  Trace the journey of a product for reduce, reuse, & recycle
                </p>
              </div>

              <div class=" flex w-96 flex-col items-center gap-4 p-8">
                <img class=" w-32" src={S3} alt="" />
                <h5 class=" w-80 text-center text-2xl font-semibold text-white">
                  Intelligent Energy Sourcing
                </h5>
                <p class="w-80 text-center font-normal text-white">
                  Devices capable of tapping into the most optimum [cost vs
                  footprint] energy sources on the fly
                </p>
              </div>

              <div class=" flex w-96 flex-col items-center gap-4 p-8">
                <img class=" w-32" src={S4} alt="" />
                <h5 class=" w-80 text-center text-2xl font-semibold text-white">
                  Devices smart through to aftermarket
                </h5>
                <p class="w-80 text-center font-normal text-white">
                  Devices capable of self-diagnostics & valuation for re-sale
                  and/or re-deployment
                </p>
              </div>

              <div class=" flex w-96 flex-col items-center gap-4 p-8">
                <img class=" w-32" src={S5} alt="" />
                <h5 class=" w-80 text-center text-2xl font-semibold text-white">
                  Impact Scope III with green-aware devices
                </h5>
                <p class="w-80 text-center font-normal text-white">
                  Devices aware of its inherent & ancillary footprint through
                  scope III across its lifecycle in real time
                </p>
              </div>

              <a href="/connect">
                <div
                  class=" bold flex w-96 flex-col items-center gap-4 p-8 text-3xl text-white underline"
                >
                  Learn More...
                </div>
              </a>
            </div>
          {/if}
        </div>
      </ScrollTransition>
    </section>

    <section
      id="future"
      style="background-image: url(/defaultbg.png);"
      class="  bg-cover bg-center bg-no-repeat py-20"
    >
      <ScrollTransition>
        <h4 class=" m-auto w-3/5 text-center text-4xl text-primary">
          The Future Device Habitat
        </h4>
        <div class=" m-auto flex w-full max-w-5xl flex-wrap">
          <div
            class=" min-h-4 top-16 m-auto mt-7 flex h-fit w-fit flex-wrap items-center justify-center gap-6 overflow-hidden px-4 py-2"
          >
            <div class=" flex h-full w-64 flex-col items-center bg-[#E9E9E9]">
              <h5
                class=" flex h-10 w-full items-center justify-center bg-gradient-to-r from-info to-secondary text-center text-lg font-semibold text-white"
              >
                Device as a Service
              </h5>
              <img
                class="  w-64 hover:scale-105"
                src={"https://tbpublicsite.blob.core.windows.net/tinkerblox/Smart%20devices%20Image/Future%20Device%20habitat_%20device%20as%20a%20service.png"}
                alt=""
              />
              <p class=" p-2 text-center text-black/40">
                Move towards continuous revenue streams with Device-as-a-Service
                offerings
              </p>
            </div>
          </div>
          <div
            class=" min-h-4 top-16 m-auto mt-7 flex h-fit w-fit flex-wrap items-center justify-center gap-6 overflow-hidden px-4 py-2"
          >
            <div class=" flex h-full w-64 flex-col items-center bg-[#E9E9E9]">
              <h5
                class=" flex h-10 w-full items-center justify-center bg-gradient-to-r from-info to-secondary text-center text-lg font-semibold text-white"
              >
                Device personalization
              </h5>
              <img
                class="  w-64 hover:scale-105"
                src={"https://tbpublicsite.blob.core.windows.net/tinkerblox/Smart%20devices%20Image/Future%20Device%20habitat_%20Device%20centric%20personalization.png"}
                alt=""
              />
              <p class=" p-2 text-center text-black/40">
                Empower your customers to personalize device behavior's with
                AI@Edge
              </p>
            </div>
          </div>
          <div
            class=" min-h-4 top-16 m-auto mt-7 flex h-fit w-fit flex-wrap items-center justify-center gap-6 overflow-hidden px-4 py-2"
          >
            <div class=" flex h-full w-64 flex-col items-center bg-[#E9E9E9]">
              <h5
                class=" flex h-10 w-full items-center justify-center bg-gradient-to-r from-info to-secondary text-center text-lg font-semibold text-white"
              >
                Edge for Trust
              </h5>
              <img
                class="  w-64 hover:scale-105"
                src={"https://tbpublicsite.blob.core.windows.net/tinkerblox/Smart%20devices%20Image/Future%20Device%20habitat_%20%20edge%20for%20trust.png"}
                alt=""
              />
              <p class=" p-2 text-center text-black/40">
                Trust the edge for a data-secure & compliant environment for
                your devices
              </p>
            </div>
          </div>
          <div
            class=" min-h-4 top-16 m-auto mt-7 flex h-fit w-fit flex-wrap items-center justify-center gap-6 overflow-hidden px-4 py-2"
          >
            <div class=" flex h-full w-64 flex-col items-center bg-[#E9E9E9]">
              <h5
                class=" flex h-10 w-full items-center justify-center bg-gradient-to-r from-info to-secondary text-center text-lg font-semibold text-white"
              >
                Device Habitat
              </h5>
              <img
                class="  w-64 hover:scale-105"
                src={"https://tbpublicsite.blob.core.windows.net/tinkerblox/Smart%20devices%20Image/Future%20Device%20habitat_%20device%20habitat.png"}
                alt=""
              />
              <p class=" p-2 text-center text-black/40">
                Micro-ecosystems where devices communicate with each other edge
                to edge
              </p>
            </div>
          </div>
          <div
            class=" min-h-4 top-16 m-auto mt-7 flex h-fit w-fit flex-wrap items-center justify-center gap-6 overflow-hidden px-4 py-2"
          >
            <div class=" flex h-full w-64 flex-col items-center bg-[#E9E9E9]">
              <h5
                class=" flex h-10 w-full items-center justify-center bg-gradient-to-r from-info to-secondary text-center text-lg font-semibold text-white"
              >
                Device Twins
              </h5>
              <img
                class="  w-64 hover:scale-105"
                src={"https://tbpublicsite.blob.core.windows.net/tinkerblox/Smart%20devices%20Image/Future%20Device%20habitat_%20device%20twins.png"}
                alt=""
              />
              <p class=" p-2 text-center text-black/40">
                Twin your assets @ the edge & ensure unparalleled service for
                your customers
              </p>
            </div>
          </div>
          <div
            class=" min-h-4 top-16 m-auto mt-7 flex h-fit w-fit flex-wrap items-center justify-center gap-6 overflow-hidden px-4 py-2"
          >
            <div class=" flex h-full w-64 flex-col items-center bg-[#E9E9E9]">
              <h5
                class=" flex h-10 w-full items-center justify-center bg-gradient-to-r from-info to-secondary text-center text-lg font-semibold text-white"
              >
                Devices That Love Our Planet
              </h5>
              <img
                class="  w-64 hover:scale-105"
                src={"https://tbpublicsite.blob.core.windows.net/tinkerblox/Smart%20devices%20Image/Future%20Device%20habitat_%20device%20that%20love%20our%20planet.png"}
                alt=""
              />
              <p class=" p-2 text-center text-black/40">
                Sustainability conscious devices that self-adjust for best
                performance sustainably
              </p>
            </div>
          </div>
        </div>
      </ScrollTransition>
    </section>

    <section
      id="tinker"
      style="background-image: url({gradientbackground})"
      class="min-h-16 w-full bg-primary bg-cover bg-bottom bg-no-repeat py-60"
    >
      <ScrollTransition>
        <div class="m-auto max-w-4xl">
          <div style="position: relative; text-align: center;">
            <img
              class=" object-contain object-center"
              src={"https://tbpublicsite.blob.core.windows.net/tinkerblox/Tinkerblox_16th%20Nov/The%20Tinkerblox%20USP.png"}
              alt=""
            />
          </div>
        </div>
      </ScrollTransition>
    </section>

    <section id="stories">
      <ScrollTransition>
        <CarouselSD />
      </ScrollTransition>
    </section>
  </div></Scroller
>

<section
  style=" background-image: url({gradientbackground}) "
  class="min-h-[497px] w-full bg-primary bg-cover bg-bottom bg-no-repeat py-32"
>
  <ScrollTransition>
    <h4
      class="m-auto mb-16 w-full max-w-2xl p-5 text-center text-5xl font-medium text-base-100 md:p-0 md:text-6xl"
    >
      Be part of our Smart Device huddle
    </h4>

    <div
      class="m-auto mt-10 flex h-auto max-w-6xl items-center justify-center gap-10 px-2"
    >
      <GradientButton>JOIN OUR ALLIANCE</GradientButton>
    </div>
  </ScrollTransition>
</section>

<style>
  .red-text {
    color: #ed7d31;
  }

  .blue-text {
    color: #ffb800;
  }

  .green-text {
    color: #01a4df;
  }

  .purple-text {
    color: #cc00cc;
  }

  .orange-text {
    color: #c00000;
  }

  .pink-text {
    color: #00cf2e;
  }
</style>
