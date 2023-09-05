<script>
import servbloxhero from '$lib/servbloxhero.png';
import servbloxengage from '$lib/servbloxengage.png';
import gradientbackground from '$lib/gradient_background.png';
import servbloxleverage from '$lib/servbloxleverage.png';
import GradientButton from '$lib/components/GradientButton.svelte';
import Servelottie from '$lib/Servelottie.json';
import { onMount } from 'svelte';
import TooltipWork from '$lib/components/TooltipWork.svelte';
import servlevinfo from '$lib/servlevinfo.png';

let LottiePlayer;

onMount(async () => {
	const module = await import('@lottiefiles/svelte-lottie-player');
	LottiePlayer = module.LottiePlayer;
});

let isHovered = false;

function handleMouseEnter() {
	isHovered = true;
}

function handleMouseLeave() {
	isHovered = false;
}
</script>

<section
	style="background-image: url({servbloxhero});"
	class="flex h-[calc(100vh-4rem)] min-h-fit w-full flex-col items-center justify-end bg-cover bg-center bg-no-repeat p-3 md:p-40">
	<h1 class="text-4xl font-bold text-base-100 md:text-8xl">
		<span class=" text-accent">Serv</span>
		Blox
	</h1>

	<h3 class=" mt-16 p-5 text-center text-2xl font-semibold text-base-100 md:p-0 md:text-3xl">
		Embrace the power of AIoT...
	</h3>

	<p class="mt-2 max-w-3xl p-5 text-center text-2xl text-base-100 md:p-5">
		…with our comprehensive set of development & deployment services across the full AIoT stack …for
		your journey from pilot -> full scale deployment
	</p>
</section>
<section
	style="background-image: url(/defaultbg.png);"
	class=" min-h-[561px] w-full bg-cover bg-center bg-no-repeat py-16">
	<div class="m-auto flex min-h-[561px] max-w-6xl flex-col items-center gap-2 md:flex-row">
		<div class="min-h-6 w-1/3">
			{#if LottiePlayer}
				<LottiePlayer
					autoplay
					loop
					background="transparent"
					controls="{false}"
					src="{Servelottie}" />
			{/if}
		</div>
		<div class=" min-h-6 w-full p-5 md:w-2/3 md:p-0">
			<h4 class=" text-center text-3xl font-semibold text-secondary md:text-left">
				The <span class="text-info">beating heart</span> of our<br /> AIoT orchestration
			</h4>

			<p class="mt-5 text-center text-lg text-neutral/60 md:text-left md:text-2xl">
				If you have already figured out the vision <span class="text-secondary">(#sandblox)</span> &
				the body of assets
				<span class="text-secondary">(#edgeblox)</span>, like every tinman, what you now need is a
				heart that can make your AIoT dream a reality.<br /> <br />
				<span class=" font-bold text-info">ServBloX</span>
				<span class="text-secondary">is the beating heart</span> of our AIoT orchestration with experts
				bringing together the passion & the intellect across the board
			</p>
		</div>
	</div>
	<h2 class=" mt-26 w-full pt-5 text-center text-4xl text-neutral md:mt-32 md:pt-0 md:text-6xl">
		Engage <span class="font-bold text-accent">ServBloX</span>
	</h2>
	<div class=" min-h-16 mt-10 w-full">
		<img
			src="{servbloxengage}"
			alt="servbloxengage"
			class=" h-auto w-full object-contain object-center" />
	</div>
</section>
<section
	style="background-image: url({gradientbackground})"
	class="min-h-16 w-full bg-primary bg-cover bg-bottom bg-no-repeat py-10">
	<div class="m-auto max-w-7xl">
		<h4 class="mb-16 w-full text-center text-4xl text-base-100 md:text-5xl">Leverage ServBloX</h4>

		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="{isHovered ? 'subtle-shake' : ''} object-contain"
			on:mouseenter="{handleMouseEnter}"
			on:mouseleave="{handleMouseLeave}"
			style="position: relative; text-align: center;">
			<img class=" object-contain object-center" src="{servbloxleverage}" alt="" />

			{#if isHovered}
				<!-- svelte-ignore a11y-img-redundant-alt -->
				<img
					class="object-contain object-center"
					src="{servlevinfo}"
					alt="Additional Image"
					style="position: absolute; top: 0%; left: 50%; transform: translateX(-50%); margin-top: 0px;" />
			{/if}
		</div>

		<style>
		/* Define your shake animation CSS here */
		.subtle-shake {
			animation: subtle-shake 0.3s; /* Decreased the duration to make it faster */
		}

		@keyframes subtle-shake {
			0%,
			100% {
				transform: translate(0, 0);
			}
			25% {
				transform: translate(-2px, 0);
			}
			75% {
				transform: translate(2px, 0);
			}
		}
		</style>
		<div class="min-h-16 mt-5 w-full">
			<!-- <TooltipWork /> -->
		</div>
	</div>
</section>

<section
	style="background-image: url(/defaultbg.png);"
	class=" w-full bg-cover bg-center bg-no-repeat py-16 text-center">
	<div class="m-auto flex max-w-6xl flex-col items-center">
		<h4 class="p-5 text-3xl font-semibold text-info md:p-0">
			<span class="text-secondary">Having a good heart </span>means lots of friends…
		</h4>
		<br />
		<p class="mt-0 p-5 text-neutral/60 md:mt-5 md:p-0">
			ServBloX comes with our AIoT partners from all backgrounds → Chip manufacturers, MNPs, Cloud
			providers, IoT platform players, AI specialists, Cybersecurity Experts, App Builders, etc.
		</p>
		<br />
		<p
			class=" bg-gradient-to-l from-secondary to-info bg-clip-text p-5 text-lg font-normal text-transparent md:p-0">
			Join the fun & learn about the exciting AIoT gossip from our partners from around the world…
		</p>
		<br />
		<br />
		<GradientButton>Join our ALLIANCE</GradientButton>
	</div>
</section>
