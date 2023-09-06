<script>
import { Splide, SplideSlide } from '@splidejs/svelte-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

let index = 0;

import IMAGE1 from '$lib/carouselSS/IMAGE1.png';

import IMAGE2 from '$lib/carouselSS/IMAGE2.png';

import IMAGE3 from '$lib/carouselSS/IMAGE3.png';

import IMAGE4 from '$lib/carouselSS/IMAGE4.png';

import IMAGE5 from '$lib/carouselSS/IMAGE5.png';

import IMAGE6 from '$lib/carouselSS/IMAGE6.png';

const carouselImages = [
	{
		image: IMAGE1,
		head: 'Clients: 3PL players, Industrial warehouses…',
		text: 'Storage spaces within global supply chains are black boxes for most stakeholders. TinkerBloX provides transparency & control into the location & health of your high-value assets'
	},
	{
		image: IMAGE2,
		head: '',
		text: 'Every future-focused space needs to be cognizant of moving to net-zero TinkerBloX charted out a roadmap of grounded but scalable opportunities for moving towards lower ecological footprint for multiple buildings'
	},
	{
		image: IMAGE3,
		head: 'Client: O&G refinery',
		text: 'TinkerBloX works with you to define, pilot, scale & optimize your autonomous & sustainable refinery operations in an edge-centric ecosystem '
	},
	{
		image: IMAGE4,
		head: 'Clients: North American CBD farms',
		text: 'TinkerBloX’s deployment of a federated distributed compute system enables end-to-end farm management with higher yield while maximizing resources'
	},
	{
		image: IMAGE5,
		head: 'Clients: American smart community',
		text: 'Smart communities are a living breathing eco-system that caters to the needs of its occupants while taking care of itself. TinkerBloX powers the nervous system of such neighbourhoods through our self-aware product blocks'
	},
	{
		image: IMAGE6,
		head: 'Clients: Warehouses, Industrial complex…',
		text: 'Monitor-Control-Manage your assets across public/private 5G networks with the power of network-edge'
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
