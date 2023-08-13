<script>
import servbloxhero from '$lib/servbloxhero.png';
import servbloxengage from '$lib/servbloxengage.png';
import gradientbackground from '$lib/gradient_background.png';
import servbloxleverage from '$lib/servbloxleverage.png';
import GradientButton from '$lib/components/GradientButton.svelte';
import Servelottie from '$lib/Servelottie.json';
import { onMount } from 'svelte';

let LottiePlayer;

onMount(async () => {
	const module = await import('@lottiefiles/svelte-lottie-player');
	LottiePlayer = module.LottiePlayer;
});
</script>

<section
	style="background-image: url({servbloxhero});"
	class="flex h-[calc(100vh-4rem)] min-h-fit w-full flex-col items-center justify-end bg-cover bg-center bg-no-repeat p-3 md:p-12">
	<h1 class="text-6xl font-bold text-base-100">
		<span class=" text-accent">Serv</span>
		Blox
	</h1>

	<h3 class=" mt-16 text-3xl font-semibold text-base-100">Embrace the power of AIoT...</h3>

	<p class="mt-2 max-w-3xl text-center text-xl text-base-100">
		…with our comprehensive set of development & deployment services across the full AIoT stack …for
		your journey from pilot -> full scale deployment
	</p>
</section>
<section
	style="background-image: url(/defaultbg.png);"
	class=" w-full bg-cover bg-center bg-no-repeat py-16">
	<div class="m-auto flex max-w-6xl items-center gap-2">
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
		<div class=" min-h-6 w-2/3">
			<h4 class="text-3xl font-semibold text-secondary">
				The <span class="text-info">beating heart</span> of our<br /> AIoT orchestration
			</h4>

			<p class="mt-5 text-neutral/60">
				If you have already figured out the vision <span class="text-secondary">(#sandblox)</span> &
				the body of assets
				<span class="text-secondary">(#edgeblox)</span>, like every tinman, what you now need is a
				heart that can make your AIoT dream a reality.<br /> <br />
				<span class="font-semibold text-info">ServBloX</span>
				<span class="text-secondary">is the beating heart</span> of our AIoT orchestration with experts
				bringing together the passion & the intellect across the board
			</p>
		</div>
	</div>
	<h2 class="mt-32 w-full text-center text-6xl text-neutral">
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
	style=" background-image: url({gradientbackground}) "
	class=" min-h-16 w-full bg-primary bg-cover bg-bottom bg-no-repeat py-10">
	<div class="m-auto max-w-7xl">
		<h4 class=" mb-16 w-full text-center text-5xl text-base-100">Leverage ServBloX</h4>
		<div class="min-h-16 mt-5 w-full">
			<img
				src="{servbloxleverage}"
				alt="servbloxleverage"
				class=" h-auto w-full object-contain object-center" />
		</div>
	</div>
</section>

<section
	style="background-image: url(/defaultbg.png);"
	class=" w-full bg-cover bg-center bg-no-repeat py-16 text-center">
	<div class="m-auto flex max-w-6xl flex-col items-center">
		<h4 class="text-3xl font-semibold text-info">
			<span class="text-secondary">Having a good heart </span>means lots of friends…
		</h4>
		<br />
		<p class="mt-5 text-neutral/60">
			ServBloX comes with our AIoT partners from all backgrounds → Chip manufacturers, MNPs, Cloud
			providers, IoT platform players, AI specialists, Cybersecurity Experts, App Builders, etc.
		</p>
		<br />
		<p
			class=" bg-gradient-to-l from-secondary to-info bg-clip-text text-lg font-medium text-transparent">
			Join the fun & learn about the exciting AIoT gossip from our partners from around the world…
		</p>
		<br />
		<br />
		<GradientButton>Join our ALLIANCE</GradientButton>
	</div>
</section>
