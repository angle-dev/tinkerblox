<script>
import { Splide, SplideSlide } from '@splidejs/svelte-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

let index = 0;

import IMAGE1 from '$lib/carouselSU/IMAGE1.png';

import IMAGE2 from '$lib/carouselSU/IMAGE2.png';

import IMAGE3 from '$lib/carouselSU/IMAGE3.png';

import IMAGE4 from '$lib/carouselSU/IMAGE4.png';

import IMAGE5 from '$lib/carouselSU/IMAGE5.png';

const carouselImages = [
	{
		image: IMAGE1,
		head: '',
		text: 'Every utility site approaches sustainability differently – as it should… TinkerBloX curated realistic but visionary roadmaps for multiple utility spaces, and partnered through the road to achieve targeted outcomes'
	},
	{
		image: IMAGE2,
		head: 'Clients: Commercial Buildings',
		text: 'TinkerBloX helps asset manufacturers & utility site supervisors monitor their machines real-time 🡪 predictive 🡪 prescriptive to ensure peak performance & zero unplanned downtime'
	},
	{
		image: IMAGE3,
		head: 'Clients: Energy Meter OEM',
		text: 'TinkerBloX partnered with an energy meter manufacturer to inject AI into the meters and offer energy monitoring & sourcing as a service to its customers'
	},
	{
		image: IMAGE4,
		head: 'Clients: 3PL player',
		text: 'Logistics players can now measure the real-time ecological footprint of their operations across the supply chain & take necessary actions to mitigate'
	},
	{
		image: IMAGE5,
		head: 'Clients: Transformer OEM',
		text: 'TinkerBloX works with utility asset OEMs & site owners to build agile digital twins leveraging Edge AI ensuring optimized operations'
	}
];

const options = {
	type: 'loop',
	gap: '1rem',
	padding: '1rem',
	focus: 'center',
	pagination: false,
	autoplay: true,
	interval: 2000,
	autoWidth: true,
	width: '100%'
};
</script>

<div
	class=" mt-5 flex w-full flex-col items-center bg-cover bg-center bg-no-repeat pb-[200px] align-middle"
	style="background-image: url(/defaultbg.png);">
	<h2 class=" mt-12 text-3xl font-normal text-primary md:pb-14 md:text-6xl">
		Stories we bring to Life
	</h2>
	<div class="absolute z-0 h-[450px] w-[80vw] md:h-[750px]"></div>
	<div class=" relative z-10 mt-4">
		<Splide
			on:mounted="{(e) => {
				index = e.detail.splide.index;
				console.log(index);
			}}"
			on:move="{(e) => {
				index = e.detail.splide.index;
				console.log(index);
			}}"
			options="{options}"
			aria-labelledby="basic-example-heading">
			{#each carouselImages as carousel}
				<SplideSlide>
					<img
						class="h-auto max-h-[650px] w-[80vw] object-contain"
						src="{carousel.image}"
						alt="Image{carousel.head}" />
				</SplideSlide>
			{/each}
		</Splide>
	</div>

	<div class=" relative h-64 w-60 md:h-44 md:w-[30vw]">
		{#each carouselImages as carousel, i}
			{#if i === index}
				<div class="flex flex-col justify-center p-5">
					<h6 class=" text-center text-base text-neutral/40 md:text-2xl">{carousel.text}</h6>
					<p
						class=" bg-gradient-to-l from-secondary to-info bg-clip-text py-2 text-center text-base font-normal text-info text-transparent md:py-10 md:text-2xl">
						{carousel.head}
					</p>
				</div>
			{/if}
		{/each}
	</div>
</div>
