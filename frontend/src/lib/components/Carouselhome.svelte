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
	{ image: IMAGE1, head: 'Headining1', text: 'text1' },
	{ image: IMAGE2, head: 'Headining2', text: 'text2' },
	{ image: IMAGE3, head: 'Headining3', text: 'text3' },
	{ image: IMAGE4, head: 'Headining4', text: 'text4' },
	{ image: IMAGE5, head: 'Headining5', text: 'text5' },
	{ image: IMAGE6, head: 'Headining6', text: 'text6' },
	{ image: IMAGE7, head: 'Headining7', text: 'text7' },
	{ image: IMAGE8, head: 'Headining8', text: 'text8' },
	{ image: IMAGE9, head: 'Headining9', text: 'text9' },
	{ image: IMAGE10, head: 'Headining10', text: 'text10' }
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

<div class=" flex w-full flex-col items-center align-middle">
	<div class="absolute z-0 h-[100%] w-[70vw] rounded-md bg-gray-300"></div>
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
						class="h-auto max-h-[650px] w-[70vw]"
						src="{carousel.image}"
						alt="Image{carousel.head}" />
				</SplideSlide>
			{/each}
		</Splide>
	</div>

	<div class="splide__arrows">
		<button class="splide__arrow splide__arrow--prev">Prev</button>
		<button class="splide__arrow splide__arrow--next">Next</button>
	</div>

	<div class=" relative w-[70vw]">
		{#each carouselImages as carousel, i}
			{#if i === index}
				<div class="flex flex-col justify-center p-5">
					<h1 class="text-4xl font-bold">{carousel.head}</h1>
					<p class="text-xl">{carousel.text}</p>
				</div>
			{/if}
		{/each}
	</div>
</div>
