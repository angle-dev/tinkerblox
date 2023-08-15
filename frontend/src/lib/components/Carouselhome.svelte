<script>
import { Splide, SplideSlide } from '@splidejs/svelte-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

import IMAGE1 from '$lib/carousel/IMAGE1.jpg';

import IMAGE2 from '$lib/carousel/IMAGE2.jpg';

import IMAGE3 from '$lib/carousel/IMAGE3.jpg';

import IMAGE4 from '$lib/carousel/IMAGE4.jpg';

import IMAGE5 from '$lib/carousel/IMAGE5.jpg';

import IMAGE6 from '$lib/carousel/IMAGE6.jpg';

import IMAGE7 from '$lib/carousel/IMAGE7.jpg';

import IMAGE8 from '$lib/carousel/IMAGE8.jpg';

import IMAGE9 from '$lib/carousel/IMAGE9.jpg';

import IMAGE10 from '$lib/carousel/IMAGE10.jpg';

const carouselImages = [
	IMAGE1,
	IMAGE2,
	IMAGE3,
	IMAGE4,
	IMAGE5,
	IMAGE6,
	IMAGE7,
	IMAGE8,
	IMAGE9,
	IMAGE10
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

<div class=" mt-4">
	<Splide
		options="{options}"
		on:mounted="{(e) => console.log(e.detail.splide.length)}"
		on:move="{(e) => console.log('move to', e.detail.index)}"
		aria-labelledby="basic-example-heading">
		{#each carouselImages as image}
			<SplideSlide>
				<img class="h-auto max-h-[650px] w-[100%] max-w-[80vw]" src="{image}" alt="Image{image}" />
			</SplideSlide>
		{/each}
	</Splide>
</div>
