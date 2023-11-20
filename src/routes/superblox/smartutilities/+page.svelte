<script>
  import GradientButton from "$lib/components/GradientButton.svelte";
  import fuat1 from "$lib/fuat1.png";
  import fuat2 from "$lib/fuat2.png";
  import fuat3 from "$lib/fuat3.png";
  import fuat4 from "$lib/fuat4.png";
  import fuat5 from "$lib/fuat5.png";
  import suw1 from "$lib/suw1.png";
  import suw2 from "$lib/suw2.png";
  import suw3 from "$lib/suw3.png";
  import suw4 from "$lib/suw4.png";
  import suw5 from "$lib/suw5.png";
  import wec1 from "$lib/wec1.png";
  import wec2 from "$lib/wec2.png";
  import wec3 from "$lib/wec3.png";
  import wec4 from "$lib/wec4.png";
  import wec5 from "$lib/wec5.png";
  import CarouselSU from "$lib/components/CarouselSU.svelte";
  import ScrollTransition from "../../../lib/components/ScrollTransition.svelte";

  let selected = "Sustainable";
  function handleClick(newValue) {
    selected = newValue;
  }

  import { onMount, onDestroy, afterUpdate } from "svelte";

  import Scroller from "@sveltejs/svelte-scroller";
  import { expoIn } from "svelte/easing";

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
    { id: "safe", text: "Smart Utilities for you" },
    { id: "future", text: "Future of Utilities" },
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
    threshold: 0.6, // Trigger when at least 50% of the target is visible
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
  style="  background-image: url('https://tbpublicsite.blob.core.windows.net/tinkerblox/Smart%20Utility%20Images/Smart%20Utlities_Header_BG.png'); "
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
          class="w-full"
        />

        <!-- Text Carousel Container 1 -->
        <div
          class="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center bg-opacity-50 text-white opacity-100 transition-opacity duration-[0.75s]"
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
      <h1 class="text-4xl font-bold text-base-100 md:text-8xl">
        Smart Utilities
      </h1>

      <p
        class=" mt-20 max-w-3xl p-5 text-justify text-xl text-base-100 md:p-5 md:text-2xl"
      >
        Build an always-on & one-click AIoT eco-system for your utility assets &
        operations
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
          >smart utilities</span
        >
        journey…
        <span class="text-accent"> one BloX</span> @ a time !!
      </h4>

      <p
        class="mt-5 p-6 text-justify text-xl text-neutral/60 md:p-0 md:text-center md:text-2xl"
      >
        The utility industry has experienced relative stability over the past
        few decades as even when technology transformed assets & operations,
        they all relied on traditional status quo when it comes to the utilities
        they consume. But times are changing, and we are on the cusp of
        witnessing a radical disruption in this space – the Energy Continuum ! <br
        /> <br />
        The utilities eco-system is starting to experience changes at scale, in both
        the supply & demand sides – the undeniable proliferation of EVs is not just
        adding tremendous load on the network, but also creating millions of energy
        storage points that could potentially transform energy into a tradeable currency.
        IoT-izing of residential buildings, commercial properties & even the supply
        chain will inevitably lead to micro-grids and localized energy markets. The
        focus on sustainability will transform (finally !) the relationship between
        utilities & consumers to a symbiotic relationship of equals. It’s not a question
        of IF…but WHEN… and the answer is NOW !!<br /> <br />
        <span
          class=" m-auto w-fit bg-gradient-to-l from-secondary to-info bg-clip-text text-center font-medium text-info text-transparent"
        >
          TinkerBloX provides you with the building blocks of the
          “software-defined energy network” for your smart utility future…
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
      style=" background-image: url('https://tbpublicsite.blob.core.windows.net/tinkerblox/Smart%20Utility%20Images/Smart%20Utility%20for%20you_Gradient.png') "
      class="w-full bg-primary bg-cover bg-bottom bg-no-repeat py-20"
    >
      <ScrollTransition>
        <h4
          class="m-auto mb-10 mt-12 w-full max-w-2xl p-5 text-center text-5xl text-base-100 md:p-0 md:text-6xl"
        >
          SMART Utilities for you
        </h4>

        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div
          class=" min-h-4 rounded-fullpx-4 m-auto mt-7 flex h-fit w-full flex-wrap items-center justify-center gap-6 overflow-hidden py-2 text-center text-sm text-white md:text-lg"
        >
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <span
            on:click={() => handleClick("Sustainable")}
            class="{'relative z-10 w-[494px] cursor-pointer rounded-full border border-[#00BE2A] px-3 py-2   '} {selected ===
            'Sustainable'
              ? 'bg-[#00BE2A] shadow-md shadow-[#00BE2A] '
              : ''}">Future of your utility assets with TBx</span
          >
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <span
            on:click={() => handleClick("Federated")}
            class="relative z-10 w-[494px] cursor-pointer rounded-full border border-[#E76120] px-3 py-2 {selected ===
            'Federated'
              ? 'bg-[#E76120] shadow-md shadow-[#E76120]'
              : ''}">Sustainability in the Utility World</span
          >
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <span
            on:click={() => handleClick("Efficient")}
            class="relative z-10 w-[494px] cursor-pointer rounded-full border border-[#A1499C] px-3 py-2 {selected ===
            'Efficient'
              ? 'bg-[#A1499C] shadow-md shadow-[#A1499C]'
              : ''}">Your win in the Energy Continuum</span
          >
        </div>

        {#if selected === "Sustainable"}
          <div
            class=" min-h-4 m-auto mt-7 flex h-fit w-full max-w-7xl flex-wrap items-center justify-center gap-6 overflow-hidden py-2"
          >
            <div class=" flex w-96 flex-col items-center gap-4 p-8">
              <img class=" w-32" src={fuat1} alt="" />
              <h5 class=" w-80 text-center text-2xl font-semibold text-white">
                Ensure near-100% utility of your assets
              </h5>
              <p class="w-80 text-center font-normal text-white">
                Realize a fully utilized & optimized asset capable of self
                monitoring 🡪 self healing
              </p>
            </div>

            <div class=" flex w-96 flex-col items-center gap-4 p-8">
              <img class=" w-32" src={fuat2} alt="" />
              <h5 class="w-80 text-center text-2xl font-semibold text-white">
                Flatten out the peaks
              </h5>
              <p class="w-80 text-center font-normal text-white">
                Leverage responsive (re)distribution of resources to balance the
                demand vs supply at every level of the network & improve asset
                utilization
              </p>
            </div>

            <div class=" flex w-96 flex-col items-center gap-4 p-8">
              <img class=" w-32" src={fuat3} alt="" />
              <h5 class="w-80 text-center text-2xl font-semibold text-white">
                Digitalize Autonomize your assets/infrastructure with AI@Edge
              </h5>
              <p class="w-80 text-center font-normal text-white">
                Equip your legacy assets with the power of distributed compute &
                digital twins for redundancy across your network
              </p>
            </div>

            <div class=" flex w-96 flex-col items-center gap-4 p-8">
              <img class=" w-32" src={fuat4} alt="" />
              <h5 class="w-80 text-center text-2xl font-semibold text-white">
                Utility-as-a-Service for EV charging infrastructure
              </h5>
              <p class="w-80 text-center font-normal text-white">
                Build X-a-a-S into your assets and thereby your charging
                infrastructure to transact seamlessly at every node
              </p>
            </div>

            <div class=" flex w-96 flex-col items-center gap-4 p-8">
              <img id="line" class=" w-32" src={fuat5} alt="" />
              <h5 class="w-80 text-center text-2xl font-semibold text-white">
                Secure your utility ecosystem
              </h5>
              <p class="w-80 text-center font-normal text-white">
                With assets gaining ‘identity’ in transactional micro-networks,
                secure yourself at every endpoint
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
              <img class=" w-32" src={suw1} alt="" />
              <h5 class=" w-80 text-center text-2xl font-semibold text-white">
                Transparency into your utility operations
              </h5>
              <p class="w-80 text-center font-normal text-white">
                Transparency that leads to robustness & efficiency of your
                assets (power lines, water & gas pipes, solar panels, etc.) and
                your systems (electricity, water, waste, etc.)
              </p>
            </div>

            <div class=" flex w-96 flex-col items-center gap-4 p-8">
              <img class=" w-32" src={suw2} alt="" />
              <h5 class=" w-80 text-center text-2xl font-semibold text-white">
                The new avatar of smart grids
              </h5>
              <p class="w-80 text-center font-normal text-white">
                Mainstreaming of edge compute & DLT now enables you to build a
                resilient & secure smart grid
              </p>
            </div>

            <div class=" flex w-96 flex-col items-center gap-4 p-8">
              <img class=" w-32" src={suw3} alt="" />
              <h5 class=" w-80 text-center text-2xl font-semibold text-white">
                Transact on the currency of sustainable actions
              </h5>
              <p class="w-80 text-center font-normal text-white">
                Enable verified transactions against sustainability initiatives
                with intelligent distributed nodes across your network
              </p>
            </div>

            <div class=" flex w-96 flex-col items-center gap-4 p-8">
              <img class=" w-32" src={suw4} alt="" />
              <h5 class=" w-80 text-center text-2xl font-semibold text-white">
                Circular Economy for energy assets
              </h5>
              <p class="w-80 text-center font-normal text-white">
                With the proliferation of energy disbursement stations as well
                as energy storage devices, the ability to close-loop the chain
                is critical
              </p>
            </div>

            <div class=" flex w-96 flex-col items-center gap-4 p-8">
              <img class=" w-32" src={suw5} alt="" />
              <h5 class=" w-80 text-center text-2xl font-semibold text-white">
                A market for sustainability rated energy
              </h5>
              <p class="w-80 text-center font-normal text-white">
                What if you could rate energy based on the sustainability
                factors considered in its generation & distribution?
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
              <img class=" w-32" src={wec1} alt="" />
              <h5 class=" w-80 text-center text-2xl font-semibold text-white">
                Optimize your grid performance with Edge AI
              </h5>
              <p class="w-80 text-center font-normal text-white">
                Edge AI based control loops can help optimize your network
                operations & move ahead of inertia based grid management
              </p>
            </div>

            <div class=" flex w-96 flex-col items-center gap-4 p-8">
              <img class=" w-32" src={wec2} alt="" />
              <h5 class=" w-80 text-center text-2xl font-semibold text-white">
                Building an intelligent “prosumer” ecosystem
              </h5>
              <p class="w-80 text-center font-normal text-white">
                As traditional energy customers become producers as well,
                distributed intelligence capable of transactions is crucial
              </p>
            </div>

            <div class=" flex w-96 flex-col items-center gap-4 p-8">
              <img class=" w-32" src={wec3} alt="" />
              <h5 class=" w-80 text-center text-2xl font-semibold text-white">
                Energy meters as an extension of Smart Homes
              </h5>
              <p class="w-80 text-center font-normal text-white">
                Energy meters of the future will be more than just measuring
                devices – they will partner with you to satisfy your energy
                needs at best value
              </p>
            </div>

            <div class=" flex w-96 flex-col items-center gap-4 p-8">
              <img class=" w-32" src={wec4} alt="" />
              <h5 class=" w-80 text-center text-2xl font-semibold text-white">
                Energy as a Currency
              </h5>
              <p class="w-80 text-center font-normal text-white">
                With the proliferation of EV ecosystem, Solar panels and
                micro-energy generation/distribution facilities, energy can be
                the barter system for intelligent assets
              </p>
            </div>

            <div class=" flex w-96 flex-col items-center gap-4 p-8">
              <img class=" w-32" src={wec5} alt="" />
              <h5 class=" w-80 text-center text-2xl font-semibold text-white">
                Supply Chain Transformation
              </h5>
              <p class="w-80 text-center font-normal text-white">
                Manage your EV supply chain to optimize your locked energy
                capital with transact-on-the-go Edge-AI systems
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
      </ScrollTransition>
    </section>

    <section
      id="future"
      style="background-image: url(/defaultbg.png);"
      class="  bg-cover bg-center bg-no-repeat py-20"
    >
      <ScrollTransition>
        <h4 class=" m-auto w-3/5 text-center text-4xl text-primary">
          Future of Utilities
        </h4>
        <div class=" m-auto flex w-full max-w-5xl flex-wrap">
          <div
            class=" min-h-4 top-16 m-auto mt-7 flex h-fit w-fit flex-wrap items-center justify-center gap-6 overflow-hidden px-4 py-2"
          >
            <div class=" flex h-full w-64 flex-col items-center bg-[#E9E9E9]">
              <h5
                class=" flex h-10 w-full items-center justify-center bg-gradient-to-r from-info to-secondary text-center text-lg text-white"
              >
                Always On Assets
              </h5>
              <img
                class="  w-64 hover:scale-105"
                src={"https://tbpublicsite.blob.core.windows.net/tinkerblox/Smart%20Utility%20Images/Future%20of%20Utility_Always%20On%20Assets.png"}
                alt=""
              />
              <p class=" p-2 text-center text-black/40">
                Ensure your utility assets are “always on” with our AI@Edge
                monitoring system
              </p>
            </div>
          </div>
          <div
            class=" min-h-4 top-16 m-auto mt-7 flex h-fit w-fit flex-wrap items-center justify-center gap-6 overflow-hidden px-4 py-2"
          >
            <div class=" flex h-full w-64 flex-col items-center bg-[#E9E9E9]">
              <h5
                class=" flex h-10 w-full items-center justify-center bg-gradient-to-r from-info to-secondary text-center text-lg text-white"
              >
                Utility assets-as-a-service
              </h5>
              <img
                class="  w-64 hover:scale-105"
                src={"https://tbpublicsite.blob.core.windows.net/tinkerblox/Smart%20Utility%20Images/Future%20of%20Utility_Utility%20assets-as-a-service.png"}
                alt=""
              />
              <p class=" p-2 text-center text-black/40">
                Transform your utility component business into an on-the-go
                service experience
              </p>
            </div>
          </div>
          <div
            class=" min-h-4 top-16 m-auto mt-7 flex h-fit w-fit flex-wrap items-center justify-center gap-6 overflow-hidden px-4 py-2"
          >
            <div class=" flex h-full w-64 flex-col items-center bg-[#E9E9E9]">
              <h5
                class=" flex h-10 w-full items-center justify-center bg-gradient-to-r from-info to-secondary text-center text-lg text-white"
              >
                Secure Your Energy Network
              </h5>
              <img
                class="  w-64 hover:scale-105"
                src={"https://tbpublicsite.blob.core.windows.net/tinkerblox/Smart%20Utility%20Images/Future%20of%20Utility_Secure%20Your%20Energy%20Network.png"}
                alt=""
              />
              <p class=" p-2 text-center text-black/40">
                Protect your utility ecosystem from all intrusions – foreign &
                domestic
              </p>
            </div>
          </div>
          <div
            class=" min-h-4 top-16 m-auto mt-7 flex h-fit w-fit flex-wrap items-center justify-center gap-6 overflow-hidden px-4 py-2"
          >
            <div class=" flex h-full w-64 flex-col items-center bg-[#E9E9E9]">
              <h5
                class=" flex h-10 w-full items-center justify-center bg-gradient-to-r from-info to-secondary text-center text-lg text-white"
              >
                Smart Grids
              </h5>
              <img
                class="  w-64 hover:scale-105"
                src={"https://tbpublicsite.blob.core.windows.net/tinkerblox/Smart%20Utility%20Images/Future%20of%20Utility_Smart%20Grids.png"}
                alt=""
              />
              <p class=" p-2 text-center text-black/40">
                Bring life to smart grids at micro & macro level with Edge AI &
                DLT
              </p>
            </div>
          </div>
          <div
            class=" min-h-4 top-16 m-auto mt-7 flex h-fit w-fit flex-wrap items-center justify-center gap-6 overflow-hidden px-4 py-2"
          >
            <div class=" flex h-full w-64 flex-col items-center bg-[#E9E9E9]">
              <h5
                class=" flex h-10 w-full items-center justify-center bg-gradient-to-r from-info to-secondary text-center text-lg text-white"
              >
                Energy Smart Supply Chain
              </h5>
              <img
                class="  w-64 hover:scale-105"
                src={"https://tbpublicsite.blob.core.windows.net/tinkerblox/Smart%20Utility%20Images/Future%20of%20Utility_Energy%20Smart%20Supply%20Chain.png"}
                alt=""
              />
              <p class=" p-2 text-center text-black/40">
                Manage the liquidity of your energy-as-an-asset across your
                supply chain
              </p>
            </div>
          </div>
          <div
            class=" min-h-4 top-16 m-auto mt-7 flex h-fit w-fit flex-wrap items-center justify-center gap-6 overflow-hidden px-4 py-2"
          >
            <div class=" flex h-full w-64 flex-col items-center bg-[#E9E9E9]">
              <h5
                class=" flex h-10 w-full items-center justify-center bg-gradient-to-r from-info to-secondary text-center text-lg text-white"
              >
                Energy Aa A Currency
              </h5>
              <img
                class="  w-64 hover:scale-105"
                src={"https://tbpublicsite.blob.core.windows.net/tinkerblox/Smart%20Utility%20Images/Future%20of%20Utility_Energy%20Aa%20A%20Currency.png"}
                alt=""
              />
              <p class=" p-2 text-center text-black/40">
                Enable transaction of energy between your smart assets on the
                move
              </p>
            </div>
          </div>
        </div>
      </ScrollTransition>
    </section>

    <section
      id="tinker"
      style="background-image: url('https://tbpublicsite.blob.core.windows.net/tinkerblox/Smart%20Utility%20Images/The%20TinkerBlox%20USP.png')"
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
        <CarouselSU />
      </ScrollTransition>
    </section>
  </div></Scroller
>

<section
  style=" background-image: url(https://tbpublicsite.blob.core.windows.net/tinkerblox/Smart%20Utility%20Images/The%20TinkerBlox%20USP.png) "
  class="min-h-[497px] w-full bg-primary bg-cover bg-bottom bg-no-repeat py-32"
>
  <ScrollTransition>
    <h4
      class="m-auto mb-16 w-full max-w-2xl p-5 text-center text-5xl font-medium text-base-100 md:p-0 md:text-6xl"
    >
      Be part of our  Smart Utility huddle
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
