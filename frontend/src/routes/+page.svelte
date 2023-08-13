<script>
import CarouselBG from '$lib/carouselbg.png';
import homegradient from '$lib/homegradient.png';
import Productsection from '$lib/components/Productsection.svelte';

import Homelottie from '$lib/homelottie.json';

import { onMount } from 'svelte';

let LottiePlayer;

onMount(async () => {
	const module = await import('@lottiefiles/svelte-lottie-player');
	LottiePlayer = module.LottiePlayer;
});
</script>

<section
	style="background-image: url(/hero.jpg);"
	class=" flex h-fit min-h-[calc(100vh-4rem)] w-full flex-col items-center justify-end bg-gray-700 bg-cover bg-center bg-no-repeat p-4 md:p-12">
	<h1 class="mb-14 text-center text-4xl text-base-100">
		Use our <span class="font-bold"> ‘Configure-and-Use AIoT’ </span> software blocks to build and
		deploy you <span class="font-bold">Edge-centric ecosystem</span> @ scale
	</h1>
	<div
		class=" mt-5 flex w-full items-center justify-center gap-1 text-center text-sm font-light text-base-100 md:w-3/5 md:gap-3 md:text-lg">
		<span class=" w-52 md:w-60">Blueprint Digital Journey from Innovation to Scale</span>
		<span>|</span>
		<span class=" w-52 md:w-60">Design & Configure AIoT at Edge</span>
		<span>|</span>
		<span class=" w-52 md:w-60">Deploy & Accelerate X-as-a-Service</span>
	</div>
</section>

<section
	style="background-image: url(/defaultbg.png);"
	class=" bg-base-100 bg-cover bg-top bg-no-repeat">
	<div
		class="m-auto flex w-full max-w-5xl items-center justify-center gap-3 px-3 py-20 md:gap-14 md:px-2 md:py-44">
		<div class=" w-1/3 bg-blend-difference">
			{#if LottiePlayer}
				<LottiePlayer
					autoplay
					loop
					background="transparent"
					controls="{false}"
					src="{Homelottie}" />
			{/if}
		</div>
		<div class=" w-2/3">
			<h3 class="text-3xl font-medium text-secondary md:text-4xl">
				Everyone believes their IoT problem is unique...
			</h3>
			<br />
			<h3 class="text-4xl font-bold text-info md:text-5xl">Everyone is right!</h3>
		</div>
	</div>
	<div>
		<p class=" m-auto w-2/3 pb-16 text-center text-sm text-info md:text-base">
			TinkerBloX curates pre -built assets & accelerators to your context… and helps you realize
			your digital transformation vision @ scale
		</p>
	</div>
</section>

<section
	style="background-image: url({homegradient});"
	class=" h-fit min-h-[400px] w-full bg-primary bg-cover bg-center bg-no-repeat px-3 py-16 md:px-10">
	<div class=" m-auto flex flex-col items-center md:max-w-7xl">
		<h3 class=" text-5xl font-bold text-base-100">Our Offerings</h3>
		<Productsection />
	</div>
</section>

<section
	style="background-image : url('{CarouselBG}')"
	class=" zw-full bg-center-left flex h-fit min-h-[calc(100vh-4rem)] flex-col items-center bg-cover bg-center bg-no-repeat">
	<h2 class=" mt-12 text-4xl font-bold text-primary">Stories we bring to Life</h2>
</section>
