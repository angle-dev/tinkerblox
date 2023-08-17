<script>
import CarouselBG from '$lib/carouselbg.png';
import homegradient from '$lib/homegradient.png';
import Productsection from '$lib/components/Productsection.svelte';
import Carouselhome from '../lib/components/Carouselhome.svelte';
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
	class=" flex h-fit min-h-[calc(100vh-4rem)] w-full flex-col items-center justify-end bg-gray-700 bg-cover bg-center bg-no-repeat p-5 md:p-12">
	<h1 class=" mb-28 text-center text-4xl font-bold text-base-100 md:text-7xl">EDGE IS TOMORROW</h1>
	<h2 class="mb-14 p-5 text-center text-2xl text-base-100 md:p-0 md:text-4xl">
		Use our <span class="font-bold"> ‘Configure-and-Use AIoT’ software blocks </span>to build and<br />
		deploy your <span class="font-bold">Edge-centric ecosystem</span> @ scale
	</h2>
	<div
		class=" mt-5 flex w-full items-center justify-center gap-1 p-5 text-center text-[20px] font-normal leading-none text-base-100 md:w-3/5 md:gap-3 md:p-0 md:text-lg">
		<span class=" w-52 md:w-60">Blueprint Digital Journey from Innovation to Scale</span>
		<span>|</span>
		<span class=" w-52 md:w-60">Design & Configure<br />AIoT at Edge</span>
		<span>|</span>
		<span class=" w-52 md:w-60">Deploy & Accelerate<br /> X-as-a-Service</span>
	</div>
</section>

<section
	style="background-image: url(/defaultbg.png);"
	class=" bg-base-100 bg-cover bg-top bg-no-repeat">
	<div
		class="py-35 m-auto flex w-full max-w-5xl flex-col items-center justify-center gap-3 px-3 md:flex-row-reverse md:gap-14 md:px-2 md:py-44">
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
		<div class=" w-full p-5 text-center md:w-2/3 md:p-0">
			<h3 class="text-3xl font-normal text-secondary md:text-4xl">
				Everyone believes their IoT problem is unique...
			</h3>
			<br />
			<h3 class="text-3xl font-bold text-info md:text-5xl">Everyone is right!</h3>
		</div>
	</div>
	<div>
		<p
			class=" m-auto w-fit bg-gradient-to-l from-secondary to-info bg-clip-text p-5 pb-16 text-center text-lg font-medium text-info text-transparent md:w-2/3 md:text-base">
			TinkerBloX curates pre-built assets & accelerators to your context…<br /> and helps you realize
			your digital transformation vision @ scale
		</p>
	</div>
</section>

<section
	style="background-image: url({homegradient});"
	class=" h-fit min-h-[400px] w-full bg-primary bg-cover bg-center bg-no-repeat px-3 py-16 md:px-10">
	<div class=" m-auto flex flex-col items-center md:max-w-7xl">
		<h3 class=" text-3xl font-bold text-base-100 md:text-5xl">Our Offerings</h3>
		<Productsection />
	</div>
</section>

<section
	style="background-image : url('{CarouselBG}')"
	class=" zw-full bg-center-left flex h-fit flex-col items-center overflow-hidden bg-cover bg-center bg-no-repeat py-16">
	<h2 class=" mt-12 text-3xl font-normal text-primary md:text-6xl">Stories we bring to Life</h2>
	<Carouselhome />
</section>
