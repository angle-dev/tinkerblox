<script>
  import aboutHero from "$lib/aboutHero.png";
  import GradientButton from "$lib/components/GradientButton.svelte";
  import gradientbackground from "$lib/gradient_background.png";
  import ScrollTransition from "../../lib/components/ScrollTransition.svelte";
</script>

<div
  style="background-image: url('/defaultbg.png');"
  class="fixed top-0 h-full w-full"
/>

<section
  style="  background-image: url('{aboutHero}'); "
  class="relative z-30 flex h-fit min-h-[777px] w-full flex-col items-center justify-center bg-cover bg-center bg-no-repeat p-3 py-5 md:p-12"
>
  <div class=" flex flex-col items-center p-3 text-center align-bottom">
    <h3 class=" content-center text-4xl font-normal text-base-100 md:text-7xl">
      Building Tomorrow<br /><span class="font-bold">@ the Edge</span>
    </h3>

    <p class="mt-16 max-w-3xl text-center text-xl text-base-100 md:text-2xl">
      Humans are creators… & just as no two humans are alike, no two devices
      they create, or the environment they exist in, are alike! Consequently,
      each device has [& deserves] its own identity...and an ecosystem that
      enables an adaptive system of interactive experience between man & machine
      is the future.
    </p>
    <p class="mt-2 max-w-3xl text-center text-xl text-base-100 md:text-2xl">
      TinkerBloX is born out of the ambition to curate and orchestrate this
      world of adaptive systems of devices, sustainably… a world that empowers
      devices to rise above the clouds…
    </p>
    <h3 class=" mt-10 text-3xl font-semibold text-base-100">
      A world at the edge of tomorrow!
    </h3>
    <div class=" mt-16 w-fit">
      <GradientButton>LEARN MORE</GradientButton>
    </div>
  </div>
</section>

<section class=" relative z-10 w-full py-16">
  <ScrollTransition>
    <div
      class="m-auto flex max-w-6xl flex-col items-start gap-14 md:flex-row md:items-center"
    >
      <div class="m-auto w-2/3 md:w-1/3">
        <img
          src={"https://tbpublicsite.blob.core.windows.net/tinkerblox/Our%20company/Karthik%20G.K.png"}
          alt=""
        />
      </div>
      <div
        class="m-auto flex w-11/12 flex-col items-center text-center md:w-2/3"
      >
        <h4 class=" text-4xl font-semibold text-secondary md:text-6xl">
          <span class="text-info">karthik </span><span class="text-gray-600">
            ‘G.K.’</span
          ><br />
          gopalakrishnan
        </h4>

        <p class=" mt-20 w-fit text-4xl text-neutral/60">
          Chief Executive Officer
        </p>

        <p class="mt-16 w-96 p-5 text-xl text-neutral/60 md:p-0 md:text-2xl">
          IoT visionary  |  Magician at scaling business  | Great party host |
          Avid boxer | Doting father  |  Confused husband …
        </p>
      </div>
    </div>
  </ScrollTransition>
</section>
<ScrollTransition>
  <div class=" absolute m-auto flex h-fit w-full items-center justify-center">
    <svg
      class=" absolute m-auto mb-5 h-32 w-32"
      viewBox="0 0 148 121"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.0527344 120.519V80.388C0.0527344 65.394 2.69874 51.576 7.99074 38.934C13.2827 26.292 22.2497 13.503 34.8917 0.567017L57.8237 18.648C50.4737 25.998 44.8877 32.907 41.0657 39.375C37.2437 45.843 34.7447 52.458 33.5687 59.22H61.7927V120.519H0.0527344ZM86.0477 120.519V80.388C86.0477 65.394 88.6937 51.576 93.9857 38.934C99.2777 26.292 108.245 13.503 120.887 0.567017L143.819 18.648C136.469 25.998 130.883 32.907 127.061 39.375C123.239 45.843 120.74 52.458 119.564 59.22H147.788V120.519H86.0477Z"
        fill="#00A7E5"
      />
    </svg>
  </div>
</ScrollTransition>
<section class=" Z-10 relative w-full bg-black/5 py-16">
  <ScrollTransition>
    <div class="m-auto flex w-11/12 flex-col items-center text-center md:w-2/3">
      <h4 class="mb-6 text-3xl text-secondary md:mb-14 md:text-5xl">
        Sequencing <span class="font-semibold text-info"> Our DNA…</span>
      </h4>

      <p class="mt-5 p-5 text-xl text-neutral/60 md:p-0 md:text-2xl">
        <span class="text-secondary">@ TinkerBloX</span>, each day is a step
        towards curating the connected device habitat that helps you realize
        “true real-time” efficiency for your operations. Our AI + IoT building
        blocks empower enterprises to experience the cause & effect continuum at
        the actual site of action…the Edge ! & as such, it is in our DNA to
        deliver Device-Native-AIoT in configurable plug-&-play blocks that are
        sustainable by design and will always give you the edge…
      </p>

      <p class="mt-5 p-5 text-xl text-info md:p-0 md:text-2xl">
        If you are as excited as we are at the prospect of a truly Phygital
        world driven by device-centric experience & the servitization economy,
        check out our transformation blocks…
      </p>

      <p
        class=" mt-16 w-fit bg-gradient-to-l from-secondary to-info bg-clip-text p-5 text-3xl font-medium text-transparent md:p-0 md:text-4xl"
      >
        SandBlox | EdgeBlox  | ServBlox
      </p>
    </div>
  </ScrollTransition>
</section>

<section class=" relative z-10 w-full py-16">
  <ScrollTransition>
    <div
      class="m-auto flex max-w-6xl flex-col items-start gap-14 md:flex-row-reverse md:items-center"
    >
      <div class="m-auto w-2/3 md:w-1/3">
        <img
          src={"https://tbpublicsite.blob.core.windows.net/tinkerblox/Our%20company/Anoop%20A.B.C.png"}
          alt=""
        />
      </div>
      <div
        class="m-auto flex w-11/12 flex-col items-center text-center md:w-2/3"
      >
        <h4 class=" text-4xl font-semibold text-secondary md:text-6xl">
          <span class="text-info">anoop </span><span class="text-gray-600">
            ‘A.B.C’</span
          ><br />
          balachandran
        </h4>

        <p class=" mt-20 w-fit text-4xl text-neutral/60">Chief Edge-er</p>

        <p class="mt-16 w-96 p-5 text-xl text-neutral/60 md:p-0 md:text-2xl">
          AIoT evangelist  |  the “big picture” guy  | ardent foodie |  tourist
          by profession | mostly single …
        </p>
      </div>
    </div>
  </ScrollTransition>
</section>
<ScrollTransition>
  <div class=" absolute m-auto flex h-fit w-full items-center justify-center">
    <svg
      class=" absolute m-auto mb-5 h-32 w-32"
      viewBox="0 0 148 121"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.0527344 120.519V80.388C0.0527344 65.394 2.69874 51.576 7.99074 38.934C13.2827 26.292 22.2497 13.503 34.8917 0.567017L57.8237 18.648C50.4737 25.998 44.8877 32.907 41.0657 39.375C37.2437 45.843 34.7447 52.458 33.5687 59.22H61.7927V120.519H0.0527344ZM86.0477 120.519V80.388C86.0477 65.394 88.6937 51.576 93.9857 38.934C99.2777 26.292 108.245 13.503 120.887 0.567017L143.819 18.648C136.469 25.998 130.883 32.907 127.061 39.375C123.239 45.843 120.74 52.458 119.564 59.22H147.788V120.519H86.0477Z"
        fill="#A1499C"
      />
    </svg>
  </div>
</ScrollTransition>
<section class=" Z-10 relative w-full bg-black/5 py-16">
  <ScrollTransition>
    <div
      class="m-auto flex w-11/12 flex-col items-center p-5 text-center md:w-2/3 md:p-0"
    >
      <h4 class="mb-6 text-3xl text-secondary md:mb-14 md:text-5xl">
        Believe in the <span class="font-semibold text-info"> edge…</span>
      </h4>

      <p class="mt-5 text-xl text-neutral/60 md:text-2xl">
        To build a new world of autonomous device ecosystems…<br />
        To work tirelessly on the belief that true distributed intelligence is possible
        at the edge…<br />
        To orchestrate a truly seamless experience that enables interaction between
        every device and its human…<br />
      </p>

      <p
        class=" mt-5 bg-gradient-to-l from-secondary to-info bg-clip-text text-xl font-medium text-transparent md:text-2xl"
      >
        and to do all this while driving home tangible business outcomes for our
        clients & partners every step of the way…sustainably…
      </p>

      <p class=" mt-16 w-fit text-3xl font-semibold">
        <span class="text-info">…That is the </span>purpose of
        <span class="text-secondary">TinkerBloX</span>
      </p>
    </div>
  </ScrollTransition>
</section>

<section class=" relative z-10 w-full py-16">
  <ScrollTransition>
    <div
      class="m-auto flex max-w-6xl flex-col items-start gap-14 md:flex-row md:items-center"
    >
      <div class="m-auto w-2/3 md:w-1/3">
        <img
          src={"https://tbpublicsite.blob.core.windows.net/tinkerblox/Our%20company/Karthik%20I.R.png"}
          alt=""
        />
      </div>
      <div
        class="m-auto flex w-11/12 flex-col items-center text-center md:w-2/3"
      >
        <h4 class=" text-4xl font-semibold text-secondary md:text-6xl">
          <span class="text-info">karthik </span><span class="text-gray-600">
            ‘IR’</span
          ><br />
          rangasamy
        </h4>

        <p class=" mt-20 w-fit text-4xl text-neutral/60">Chief Builder</p>

        <p class="mt-16 w-96 p-5 text-xl text-neutral/60 md:p-0 md:text-2xl">
          digital geek  |  nurtures great teams  | coffee connoisseur  |  chef
          crafting the perfect recipes - both food & software
        </p>
      </div>
    </div>
  </ScrollTransition>
</section>
<ScrollTransition>
  <div class=" absolute m-auto flex h-fit w-full items-center justify-center">
    <svg
      class=" absolute m-auto mb-5 h-32 w-32"
      viewBox="0 0 148 121"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.0527344 120.519V80.388C0.0527344 65.394 2.69874 51.576 7.99074 38.934C13.2827 26.292 22.2497 13.503 34.8917 0.567017L57.8237 18.648C50.4737 25.998 44.8877 32.907 41.0657 39.375C37.2437 45.843 34.7447 52.458 33.5687 59.22H61.7927V120.519H0.0527344ZM86.0477 120.519V80.388C86.0477 65.394 88.6937 51.576 93.9857 38.934C99.2777 26.292 108.245 13.503 120.887 0.567017L143.819 18.648C136.469 25.998 130.883 32.907 127.061 39.375C123.239 45.843 120.74 52.458 119.564 59.22H147.788V120.519H86.0477Z"
        fill="#FFC600"
      />
    </svg>
  </div>
</ScrollTransition>
<section class=" Z-10 relative w-full bg-black/5 py-16">
  <ScrollTransition>
    <div
      class="m-auto flex w-11/12 flex-col items-center p-5 text-center md:w-2/3 md:p-0"
    >
      <h4 class="mb-6 text-3xl text-secondary md:mb-14 md:text-5xl">
        We’ve got “just” what you <span class="font-semibold text-info">
          need...
        </span>
      </h4>

      <p class="mt-5 text-xl text-neutral/60 md:text-2xl">
        The world has fooled us into thinking that we need to pick from what’s
        available, and live with it…just accept the shortcomings…pay for
        features we’d never use…be happy with the half-baked outcomes…because
        “that’s what you get” ! Not anymore…<br /><span class="text-secondary"
          >@ TinkerBloX</span
        >, we’ve made it our mission to enable businesses with the power of tech
        with full freedom to build the solution exactly as you’d want to; & a
        full set of services from consulting to implementation to ensure you get
        nothing short of your desired outcome!
      </p>

      <p class="mt-5 text-xl text-info md:text-2xl">
        & for our focus verticals, this comes with our promise for
        Value-Of-Investment : a promise of needing to spend on only what you
        need; a promise of outcomes from pilot → scale → service delivery aaS
      </p>

      <p
        class=" mt-16 w-fit bg-gradient-to-l from-secondary to-info bg-clip-text text-2xl font-medium text-transparent md:text-4xl"
      >
        Check out our Super BloX : <br />
        Smart Spaces | Smart Devices  | Smart Utilities | Smart Industry
      </p>
    </div>
  </ScrollTransition>
</section>

<section class=" relative z-10 w-full py-16">
  <ScrollTransition>
    <div
      class="m-auto flex max-w-6xl flex-col items-start gap-14 md:flex-row-reverse md:items-center"
    >
      <div class="m-auto w-2/3 md:w-1/3">
        <img
          src={"https://tbpublicsite.blob.core.windows.net/tinkerblox/Our%20company/Prakash.png"}
          alt=""
        />
      </div>
      <div
        class="m-auto flex w-11/12 flex-col items-center text-center md:w-2/3"
      >
        <h4 class=" text-4xl font-semibold text-secondary md:text-6xl">
          <span class="text-info">prakash </span>
          G.R.
        </h4>

        <p class=" mt-20 w-fit text-4xl text-neutral/60">Chief Tech-y</p>

        <p class="mt-16 w-96 p-5 text-xl text-neutral/60 md:p-0 md:text-2xl">
          Farmer; Engineering Leader; Continuous Learner & Problem Solver; Makes
          money in Software : spends some of it in farming and loses the rest in
          stock markets
        </p>
      </div>
    </div>
  </ScrollTransition>
</section>
<ScrollTransition>
  <div class=" absolute m-auto flex h-fit w-full items-center justify-center">
    <svg
      class=" absolute m-auto mb-5 h-32 w-32"
      viewBox="0 0 148 121"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.0527344 120.519V80.388C0.0527344 65.394 2.69874 51.576 7.99074 38.934C13.2827 26.292 22.2497 13.503 34.8917 0.567017L57.8237 18.648C50.4737 25.998 44.8877 32.907 41.0657 39.375C37.2437 45.843 34.7447 52.458 33.5687 59.22H61.7927V120.519H0.0527344ZM86.0477 120.519V80.388C86.0477 65.394 88.6937 51.576 93.9857 38.934C99.2777 26.292 108.245 13.503 120.887 0.567017L143.819 18.648C136.469 25.998 130.883 32.907 127.061 39.375C123.239 45.843 120.74 52.458 119.564 59.22H147.788V120.519H86.0477Z"
        fill="#E66120"
      />
    </svg>
  </div>
</ScrollTransition>
<section class=" Z-10 relative w-full bg-black/5 py-16">
  <ScrollTransition>
    <div
      class="m-auto flex w-11/12 flex-col items-center p-5 text-center md:w-2/3 md:p-0"
    >
      <h4
        class="mb-6 text-3xl font-semibold text-secondary md:mb-14 md:text-5xl"
      >
        Democratizing <span class=" text-info"> Tech…</span>
      </h4>

      <p class="mt-5 text-xl text-neutral/60 md:text-2xl">
        A true techie isn’t happy with building tech products ; he wants to be
        part of a family of creators… <br />A true techie doesn’t hoard power;
        he empowers his fellows to tinker around with his creation & make it
        better…
        <br />A true techie is cognizant of security, but works towards building
        an open & sharing ecosystem…
      </p>

      <p
        class=" mt-5 bg-gradient-to-l from-secondary to-info bg-clip-text text-xl font-medium text-transparent md:text-2xl"
      >
        With some very passionate Tech-“BloXers”, TinkerBloX isn’t a company
        that sells tech ; We are the first step to a community that brings
        tomorrow’s tech to life.
      </p>

      <p class=" mt-16 w-fit text-3xl font-semibold">
        May the Edge
        <span class="text-secondary">be with you !!</span>
      </p>
    </div>
  </ScrollTransition>
</section>

<section
  style="  background-image: url({gradientbackground}) "
  class=" min-h-16 relative z-30 w-full bg-primary bg-cover bg-bottom bg-no-repeat py-10"
>
  <ScrollTransition>
    <div class="m-auto flex max-w-7xl flex-col items-center text-center">
      <h4 class=" mb-5 w-full text-4xl text-base-100 md:text-5xl">
        Values we live by…
      </h4>
      <p class="mt-5 max-w-3xl p-5 text-xl text-base-100 md:p-0 md:text-2xl">
        A new world needs to update to some new values while at the same time
        holding on to some traditional ones… Here’s what we live by through
        thick & thin…
      </p>
      <div class="min-h-16 mt-5 w-full">
        <img
          src={"https://tbpublicsite.blob.core.windows.net/tinkerblox/Our%20company/Value%20we%20believe%20By.png"}
          alt="values we live by"
          class=" h-auto w-full object-contain object-center"
        />
      </div>
    </div>
  </ScrollTransition>
</section>
