<script>
import SandbloxHero from '$lib/sandbloxhero.png';
import gradientbackground from '$lib/gradient_background.png';
import GradientButton from '$lib/components/GradientButton.svelte';
import sandbloxinfo from '$lib/sandbloxinfo.png';

import Sand from '$lib/Sand.json';
import { onMount } from 'svelte';

let LottiePlayer;

onMount(async () => {
	const module = await import('@lottiefiles/svelte-lottie-player');
	LottiePlayer = module.LottiePlayer;
});
</script>

<section
	style=" background-image: url({SandbloxHero})"
	class="flex h-[calc(100vh-4rem)] min-h-fit w-full flex-col items-center justify-end bg-cover bg-center bg-no-repeat p-3 md:p-40">
	<h1 class=" text-4xl font-bold text-base-100 md:text-8xl">
		<span class="text-secondary">Sand</span>BloX
	</h1>
	<h3 class=" mt-16 p-14 text-center text-3xl font-semibold text-base-100 md:p-5">
		Strategize | Prototype | Scale | Repeat
	</h3>
	<p class=" mt-2 max-w-4xl p-14 text-center text-2xl text-base-100 md:p-5">
		SandBloX is a free-for-all space created to embrace a transformational approach to AIoT problem
		solving… an intersection of cultivated instinct and borderless creativity to build the next &
		best version of your new reality
	</p>
</section>

<section
	style="background-image: url(/defaultbg.png);"
	class="  w-full bg-cover bg-center bg-no-repeat py-16">
	<div class="m-auto flex max-w-6xl flex-col gap-2 md:flex-row">
		<div class="min-h-6 w-full md:w-1/3">
			{#if LottiePlayer}
				<LottiePlayer autoplay loop background="transparent" controls="{false}" src="{Sand}" />
			{/if}
		</div>
		<div class="min-h-6 w-full p-5 md:w-2/3 md:p-0">
			<h6 class=" mb-1.5 text-center font-normal text-secondary md:text-left">
				Revenue Maximization | Efficiency | Sustainability
			</h6>
			<h4 class=" text-center text-3xl font-bold md:text-left">
				Pick your SandBloX,<span class="text-info">for Outcomes…</span>
			</h4>
			<p class=" mt-3 text-center text-neutral/40 md:mt-7 md:text-left">
				AIoT vision -> solution | Failsafe AIoT product journey | Faster Time-to-Market | X-aaS
				orchestration | Industry X.0 | Net-Zero Enterprise | Sustainable Economy
			</p>
			<h4 class=" mt-12 w-full text-center text-2xl font-bold md:text-right md:text-3xl">
				<span class="text-info">…when</span> the internet of<br /><span class="text-info"
					>things get real !!</span>
			</h4>
		</div>
	</div>
</section>

<section
	style=" background-image: url({gradientbackground}) "
	class="w-full bg-primary bg-cover bg-bottom bg-no-repeat py-10">
	<h4 class="mb-16 w-full p-5 text-center text-4xl font-bold text-base-100 md:p-0 md:text-5xl">
		Pick Your SandBloX
	</h4>
	<img
		class="m-auto h-auto w-full max-w-6xl object-contain object-center px-5"
		src="{sandbloxinfo}"
		alt="Sandbloxinfo" />
	<div class="m-auto mt-10 flex h-auto max-w-6xl items-center justify-center gap-10 px-2">
		<GradientButton>Learn More</GradientButton>
	</div>
</section>
