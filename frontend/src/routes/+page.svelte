<script>
import CarouselBG from '$lib/carouselbg.png';
import homegradient from '$lib/homegradient.png';
import Productsection from '$lib/components/Productsection.svelte';
import Carouselhome from '../lib/components/Carouselhome.svelte';
import Homelottie from '$lib/homelottie.json';
import HeroVid from '$lib/heroVid.mp4';
import HeroVidMob from '$lib/heroVidMob.mp4';

import { onMount } from 'svelte';

let LottiePlayer;

onMount(async () => {
	const module = await import('@lottiefiles/svelte-lottie-player');
	LottiePlayer = module.LottiePlayer;
});
</script>

<section
	class=" relative z-10 flex h-fit min-h-[calc(100vh-4rem)] w-full flex-col items-center justify-end p-5 md:p-12">
	<div
		class=" absolute top-0 z-0 flex h-full w-full flex-col items-center justify-end bg-cover bg-center bg-no-repeat">
		<!-- <video
			loop
			autoplay
			muted
			volume
			class="h-full w-full object-cover"
			src="{window.innerWidth <= 768 ? HeroVidMob : HeroVid}"></video> -->
		<video loop autoplay muted volume class="h-full w-full object-cover" src="{HeroVid}"></video>
	</div>

	<h2 class=" relative mb-14 p-5 text-center text-2xl text-base-100 md:p-0 md:text-4xl">
		Use our <span class="font-bold"> ‘Configure-and-Use AIoT’ software blocks </span>to build and<br />
		deploy your <span class="font-bold">Edge-centric ecosystem</span> @ scale
	</h2>
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
		<div class=" w-full p-5 text-center md:w-2/3 md:p-0 md:text-left">
			<h3 class="text-3xl font-normal text-secondary md:text-5xl">
				Everyone believes their IoT problem is unique...
			</h3>
			<br />
			<h3 class="text-3xl font-bold text-info md:text-5xl">EVERYONE IS RIGHT!</h3>
		</div>
	</div>
	<div>
		<p
			class=" m-auto w-fit bg-gradient-to-l from-secondary to-info bg-clip-text p-5 pb-5 text-center text-lg font-medium text-info text-transparent md:w-2/3 md:pb-16 md:text-2xl">
			TinkerBloX curates pre-built assets & accelerators to your context…<br /> and helps you realize
			your digital transformation vision @ scale
		</p>
	</div>
	<div
		class=" m-auto mb-10 flex w-full flex-col items-center justify-center gap-1 p-5 text-center text-lg font-bold leading-none text-neutral/40 md:flex-row md:gap-3 md:p-0 md:text-[20px] md:text-lg">
		<span class=" pb-5 md:pb-0">Blueprint Digital Journey<br /> from Innovation to Scale </span>
		<span class=" hidden md:block">| </span>
		<span class=" pb-5 md:pb-0">Design & Configure<br />AIoT at Edge </span>
		<span class=" hidden md:block">| </span>
		<span>Deploy & Accelerate<br /> X-as-a-Service</span>
	</div>
</section>

<section
	style="background-image: url({homegradient});"
	class=" h-fit min-h-[400px] w-full bg-primary bg-cover bg-center bg-no-repeat px-3 py-16 md:px-10">
	<div class=" m-auto flex flex-col items-center md:max-w-7xl">
		<h3 class=" text-3xl font-normal text-base-100 md:text-6xl">Our Offerings</h3>
		<Productsection />
	</div>
</section>

<section
	style="background-image : url('{CarouselBG}')"
	class=" zw-full bg-center-left flex h-fit flex-col items-center overflow-hidden bg-cover bg-center bg-no-repeat py-16">
	<h2 class=" mt-12 text-3xl font-normal text-primary md:text-6xl">Stories we bring to Life</h2>
	<Carouselhome />
</section>
