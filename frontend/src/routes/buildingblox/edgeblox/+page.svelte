<script>
import EdgeBloxHero from '$lib/edgebloxhero.png';
import edgebloxinfo from '$lib/edgebloxinfo.png';
import GradientButton from '$lib/components/GradientButton.svelte';
import gradientbackground from '$lib/gradient_background.png';
import Edgeimg from '$lib/Edge.png';
import Edge from '$lib/Edge.json';
import { onMount } from 'svelte';

let LottiePlayer;

onMount(async () => {
	const module = await import('@lottiefiles/svelte-lottie-player');
	LottiePlayer = module.LottiePlayer;
});
</script>

<section
	style=" background-image: url('{EdgeBloxHero}'); "
	class=" flex h-fit min-h-[calc(100vh-4rem)] w-full flex-col items-center justify-end bg-gray-700 bg-cover bg-center bg-no-repeat p-5 md:p-40">
	<div class=" w-full max-w-7xl p-3 text-center md:text-left">
		<h1 class="mb-14 text-4xl font-bold text-base-100 md:text-8xl">
			<span class="text-info">Edge</span>BloX
		</h1>
		<h2 class="mb-14 text-3xl font-bold text-base-100 md:text-4xl">
			86% of corporate decision makers worry about 3 things during their IoT journey…
		</h2>
		<p class="mt-6 text-lg text-base-100">
			◘ Why do I have to start from scratch; Is there a jump-start I can get?
		</p>
		<p class="mt-3 text-lg text-base-100">
			◘ I have an existing legacy set of systems that are very heterogeneous. Can I get a solution
			that’s flexible enough to balance my current variety with my future ambitions?
		</p>
		<p class="mt-3 text-lg font-normal text-base-100">
			◘ I get the big picture, but I want small wins that turn into bigger ones. Will this approach
			ensure I get realistic outcomes at multiple milestones as I crawl-walk-run-fly ?
		</p>
		<div class="mt-16">
			<h3 class="text-3xl font-semibold text-base-100 md:text-4xl">
				With EdgeBloX, <span class="text-accent">Yes, </span>
				<span class="text-secondary"> Yes & </span><span class="text-info">Yes !!</span>
			</h3>
		</div>
	</div>
</section>

<section
	style="background-image: url(/defaultbg.png);"
	class=" min-h-[561px] bg-base-100 bg-cover bg-top bg-no-repeat">
	<div class="m-auto flex min-h-[561px] max-w-6xl flex-col items-center gap-2 md:flex-row">
		<div class="min-h-6 w-1/3">
			<!-- {#if LottiePlayer}
				<LottiePlayer autoplay loop background="transparent" controls="{false}" src="{Edge}" />
			{/if} -->
			<img src="{Edgeimg}" alt="" />
		</div>
		<div class=" min-h-6 w-full text-center md:w-2/3 md:text-left">
			<h4 class="p-5 text-3xl text-secondary md:p-0 md:text-5xl">
				Let’s <span class="font-medium text-info"> build your IoT World </span> one block at a time!
			</h4>
			<p class=" mt-0 p-5 text-lg text-neutral/40 md:mt-8 md:p-0 md:text-2xl">
				EdgeBloX is the most flexible Edge-native AIoT suite in the world, with each layer of the
				AIoT stack configurable to suit your enterprise environment. With the freedom to choose from
				our array of pre-built components, you can build an AIoT environment as easy as your kids
				building Lego sets.
			</p>
		</div>
	</div>
</section>

<section
	style=" background-image: url({gradientbackground}) "
	class="w-full bg-primary bg-cover bg-bottom bg-no-repeat py-10">
	<h4 class="mb-16 w-full text-center text-3xl text-base-100 md:text-5xl">Experience Edgeblox</h4>
	<img
		class="m-auto h-auto w-full max-w-6xl object-contain object-center"
		src="{edgebloxinfo}"
		alt="edgebloxinfo" />
	<div
		class="m-auto mt-10 flex h-auto max-w-6xl flex-col-reverse items-center justify-center gap-10 px-2 md:flex-row">
		<GradientButton>Learn More</GradientButton>
		<div class="p-5 text-center text-base-100 md:p-0 md:text-left">
			<h4 class="  text-3xl md:text-4xl">
				<span style=" font-medium">And also </span><br />
				<span class="font-normal text-info"
					><span style=" font-medium">AB</span>acus <span style=" font-medium">| C</span>ollections
					<span style=" font-medium">| D</span>ock <span style=" font-medium">| E</span>dge
					<span style=" font-medium">| F</span>locks
				</span>
			</h4>

			<p class=" font-medium text-secondary">and many more...</p>
		</div>
	</div>
</section>

<section
	style="background-image: url(/defaultbg.png);"
	class=" bg-base-100 bg-cover bg-top bg-no-repeat p-5 text-center md:p-0 md:text-left">
	<div
		class="m-auto flex w-full max-w-5xl flex-col items-start gap-3 px-3 py-20 text-secondary md:px-2 md:py-32">
		<p class=" mt-3 text-lg text-neutral text-neutral/40 md:text-base">
			During the design phase of EdgeBloX, we spoke to all our AIoT partners <span
				class="font-bold text-info">
				Chip manufacturers, MNPs, Cloud providers, IoT platforms players, AI specialists,
				cybersecurity experts, app builders, etc.
			</span>
			As we all came together across a decade plus experience of catering to the multi-dimensionality
			of AIoT projects, we stuck to the variety that our customers expect from us… & EdgeBloX evolved
			into a suite that’s fluid across the key 7 dimensions of AIoT implementations. <br /> With
			each new engagement,
			<span class=" font-medium text-secondary">
				we configure across the 7Ds to ensure our customers get a comprehensive scalable AIoT
				solution that delivers outcomes from Day Zero
			</span> <br /> <br /> If you’re a device manufacturer aiming to build the next-generation of
			intelligent products, an optimist looking to extract efficiency out of your manufacturing or
			utility facilities, or a visionary looking to transform into a sustainable Net-Zero
			enterprise… <br /> <br /> We’ve created a full alphabet of EBx blocks for you to play around with…
		</p>
	</div>
</section>
