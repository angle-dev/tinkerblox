<script>
  import jobsHero from "$lib/jobsHero.png";
  import edgeEx from "$lib/edgeEx.png";
  import embedGeek from "$lib/embedGeek.png";
  import fullstackJug from "$lib/fullstackJug.png";
  import aimlHust from "$lib/aimlHust.png";
  import uiuxartist from "$lib/uiuxartist.png";
  import jobsApply from "$lib/jobsApply.png";
  import GradientButton from "$lib/components/GradientButton.svelte";
  import IntersectionObserver from "../../lib/components/IntersectionObserver.svelte";
</script>

<section
  style=" background-image: url('{jobsHero}'); "
  class="h-[577px] w-full flex-col items-center justify-end bg-cover bg-center bg-no-repeat p-3 md:p-12"
>
  <div
    class=" mt-[131px] flex w-full items-center justify-center p-3 align-middle"
  >
    <h3 class="text-4xl font-semibold text-base-100 md:text-8xl">
      COME JOIN OUR TEAM
    </h3>
  </div>
</section>

<section class=" w-full py-16">
  <IntersectionObserver>
    <div
      class="m-auto flex max-w-6xl flex-col items-start gap-14 md:flex-row md:items-center"
    >
      <div class="m-auto w-2/3 md:w-1/3">
        <img src={edgeEx} alt="" />
      </div>
      <div
        class="m-auto flex w-11/12 flex-col items-center p-5 text-center md:w-2/3 md:items-start md:p-0 md:text-left"
      >
        <h4 class="mb-6 text-4xl font-semibold text-secondary md:mb-14">
          Edge <span class="text-info">Explorer</span>
        </h4>

        <p
          class="w-fit bg-gradient-to-l from-secondary to-info bg-clip-text text-lg font-medium text-transparent md:text-2xl"
        >
          Small is beautiful... Edge is sexy !!
        </p>

        <p class="mt-5 text-lg text-neutral/60 md:text-2xl">
          I build world-class applications in constrained hardware. Data
          engineering, processing, analytics, privacy & security, visualization
          & communication that's all in a day's work for me. My latest passion
          is exploring AI/ML/Tiny ML at the edge. Believe me anything that can
          be done on the cloud, can be done better at the edge !
        </p>
      </div>
    </div>
  </IntersectionObserver>
</section>

<section class=" w-full py-16">
  <IntersectionObserver>
    <div
      class="m-auto flex max-w-6xl flex-col items-start gap-14 md:flex-row-reverse md:items-center"
    >
      <div class="m-auto w-2/3 md:w-1/3">
        <img src={embedGeek} alt="" />
      </div>
      <div
        class="m-auto flex w-11/12 flex-col items-center p-5 text-center md:w-2/3 md:items-start md:p-0 md:text-left"
      >
        <h4 class="mb-6 text-4xl font-semibold text-secondary md:mb-14">
          Embedded <span class="text-info">Geek</span>
        </h4>

        <p
          class="w-fit bg-gradient-to-l from-secondary to-info bg-clip-text text-lg font-medium text-transparent md:text-2xl"
        >
          I am the king of firmware !
        </p>

        <p class="mt-5 text-lg text-neutral/60 md:text-2xl">
          Bring any hardware, & I can build the best applications on it. My goal
          is to build everything great about cloud (micro services based
          architectures, modularity, configurability...) and more to the
          firmware world. I make boring devices 'SOCIAL' (Secure, Open,
          Connected, Intelligent, Autonomous, Light)
        </p>
      </div>
    </div>
  </IntersectionObserver>
</section>

<section class=" w-full py-16">
  <IntersectionObserver>
    <div
      class="m-auto flex max-w-6xl flex-col items-start gap-14 md:flex-row md:items-center"
    >
      <div class="m-auto w-2/3 md:w-1/3">
        <img src={fullstackJug} alt="" />
      </div>
      <div
        class="m-auto flex w-11/12 flex-col items-center p-5 text-center md:w-2/3 md:items-start md:p-0 md:text-left"
      >
        <h4 class="mb-6 text-4xl font-semibold text-secondary md:mb-14">
          Full Stack <span class="text-info">Juggler</span>
        </h4>

        <p
          class="w-fit bg-gradient-to-l from-secondary to-info bg-clip-text text-lg font-medium text-transparent md:text-2xl"
        >
          I'm the complete package !
        </p>

        <p class="mt-5 text-lg text-neutral/60 md:text-2xl">
          Want to build a business logic? Want to define data logic? Want to
          develop intuitive visuals? Want to design, develop, integrate & deploy
          full stack programs? FOr all of the above, I'm the man for you oh, &
          I'm not racist when it comes to languages - it's all ones & zeros ;)
        </p>
      </div>
    </div>
  </IntersectionObserver>
</section>

<section class=" w-full py-16">
  <IntersectionObserver>
    <div
      class="m-auto flex max-w-6xl flex-col items-start gap-14 md:flex-row-reverse md:items-center"
    >
      <div class="m-auto w-2/3 md:w-1/3">
        <img src={aimlHust} alt="" />
      </div>
      <div
        class="m-auto flex w-11/12 flex-col items-center p-5 text-center md:w-2/3 md:items-start md:p-0 md:text-left"
      >
        <h4 class="mb-6 text-4xl font-semibold text-secondary md:mb-14">
          AI/ML <span class="text-info">Hustler</span>
        </h4>

        <p
          class="w-fit bg-gradient-to-l from-secondary to-info bg-clip-text text-lg font-medium text-transparent md:text-2xl"
        >
          If AI is the future, then the future is here !
        </p>

        <p class="mt-5 text-lg text-neutral/60 md:text-2xl">
          I just love it when my algos can beat a human at something she/he is
          best at. & that's why I like to hustle from design to coding to
          deployment of my algo babies. My ML models can replicate any math
          formula, can communicate on text or audio, & can play with images or
          video. Basically if you treat me like Iron Man, I can build you a
          JARVIS ;)
        </p>
      </div>
    </div>
  </IntersectionObserver>
</section>

<section class=" w-full py-16">
  <IntersectionObserver>
    <div
      class="m-auto flex max-w-6xl flex-col items-start gap-14 md:flex-row md:items-center"
    >
      <div class="m-auto w-2/3 md:w-1/3">
        <img src={uiuxartist} alt="" />
      </div>
      <div
        class="m-auto flex w-11/12 flex-col items-center p-5 text-center md:w-2/3 md:items-start md:p-0 md:text-left"
      >
        <h4 class="mb-6 text-4xl font-semibold text-secondary md:mb-14">
          UI/UX <span class="text-info">Artist</span>
        </h4>

        <p
          class="w-fit bg-gradient-to-l from-secondary to-info bg-clip-text text-lg font-medium text-transparent md:text-2xl"
        >
          Picasso... vanGogh... Me !
        </p>

        <p class="mt-5 text-lg text-neutral/60 md:text-2xl">
          Getting a device/program/application to look good, feel good, &
          interact with a human in the most intuitive way - that's what makes me
          an artist of the tech world. It's a process : the storyboards, the
          quick but smooth prototypes & finally the masterpiece...a piece of art
          disguised as an app on your phone !
        </p>
      </div>
    </div>
  </IntersectionObserver>
</section>

<section
  style=" background-image: url('{jobsApply}'); "
  class=" m-auto flex h-[500px] content-end items-center justify-end bg-cover bg-center bg-no-repeat p-3 text-left md:p-12"
>
  <div class=" flex w-full flex-col p-3 text-center md:w-1/3 md:text-left">
    <h3 class=" text-4xl font-medium text-base-100 md:text-6xl">
      There’s room for more…
    </h3>
    <p class="mt-10 max-w-3xl text-xl text-base-100 md:text-3xl">
      So if you find yourself compelled to be part of adventure -
    </p>
    <div class="mt-10 w-fit self-center md:self-start">
      <GradientButton>Apply Now</GradientButton>
    </div>
  </div>
</section>
