<style>
.red-text {
	color: #ed7d31;
}

.blue-text {
	color: #ffc000;
}

.green-text {
	color: #00b0f0;
}

.purple-text {
	color: #cc00cc;
}

.orange-text {
	color: #c00000;
}

.pink-text {
	color: #92d050;
}
</style>

<script>
import SmartUtilities from '$lib/smartutilities_hero.png';
import edgeCentric from '$lib/edgeCentric.png';
import gradientbackground from '$lib/gradient_background.png';
import GradientButton from '$lib/components/GradientButton.svelte';
import alwaysOnAssets from '$lib/alwaysOnAssets.png';
import utilityassetsaas from '$lib/utilityassets-aas.png';
import secureyen from '$lib/secureyen.png';
import smartGrids from '$lib/smartGrids.png';
import energySSC from '$lib/energySSC.png';
import energyAC from '$lib/energyAC.png';
import TheTinkerBloXUSP from '$lib/TheTinkerBloXUSP.svg';
import fuat1 from '$lib/fuat1.png';
import fuat2 from '$lib/fuat2.png';
import fuat3 from '$lib/fuat3.png';
import fuat4 from '$lib/fuat4.png';
import fuat5 from '$lib/fuat5.png';
import fs1 from '$lib/fs1.png';
import fs2 from '$lib/fs2.png';
import fs3 from '$lib/fs3.png';
import fs4 from '$lib/fs4.png';
import fs5 from '$lib/fs5.png';
import es1 from '$lib/es1.png';
import es2 from '$lib/es2.png';
import es3 from '$lib/es3.png';
import es4 from '$lib/es4.png';
import es5 from '$lib/es5.png';
import CarouselSS from '$lib/components/CarouselSS.svelte';
let selected = 'Sustainable';
function handleClick(newValue) {
	selected = newValue;
}

import { onMount, onDestroy, afterUpdate } from 'svelte';

let greetings = [
	{ text: 'Edge-Centric', colorClass: 'red-text' },
	{ text: 'Data-Secure', colorClass: 'blue-text' },
	{ text: '5G', colorClass: 'green-text' },
	{ text: 'Autonomous', colorClass: 'purple-text' },
	{ text: 'True Real-Time', colorClass: 'orange-text' },
	{ text: 'Sustainable', colorClass: 'pink-text' }
];
let index = 0;
let roller;

onMount(() => {
	roller = setInterval(() => {
		if (index === greetings.length - 1) index = 0;
		else index++;
	}, 1250);
});

onDestroy(() => {
	clearInterval(roller);
});

let colorIndicator = null;
let sections = [
	{ id: 'safe', text: 'Smart Utilities for you' },
	{ id: 'future', text: 'Future of Utilities' },
	{ id: 'tinker', text: 'The TinkerBloX USP' },
	{ id: 'stories', text: 'Our Stories' }
];

let activeSection = sections[0].id; // Initialize with the first section

onMount(() => {
	const updateActiveSection = () => {
		const scrollPosition = window.scrollY;
		for (const section of sections) {
			const element = document.getElementById(section.id);
			if (element) {
				const rect = element.getBoundingClientRect();
				if (rect.top <= 0 && rect.bottom >= 0) {
					activeSection = section.id;
				}
			}
		}
		updateColorIndicatorPosition();
	};

	window.addEventListener('scroll', updateActiveSection);

	updateActiveSection(); // Initial update

	onDestroy(() => {
		window.removeEventListener('scroll', updateActiveSection);
	});

	// Re-calculate color indicator position after updates (e.g., window resize)
	afterUpdate(() => {
		updateColorIndicatorPosition();
	});
});

function updateColorIndicatorPosition() {
	if (colorIndicator) {
		const activeIndex = sections.findIndex((section) => section.id === activeSection);
		if (activeIndex !== -1) {
			const totalSections = sections.length;
			const width = ((activeIndex + 1) / totalSections) * 100;
			colorIndicator.style.width = `${width}%`;
		}
	}
}
</script>

<section
	style="  background-image: url('{SmartUtilities}'); "
	class="relative z-30 flex h-fit min-h-[777px] w-full flex-col items-center justify-center bg-cover bg-center bg-no-repeat p-3 py-2 md:p-10">
	<div class=" flex w-full flex-col items-start gap-2 p-10 md:flex-row">
		<div class=" w-full md:ml-40 md:w-1/3">
			<h1 class="text-4xl font-bold text-base-100 md:text-8xl">Experience</h1>
			<div class="relative">
				<!-- Image -->
				<!-- svelte-ignore a11y-img-redundant-alt -->
				<img src="{edgeCentric}" alt="Image" class="w-full" />

				<!-- Text Carousel Container 1 -->
				<div
					class="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center bg-opacity-50 text-white opacity-100 transition-opacity duration-500"
					id="text-carousel-1">
					<!-- Text Content 1 -->
					<div class="text-center">
						{#key index}
							<h1
								class=" greeting ml-8 text-3xl font-bold italic text-secondary md:ml-14 md:text-6xl {greetings[
									index
								].colorClass}">
								{greetings[index].text}
							</h1>
						{/key}
					</div>
				</div>
			</div>
			<h1 class="text-4xl font-bold text-base-100 md:text-8xl">Smart Utilities</h1>

			<p class=" mt-20 max-w-3xl p-5 text-justify text-xl text-base-100 md:p-5 md:text-2xl">
				Build an always-on & one-click AIoT eco-system for your utility assets & operations
			</p>
		</div>
	</div>
</section>

<section
	style="background-image: url(/defaultbg.png);"
	class=" w-full bg-cover bg-center bg-no-repeat py-10">
	<div class="m-auto flex max-w-6xl flex-col items-center gap-2">
		<h4 class=" w-3/5 text-center text-2xl text-secondary md:text-4xl">
			Take the next step in your <span class=" font-bold text-info">smart utilities</span> journey…
			<span class="text-accent"> one BloX</span> @ a time !!
		</h4>

		<p class="mt-5 p-6 text-justify text-xl text-neutral/60 md:p-0 md:text-center md:text-2xl">
			The utility industry has experienced relative stability over the past few decades as even when
			technology transformed assets & operations, they all relied on traditional status quo when it
			comes to the utilities they consume. But times are changing, and we are on the cusp of
			witnessing a radical disruption in this space – the Energy Continuum ! <br /> <br /> The
			utilities eco-system is starting to experience changes at scale, in both the supply & demand
			sides – the undeniable proliferation of EVs is not just adding tremendous load on the network,
			but also creating millions of energy storage points that could potentially transform energy
			into a tradeable currency. IoT-izing of residential buildings, commercial properties & even
			the supply chain will inevitably lead to micro-grids and localized energy markets. The focus
			on sustainability will transform (finally !) the relationship between utilities & consumers to
			a symbiotic relationship of equals. It’s not a question of IF…but WHEN… and the answer is NOW
			!!<br /> <br />
			<span
				class=" m-auto w-fit bg-gradient-to-l from-secondary to-info bg-clip-text text-center font-medium text-info text-transparent">
				TinkerBloX provides you with the building blocks of the “software-defined energy network”
				for your smart utility future…
			</span>
		</p>
	</div>
</section>

<div
	class="min-h-4 sticky top-16 z-50 m-auto flex h-fit w-full max-w-5xl items-center justify-between gap-2 overflow-hidden rounded-full bg-[#B5B5B5] px-4 py-2 text-center text-sm text-white md:text-lg">
	{#each sections as section (section.id)}
		<a href="{'#' + section.id}" class="relative z-10">
			<span>{section.text}</span>
		</a>
	{/each}

	<div
		class="absolute z-0 -ml-4 h-full bg-gradient-to-b from-info to-secondary"
		bind:this="{colorIndicator}">
	</div>
</div>

<br />

<section
	id="safe"
	style=" background-image: url({gradientbackground}) "
	class="w-full bg-primary bg-cover bg-bottom bg-no-repeat py-10">
	<h4
		class="m-auto mb-10 w-full max-w-2xl p-5 text-center text-5xl text-base-100 md:p-0 md:text-6xl">
		SAFE Utilities for you
	</h4>
	<p class="m-auto w-full text-center text-3xl text-white">Click to read more</p>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		class=" min-h-4 rounded-fullpx-4 m-auto mt-7 flex h-fit w-full flex-wrap items-center justify-center gap-6 overflow-hidden py-2 text-center text-sm text-white md:text-lg">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<span
			on:click="{() => handleClick('Sustainable')}"
			class="{'relative z-10 w-[494px] cursor-pointer rounded-full border border-[#00BE2A] px-3 py-2   '} {selected ===
			'Sustainable'
				? 'bg-[#00BE2A] shadow-md shadow-[#00BE2A] '
				: ''}">Future of your utility assets with TBx</span>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<span
			on:click="{() => handleClick('Federated')}"
			class="relative z-10 w-[494px] cursor-pointer rounded-full border border-[#E76120] px-3 py-2 {selected ===
			'Federated'
				? 'bg-[#E76120] shadow-md shadow-[#E76120]'
				: ''}">Sustainability in the Utility World</span>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<span
			on:click="{() => handleClick('Efficient')}"
			class="relative z-10 w-[494px] cursor-pointer rounded-full border border-[#A1499C] px-3 py-2 {selected ===
			'Efficient'
				? 'bg-[#A1499C] shadow-md shadow-[#A1499C]'
				: ''}">Your win in the Energy Continuum</span>
	</div>

	{#if selected === 'Sustainable'}
		<div
			class=" min-h-4 m-auto mt-7 flex h-fit w-full max-w-7xl flex-wrap items-center justify-center gap-6 overflow-hidden py-2">
			<div class=" flex w-96 flex-col items-center gap-4 p-8">
				<img class=" w-32" src="{fuat1}" alt="" />
				<h5 class=" w-80 text-center text-2xl font-semibold text-white">
					Ensure near-100% utility of your assets
				</h5>
				<p class="w-80 text-center font-normal text-white">
					Realize a fully utilized & optimized asset capable of self monitoring 🡪 self healing
				</p>
			</div>

			<div class=" flex w-96 flex-col items-center gap-4 p-8">
				<img class=" w-32" src="{fuat2}" alt="" />
				<h5 class="w-80 text-center text-2xl font-semibold text-white">Flatten out the peaks</h5>
				<p class="w-80 text-center font-normal text-white">
					Leverage responsive (re)distribution of resources to balance the demand vs supply at every
					level of the network & improve asset utilization
				</p>
			</div>

			<div class=" flex w-96 flex-col items-center gap-4 p-8">
				<img class=" w-32" src="{fuat3}" alt="" />
				<h5 class="w-80 text-center text-2xl font-semibold text-white">
					Digitalize Autonomize your assets/infrastructure with AI@Edge
				</h5>
				<p class="w-80 text-center font-normal text-white">
					Equip your legacy assets with the power of distributed compute & digital twins for
					redundancy across your network
				</p>
			</div>

			<div class=" flex w-96 flex-col items-center gap-4 p-8">
				<img class=" w-32" src="{fuat4}" alt="" />
				<h5 class="w-80 text-center text-2xl font-semibold text-white">
					Utility-as-a-Service for EV charging infrastructure
				</h5>
				<p class="w-80 text-center font-normal text-white">
					Build X-a-a-S into your assets and thereby your charging infrastructure to transact
					seamlessly at every node
				</p>
			</div>

			<div class=" flex w-96 flex-col items-center gap-4 p-8">
				<img class=" w-32" src="{fuat5}" alt="" />
				<h5 class="w-80 text-center text-2xl font-semibold text-white">
					Secure your utility ecosystem
				</h5>
				<p class="w-80 text-center font-normal text-white">
					With assets gaining ‘identity’ in transactional micro-networks, secure yourself at every
					endpoint
				</p>
			</div>

			<a href="/connect">
				<div class=" bold flex w-96 flex-col items-center gap-4 p-8 text-3xl text-white underline">
					Learn More...
				</div>
			</a>
		</div>
	{/if}
	{#if selected === 'Federated'}
		<div
			class=" min-h-4 m-auto mt-7 flex h-fit w-full max-w-7xl flex-wrap items-center justify-center gap-6 overflow-hidden py-2">
			<div class=" flex w-96 flex-col items-center gap-4 p-8">
				<img class=" w-32" src="{fs1}" alt="" />
				<h5 class=" w-80 text-center text-2xl font-semibold text-white">
					Every building as a federated eco-system
				</h5>
				<p class="w-80 text-center font-normal text-white">
					Realize symbiosis & circularity across all systems & processes of standalone / networked
					buildings
				</p>
			</div>

			<div class=" flex w-96 flex-col items-center gap-4 p-8">
				<img class=" w-32" src="{fs2}" alt="" />
				<h5 class=" w-80 text-center text-2xl font-semibold text-white">
					Federated control over remote O&G sites
				</h5>
				<p class="w-80 text-center font-normal text-white">
					Resilient yet fungible assets & systems boosted by distributed compute & supervised
					control
				</p>
			</div>

			<div class=" flex w-96 flex-col items-center gap-4 p-8">
				<img class=" w-32" src="{fs3}" alt="" />
				<h5 class=" w-80 text-center text-2xl font-semibold text-white">
					Move towards federated assets process factories
				</h5>
				<p class="w-80 text-center font-normal text-white">
					Balance autonomy with federation for a truly digital factory at your fingertips
				</p>
			</div>

			<div class=" flex w-96 flex-col items-center gap-4 p-8">
				<img class=" w-32" src="{fs4}" alt="" />
				<h5 class=" w-80 text-center text-2xl font-semibold text-white">
					Farming-as-a-Service [FaaS] is now real with AIoT based agritech
				</h5>
				<p class="w-80 text-center font-normal text-white">
					Reimagine farming with digital disruptions across the agricultural value-chain
				</p>
			</div>

			<div class=" flex w-96 flex-col items-center gap-4 p-8">
				<img class=" w-32" src="{fs5}" alt="" />
				<h5 class=" w-80 text-center text-2xl font-semibold text-white">
					Federation as the key to resilient & sustainable global supply chain
				</h5>
				<p class="w-80 text-center font-normal text-white">
					Multi-modal transport & multi-network transactions unified to form a circular ecosystem
				</p>
			</div>

			<a href="/connect">
				<div class=" bold flex w-96 flex-col items-center gap-4 p-8 text-3xl text-white underline">
					Learn More...
				</div>
			</a>
		</div>
	{/if}
	{#if selected === 'Efficient'}
		<div
			class=" min-h-4 m-auto mt-7 flex h-fit w-full max-w-7xl flex-wrap items-center justify-center gap-6 overflow-hidden py-2">
			<div class=" flex w-96 flex-col items-center gap-4 p-8">
				<img class=" w-32" src="{es1}" alt="" />
				<h5 class=" w-80 text-center text-2xl font-semibold text-white">
					Unlock inefficiencies in your building ecosystems
				</h5>
				<p class="w-80 text-center font-normal text-white">
					Target margin expansion & improve free-cash-flow through automation & green-tech
				</p>
			</div>

			<div class=" flex w-96 flex-col items-center gap-4 p-8">
				<img class=" w-32" src="{es2}" alt="" />
				<h5 class=" w-80 text-center text-2xl font-semibold text-white">
					A well-oiled refinery – no pun intended !
				</h5>
				<p class="w-80 text-center font-normal text-white">
					Maximize the value of your O&G resources be it onshore, offshore or unconventionals
				</p>
			</div>

			<div class=" flex w-96 flex-col items-center gap-4 p-8">
				<img class=" w-32" src="{es3}" alt="" />
				<h5 class=" w-80 text-center text-2xl font-semibold text-white">
					Enhance your factory infrastructure with AIoT
				</h5>
				<p class="w-80 text-center font-normal text-white">
					Target transparency & control of your factory utilities & ageing infra through intelligent
					networks
				</p>
			</div>

			<div class=" flex w-96 flex-col items-center gap-4 p-8">
				<img class=" w-32" src="{es4}" alt="" />
				<h5 class=" w-80 text-center text-2xl font-semibold text-white">
					360o value generation with digital greenhouses
				</h5>
				<p class="w-80 text-center font-normal text-white">
					From maximizing yield to optimizing resources (esp. water & energy), AIoT enhances farm
					ops
				</p>
			</div>

			<div class=" flex w-96 flex-col items-center gap-4 p-8">
				<img class=" w-32" src="{es5}" alt="" />
				<h5 class=" w-80 text-center text-2xl font-semibold text-white">
					Autonomous drones for perimeter security
				</h5>
				<p class="w-80 text-center font-normal text-white">
					Engage drone fleets for uber-efficient safety & security management of your spaces
				</p>
			</div>

			<a href="/connect">
				<div class=" bold flex w-96 flex-col items-center gap-4 p-8 text-3xl text-white underline">
					Learn More...
				</div>
			</a>
		</div>
	{/if}
</section>

<section
	id="future"
	style="background-image: url(/defaultbg.png);"
	class="  bg-cover bg-center bg-no-repeat py-10">
	<h4 class=" m-auto w-3/5 text-center text-4xl text-primary">Future of Spaces</h4>
	<div class=" m-auto flex w-full max-w-5xl flex-wrap">
		<div
			class=" min-h-4 top-16 m-auto mt-7 flex h-fit w-fit flex-wrap items-center justify-center gap-6 overflow-hidden px-4 py-2">
			<div class=" flex h-full w-64 flex-col items-center bg-[#E9E9E9]">
				<h5
					class=" flex h-10 w-full items-center justify-center bg-gradient-to-r from-info to-secondary text-center text-lg text-white">
					Always On Assets
				</h5>
				<img class="  w-64" src="{alwaysOnAssets}" alt="" />
				<p class=" p-2 text-center text-black/40">
					Ensure your utility assets are “always on” with our AI@Edge monitoring system
				</p>
			</div>
		</div>
		<div
			class=" min-h-4 top-16 m-auto mt-7 flex h-fit w-fit flex-wrap items-center justify-center gap-6 overflow-hidden px-4 py-2">
			<div class=" flex h-full w-64 flex-col items-center bg-[#E9E9E9]">
				<h5
					class=" flex h-10 w-full items-center justify-center bg-gradient-to-r from-info to-secondary text-center text-lg text-white">
					Utility assets-as-a-service
				</h5>
				<img class="  w-64" src="{utilityassetsaas}" alt="" />
				<p class=" p-2 text-center text-black/40">
					Transform your utility component business into an on-the-go service experience
				</p>
			</div>
		</div>
		<div
			class=" min-h-4 top-16 m-auto mt-7 flex h-fit w-fit flex-wrap items-center justify-center gap-6 overflow-hidden px-4 py-2">
			<div class=" flex h-full w-64 flex-col items-center bg-[#E9E9E9]">
				<h5
					class=" flex h-10 w-full items-center justify-center bg-gradient-to-r from-info to-secondary text-center text-lg text-white">
					Secure Your Energy Network
				</h5>
				<img class="  w-64" src="{secureyen}" alt="" />
				<p class=" p-2 text-center text-black/40">
					Protect your utility ecosystem from all intrusions – foreign & domestic
				</p>
			</div>
		</div>
		<div
			class=" min-h-4 top-16 m-auto mt-7 flex h-fit w-fit flex-wrap items-center justify-center gap-6 overflow-hidden px-4 py-2">
			<div class=" flex h-full w-64 flex-col items-center bg-[#E9E9E9]">
				<h5
					class=" flex h-10 w-full items-center justify-center bg-gradient-to-r from-info to-secondary text-center text-lg text-white">
					Smart Grids
				</h5>
				<img class="  w-64" src="{smartGrids}" alt="" />
				<p class=" p-2 text-center text-black/40">
					Bring life to smart grids at micro & macro level with Edge AI & DLT
				</p>
			</div>
		</div>
		<div
			class=" min-h-4 top-16 m-auto mt-7 flex h-fit w-fit flex-wrap items-center justify-center gap-6 overflow-hidden px-4 py-2">
			<div class=" flex h-full w-64 flex-col items-center bg-[#E9E9E9]">
				<h5
					class=" flex h-10 w-full items-center justify-center bg-gradient-to-r from-info to-secondary text-center text-lg text-white">
					Energy Smart Supply Chain
				</h5>
				<img class="  w-64" src="{energySSC}" alt="" />
				<p class=" p-2 text-center text-black/40">
					Manage the liquidity of your energy-as-an-asset across your supply chain
				</p>
			</div>
		</div>
		<div
			class=" min-h-4 top-16 m-auto mt-7 flex h-fit w-fit flex-wrap items-center justify-center gap-6 overflow-hidden px-4 py-2">
			<div class=" flex h-full w-64 flex-col items-center bg-[#E9E9E9]">
				<h5
					class=" flex h-10 w-full items-center justify-center bg-gradient-to-r from-info to-secondary text-center text-lg text-white">
					Energy Aa A Currency
				</h5>
				<img class="  w-64" src="{energyAC}" alt="" />
				<p class=" p-2 text-center text-black/40">
					Enable transaction of energy between your smart assets on the move
				</p>
			</div>
		</div>
	</div>
</section>

<section
	id="tinker"
	style="background-image: url({gradientbackground})"
	class="min-h-16 w-full bg-primary bg-cover bg-bottom bg-no-repeat py-60">
	<div class="m-auto max-w-4xl">
		<div style="position: relative; text-align: center;">
			<img class=" object-contain object-center" src="{TheTinkerBloXUSP}" alt="" />
		</div>
	</div>
</section>

<section id="stories">
	<CarouselSS />
</section>

<section
	style=" background-image: url({gradientbackground}) "
	class="min-h-[497px] w-full bg-primary bg-cover bg-bottom bg-no-repeat py-32">
	<h4
		class="m-auto mb-16 w-full max-w-2xl p-5 text-center text-5xl font-medium text-base-100 md:p-0 md:text-6xl">
		Be part of our  Smart Utility huddle
	</h4>

	<div class="m-auto mt-10 flex h-auto max-w-6xl items-center justify-center gap-10 px-2">
		<GradientButton>JOIN OUR ALLIANCE</GradientButton>
	</div>
</section>
