<style>
.hehehoho {
	clip-path: polygon(
		53.451% 10.187%,
		46.549% 10.187%,
		46.549% 10.187%,
		41.263% 9.958%,
		36.085% 9.536%,
		31.027% 8.927%,
		26.1% 8.138%,
		21.318% 7.176%,
		16.692% 6.047%,
		12.235% 4.758%,
		7.96% 3.316%,
		3.877% 1.728%,
		0% 0%,
		0% 100%,
		0% 100%,
		3.877% 98.272%,
		7.959% 96.684%,
		12.235% 95.242%,
		16.692% 93.953%,
		21.318% 92.824%,
		26.1% 91.862%,
		31.026% 91.073%,
		36.085% 90.464%,
		41.263% 90.042%,
		46.549% 89.813%,
		53.451% 89.813%,
		53.451% 89.813%,
		58.737% 90.042%,
		63.915% 90.464%,
		68.973% 91.073%,
		73.9% 91.862%,
		78.682% 92.824%,
		83.308% 93.953%,
		87.765% 95.242%,
		92.04% 96.684%,
		96.123% 98.272%,
		100% 100%,
		100% 0%,
		100% 0%,
		96.123% 1.728%,
		92.041% 3.316%,
		87.765% 4.758%,
		83.308% 6.047%,
		78.682% 7.176%,
		73.9% 8.138%,
		68.974% 8.927%,
		63.915% 9.536%,
		58.737% 9.958%,
		53.451% 10.187%
	);
}
</style>

<script>
import { Splide, SplideSlide } from '@splidejs/svelte-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

let index = 0;

import IMAGE1 from '$lib/carousel/IMAGE1.jpeg';

import IMAGE2 from '$lib/carousel/IMAGE2.jpeg';

import IMAGE3 from '$lib/carousel/IMAGE3.jpeg';

import IMAGE4 from '$lib/carousel/IMAGE4.jpeg';

import IMAGE5 from '$lib/carousel/IMAGE5.jpeg';

import IMAGE6 from '$lib/carousel/IMAGE6.jpeg';

import IMAGE7 from '$lib/carousel/IMAGE7.jpeg';

import IMAGE8 from '$lib/carousel/IMAGE8.jpeg';

import IMAGE9 from '$lib/carousel/IMAGE9.jpeg';

import IMAGE10 from '$lib/carousel/IMAGE10.jpeg';

const carouselImages = [
	{
		image: IMAGE1,
		head: 'Remote Asset & Site Management',
		text: 'Oil & gas remote asset monitoring & incident management. '
	},
	{
		image: IMAGE2,
		head: 'Experience the future of Community Living ',
		text: 'Sustainable neighbourhoods with a full-fledged Digital Experience '
	},
	{
		image: IMAGE3,
		head: 'The future of Devices is User Experience',
		text: 'As Devices turn into ecosystems, users buy into the experience delivered at their fingertips '
	},
	{
		image: IMAGE4,
		head: 'Changing Farming into a precision economy',
		text: 'Harnessing the best of nature with the smartest technologies for your greenhouse'
	},
	{
		image: IMAGE5,
		head: 'Deploying Industry X.O Ensuring 360 Degree Value',
		text: 'Design to implementation of industry X.O roadmap curated to your specific environment'
	},
	{
		image: IMAGE6,
		head: 'Unleashing the Hidden Potential of your Smart Utilities',
		text: 'From an effective lever for cost optimization to the backbone of sustainable smart spaces'
	},

	{
		image: IMAGE7,
		head: 'Predictive Manufacturing',
		text: 'No Unplanned Downtimes in high speed manufacturing.... Advanced Predictive Maintenance resulting in cost saving & enhance RUL'
	},
	{
		image: IMAGE8,
		head: 'Device Real-Time Precision sharing of Work-Loads',
		text: 'Device interactions to autonomously execute actions'
	},
	{
		image: IMAGE9,
		head: 'AgriFood Net Zero',
		text: 'Measure & manage emission to track Net-Zero outcomes for food production '
	},
	{
		image: IMAGE10,
		head: 'Autonomous Ambient Spaces',
		text: 'Sustain product sensitive environments via autonomous command and control'
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

<div class=" mt-5 flex w-full flex-col items-center pb-[200px] align-middle">
	<div class="absolute z-0 h-[300px] w-[calc(30vw+1rem)] bg-[#F0F0F0] shadow-md md:h-[700px]"></div>
	<div class=" hehehoho relative z-10 mt-4">
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
						class="h-auto max-h-[650px] w-[30vw] object-cover"
						src="{carousel.image}"
						alt="Image{carousel.head}" />
				</SplideSlide>
			{/each}
		</Splide>
	</div>

	<div class=" relative h-64 w-[30vw] md:h-44">
		{#each carouselImages as carousel, i}
			{#if i === index}
				<div class="flex flex-col justify-center p-5">
					<h1 class=" py-10 text-2xl font-normal text-info md:text-4xl">{carousel.head}</h1>
					<p class="text-base text-neutral/40 md:text-2xl">{carousel.text}</p>
				</div>
			{/if}
		{/each}
	</div>
</div>
