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
	class="flex h-[calc(100vh-4rem)] min-h-fit w-full flex-col items-center justify-end bg-cover bg-center bg-no-repeat p-3 md:p-12">
	<h1 class="text-6xl font-bold text-base-100"><span class="text-secondary">Sand</span>BloX</h1>
	<h3 class="mt-16 text-3xl font-semibold text-base-100">
		Strategize | Prototype | Scale | Repeat
	</h3>
	<p class="mt-2 max-w-3xl text-center text-xl text-base-100">
		SandBloX is a free-for-all space created to embrace a transformational approach to AIoT problem
		solving… an intersection of cultivated instinct and borderless creativity to build the next &
		best version of your new reality
	</p>
</section>

<section
	style="background-image: url(/defaultbg.png);"
	class="  w-full bg-cover bg-center bg-no-repeat py-16">
	<div class="m-auto flex max-w-6xl gap-2">
		<div class="min-h-6 w-1/3">
			{#if LottiePlayer}
				<LottiePlayer autoplay loop background="transparent" controls="{false}" src="{Sand}" />
			{/if}
		</div>
		<div class="min-h-6 w-2/3">
			<h6 class="text-md mb-1.5 font-light text-secondary">
				Revenue Maximization | Efficiency | Sustainability
			</h6>
			<h4 class=" text-3xl font-bold">
				Pick your SandBloX,<span class="text-info">for Outcomes…</span>
			</h4>
			<p class=" mt-7 text-neutral/60">
				AIoT vision -> solution | Failsafe AIoT product journey | Faster Time-to-Market | X-aaS
				orchestration | Industry X.0 | Net-Zero Enterprise | Sustainable Economy
			</p>
			<h4 class=" mt-12 w-full text-right text-3xl font-bold">
				<span class="text-info">…when</span> the internet of<br /><span class="text-info"
					>things get real !!</span>
			</h4>
		</div>
	</div>
</section>

<section
	style=" background-image: url({gradientbackground}) "
	class="w-full bg-primary bg-cover bg-bottom bg-no-repeat py-10">
	<h4 class="mb-16 w-full text-center text-5xl font-bold text-base-100">Pick Your SandBloX</h4>
	<img
		class="m-auto h-auto w-full max-w-6xl object-contain object-center px-5"
		src="{sandbloxinfo}"
		alt="Sandbloxinfo" />
	<div class="m-auto mt-10 flex h-auto max-w-6xl items-center justify-center gap-10 px-2">
		<GradientButton>Learn More</GradientButton>
	</div>
</section>
