<script>
  import "../app.css";
  import Logo from "$lib/logo.png";
  import Arrowdown from "$lib/arrowdown.svg";
  import Line from "$lib/line.svg";
  import Location from "$lib/location.svg";
  import BurgerMenu from "$lib/burgermenu.svg";
  import BurgerMenuClose from "$lib/burgermenuclose.svg";
  let BurgerMenuOpen = false;
  import { browser } from "$app/environment";
  let openMobileMenu = "false";
  let open = "false";

  let loading = true;

  setTimeout(() => {
    loading = false;
  }, 3000);

  function toggleMenu() {
    BurgerMenuOpen = !BurgerMenuOpen;
    closeMenu();
    if (BurgerMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }

  function closeMenu() {
    openMobileMenu = "false";
  }

  if (browser) {
    window.addEventListener("resize", handelResize);
  }

  function handelResize() {
    if (window.innerWidth > 768) {
      BurgerMenuOpen = false;
      closeMenu();

      document.body.style.overflow = "auto";
    } else {
      open = "false";
    }
  }

  import Cursor from "../lib/components/CustomCursor.svelte";
  import { onMount, afterUpdate } from "svelte";
  let cursorColor = "green";
  let cursorSize = 28;
  let cursorSquare = false;
  let cursorMixBlendMode = "exclusion";
  let cursorShape = "circle";

  if (cursorSquare) {
    cursorShape = "square";
  }

  onMount(() => {
    const cursorElement = document.querySelector(".cursor-element");
    const cursorOutput = document.querySelector(".cursor-output");
    if (cursorElement && cursorOutput) {
      cursorOutput.textContent =
        // format the output
        `<Cursor color="${cursorColor}" mixBlendMode="${cursorMixBlendMode}" size="${cursorSize}" />`;
    }
  });

  afterUpdate(() => {
    const cursorElement = document.querySelector(".cursor-element");
    const cursorOutput = document.querySelector(".cursor-output");
    if (cursorElement && cursorOutput) {
      cursorOutput.textContent =
        // format the output
        `<Cursor color="${cursorColor}" mixBlendMode="${cursorMixBlendMode}" size="${cursorSize}"  />`;
    }
  });
</script>

{#if BurgerMenuOpen}
  <div
    class="fixed left-0 top-16 z-[999999] flex h-[calc(100vh-4rem)] w-full flex-col items-center justify-center gap-7 bg-black/90 text-2xl font-bold text-info backdrop-blur-lg"
  >
    <div><a on:click={toggleMenu} href="/">HOME</a></div>
    <div class="flex flex-col items-center justify-center gap-3">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <span
        class=" "
        on:click={() =>
          (openMobileMenu =
            openMobileMenu === "superblox" ? false : "superblox")}
        >SUPERBLOX</span
      >
      {#if openMobileMenu === "superblox"}
        <div
          class="my-4 flex flex-col items-center justify-center gap-3 font-light text-base-100"
        >
          <a on:click={toggleMenu} class=" " href="/superblox/smartspaces"
            >Smart Spaces</a
          >
          <a on:click={toggleMenu} class=" " href="/superblox/smartdevices"
            >Smart Devices</a
          >
          <a on:click={toggleMenu} class=" " href="/superblox/smartutilities"
            >Smart Utilities</a
          >
          <a on:click={toggleMenu} class=" " href="/superblox/smartindustry"
            >Smart Industry</a
          >
        </div>
      {/if}
    </div>
    <div class="flex flex-col items-center justify-center gap-3">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <span
        class=" "
        on:click={() =>
          (openMobileMenu =
            openMobileMenu === "buildingblox" ? false : "buildingblox")}
        >BUILDINGBLOX</span
      >
      {#if openMobileMenu === "buildingblox"}
        <div
          class="my-4 flex flex-col items-center justify-center gap-3 font-light text-base-100"
        >
          <a on:click={toggleMenu} class=" " href="/buildingblox/edgeblox"
            >EdgeBloX</a
          >
          <a on:click={toggleMenu} class=" " href="/buildingblox/servblox"
            >ServBloX</a
          >
          <a on:click={toggleMenu} class=" " href="/buildingblox/sandblox"
            >SandBloX</a
          >
        </div>
      {/if}
    </div>
    <div class="flex flex-col items-center justify-center gap-3">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <span
        class=" "
        on:click={() =>
          (openMobileMenu = openMobileMenu === "meet" ? false : "meet")}
        >MEET</span
      >
      {#if openMobileMenu === "meet"}
        <div
          class="my-4 flex flex-col items-center justify-center gap-3 font-light text-base-100"
        >
          <a on:click={toggleMenu} class=" " href="/ourcompany">Our Company</a>
          <a on:click={toggleMenu} class=" " href="/jobs">Your Future Team</a>
        </div>
      {/if}
    </div>
    <div><a on:click={toggleMenu} href="/connect">CONNECT</a></div>
  </div>
{/if}

{#if loading}
  <div
    class="fixed left-0 top-0 z-[999999] flex h-screen w-screen items-center justify-center bg-base-100"
  >
    <div
      class="h-32 w-32 animate-spin rounded-full border-b-2 border-t-2 border-gray-900"
    />
  </div>
{:else}
  <nav
    class="fixed top-0 z-[999999] flex h-16 w-full items-center justify-between bg-base-100 px-4 py-2.5 backdrop-blur-md lg:px-16"
  >
    <a class=" h-full" href="/"
      ><img class=" h-full" src={Logo} alt="tinkerblox logo" /></a
    >

    <div class="hidden md:block">
      <ul class="flex">
        <li>
          <button
            class="btn btn-link btn-active font-medium text-neutral decoration-transparent"
          >
            <a href="/">HOME</a>
          </button>
        </li>
        <li>
          <button
            on:click={() => (open = open === "superblox" ? false : "superblox")}
            class="btn btn-link btn-active font-medium text-neutral decoration-transparent"
          >
            <div class="flex gap-1">
              SUPERBLOX <img
                src={open === "superblox" ? Line : Arrowdown}
                alt="arrow"
              />
            </div>
          </button>
        </li>
        <li>
          <button
            on:click={() =>
              (open = open === "buildingblox" ? false : "buildingblox")}
            class="btn btn-link btn-active font-medium text-neutral decoration-transparent"
          >
            <div class="flex gap-1">
              BUILDINGBLOX <img
                src={open === "buildingblox" ? Line : Arrowdown}
                alt="arrow"
              />
            </div>
          </button>
        </li>
        <li>
          <button
            on:click={() => (open = open === "meet" ? false : "meet")}
            class="btn btn-link btn-active font-medium text-neutral decoration-transparent"
          >
            <div class="flex gap-1">
              MEET <img src={open === "meet" ? Line : Arrowdown} alt="arrow" />
            </div>
          </button>
        </li>
        <li>
          <button
            on:click={() => (open = false)}
            class="btn btn-link btn-active font-medium text-neutral decoration-transparent"
          >
            <a href="/connect">CONNECT</a>
          </button>
        </li>
      </ul>
    </div>
    <div class="block md:hidden">
      <div class="h-full w-7">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <img
          src={BurgerMenuOpen ? BurgerMenuClose : BurgerMenu}
          on:click={toggleMenu}
          alt="burgermenu "
        />
      </div>
    </div>
  </nav>
  <div>
    {#if open === "superblox"}
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div
        on:mouseleave={() => (open = false)}
        class="t-16 fixed z-[99999999] flex w-full justify-center gap-3 bg-base-100/70 p-3 backdrop-blur-sm"
      >
        <a href="/superblox/smartspaces" on:click={() => (open = false)}>
          <div
            class="prose h-full max-w-xs rounded-md bg-[#89C365] p-3 text-base-100 hover:brightness-105"
          >
            <h3 class=" text-xl font-medium text-base-100">Smart Spaces</h3>
            <p>
              Digital + Sustainable Ecosystems. Communities. Buildings. Farms.
            </p>
          </div>
        </a>
        <a href="/superblox/smartdevices" on:click={() => (open = false)}>
          <div
            class="prose h-full max-w-xs rounded-md bg-[#C66A66] p-3 text-base-100 hover:brightness-105"
          >
            <h3 class=" text-xl font-medium text-base-100">Smart Devices</h3>
            <p>From Devices to Device-based Experience as a Service.</p>
          </div>
        </a>
        <a href="/superblox/smartutilities" on:click={() => (open = false)}>
          <div
            class="prose h-full max-w-xs rounded-md bg-[#CED17A] p-3 text-base-100 hover:brightness-105"
          >
            <h3 class=" text-xl font-medium text-base-100">Smart Utilities</h3>
            <p>Net Zero & Beyond... O&G. Energy. Industry. Commercial.</p>
          </div>
        </a>
        <a href="/superblox/smartindustry" on:click={() => (open = false)}>
          <div
            class="prose h-full max-w-xs rounded-md bg-[#5C5C5C] p-3 text-base-100 hover:brightness-105"
          >
            <h3 class=" text-xl font-medium text-base-100">Smart Industry</h3>
            <p>Industry X.0 Resilient Supply Chain</p>
          </div>
        </a>
      </div>
    {/if}
    {#if open === "buildingblox"}
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div
        on:mouseleave={() => (open = false)}
        class="t-16 fixed z-[99999999] flex w-full justify-center gap-3 bg-base-100/70 p-3 backdrop-blur-sm"
      >
        <a href="/buildingblox/sandblox" on:click={() => (open = false)}>
          <div
            class="prose h-full rounded-md bg-[#AB71AD] p-3 text-base-100 hover:brightness-105"
          >
            <h3 class="text-xl font-medium text-base-100">SandBlox</h3>
            <p>Reimagining Digital. Realizing Outcomes</p>
          </div>
        </a>
        <a href="/buildingblox/edgeblox" on:click={() => (open = false)}>
          <div
            class="prose h-full max-w-xs rounded-md bg-[#DF875D] p-3 text-base-100 hover:brightness-105"
          >
            <h3 class="text-xl font-medium text-base-100">EdgeBlox</h3>
            <p>Meet the Lego Blocks of your AloT Transformation.</p>
          </div>
        </a>
        <a href="/buildingblox/servblox" on:click={() => (open = false)}>
          <div
            class="prose h-full max-w-xs rounded-md bg-[#6EB7E6] p-3 text-base-100 hover:brightness-105"
          >
            <h3 class=" text-xl font-medium text-base-100">ServBlox</h3>
            <p>Generate 360° value for your business</p>
          </div>
        </a>
      </div>
    {/if}
    {#if open === "meet"}
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div
        on:mouseleave={() => (open = false)}
        class="t-16 fixed z-[99999999] flex w-full justify-center gap-3 bg-base-100/70 p-3 backdrop-blur-sm"
      >
        <a href="/ourcompany" on:click={() => (open = false)}>
          <div
            class="prose h-full max-w-xs rounded-md bg-[#DA7874] p-3 text-base-100 hover:brightness-105"
          >
            <h3 class="  text-xl font-medium text-base-100">Our Company</h3>
            <p>Meet the Vision. Meet the People. Meet the Passion.</p>
          </div>
        </a>
        <a href="/jobs" on:click={() => (open = false)}>
          <div
            class="prose h-full max-w-xs rounded-md bg-[#71BAB6] p-3 text-base-100 hover:brightness-105"
          >
            <h3 class=" text-xl font-medium text-base-100">Your Future Team</h3>
            <p>
              We're missing some key players in our team... Make your move now!
            </p>
          </div>
        </a>
      </div>
    {/if}
  </div>
  <main class="mt-16">
    <slot />
  </main>
{/if}

<div class="cursor-element">
  <Cursor
    color={cursorColor}
    mixBlendMode={cursorMixBlendMode}
    size={cursorSize}
    shape={cursorSquare ? "square" : "circle"}
  />
</div>

<footer
  style="background-image: url(/defaultbg.png);"
  class=" relative z-[9999] bg-gray-200 bg-cover bg-top bg-no-repeat pt-14"
>
  <div class="m-auto flex max-w-5xl gap-14 p-3">
    <div class="h-14 w-1/4">
      <a class=" h-full" href="/"
        ><img
          class="  h-full object-contain"
          src={Logo}
          alt="tinkerblox logo"
        /></a
      >
    </div>
    <div class="grid w-3/4 grid-cols-2 gap-1 md:grid-cols-4">
      <div class="prose">
        <h4 class="text-lg">Offerings</h4>
        <div>
          <a href="/buildingblox/sandblox"><p>SandBloX</p> </a>
          <a href="/buildingblox/edgeblox"><p>EdgeBloX</p> </a>
          <a href="/buildingblox/servblox"><p>ServBloX</p> </a>
        </div>
      </div>
      <div class="prose">
        <h4 class="text-lg">Resource Links</h4>
        <div>
          <a href="/ourcompany"><p>Meet Our Company</p></a>
          <a href="/comingsoon"><p>Read Blogs</p></a>
          <a href="/jobs"><p>Meet Your Future Team</p></a>
        </div>
      </div>
      <div class="prose">
        <h4 class="text-lg">Good To Know</h4>
        <div>
          <a href="/comingsoon"><p>Privacy Policy</p></a>
          <a href="/comingsoon"><p>Term of Use</p></a>
          <a href="/comingsoon"><p>FAQ</p></a>
        </div>
      </div>
      <div class="prose">
        <h4 class="text-lg">Address</h4>
        <div>
          <p class=" flex gap-2">
            <img class=" w-8" src={Location} alt="location" />
            13500 Watertown Plank Rd, Elm Grove, WI 53122
          </p>
          <p class=" flex gap-2">
            <img class="w-8" src={Location} alt="location" />
            ELCOT IT SEZ, TIDEL Park, Coimbatore, TN 641014
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="flex w-full justify-center pb-6 text-center">
    <p class=" text-lg">
      © 2023 Tinkerblox, All rights reserved.<br />
      <span class="text-base opacity-70"
        >Designed and developed by <a href="https://angle.services/">Angle</a
        ></span
      >
    </p>
  </div>
</footer>

<style scoped>
  .cursor-element {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
