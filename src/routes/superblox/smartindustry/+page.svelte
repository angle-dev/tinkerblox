<style>
.red-text {
	color: #ed7d31;
}

.blue-text {
	color: #ffb800;
}

.green-text {
	color: #01a4df;
}

.purple-text {
	color: #cc00cc;
}

.orange-text {
	color: #c00000;
}

.pink-text {
	color: #00cf2e;
}
</style>

<script>
import SmartUtilities from '$lib/smartutilities_hero.png';
import edgeCentric from '$lib/edgeCentric.png';
import gradientbackground from '$lib/gradient_background.png';
import GradientButton from '$lib/components/GradientButton.svelte';
import GNF from '$lib/5GNF.png';
import edgefactory from '$lib/edgefactory.png';
import XaaS from '$lib/XaaS.png';
import cobots from '$lib/cobots.png';
import digitalTwins from '$lib/digitalTwins.png';
import netZero from '$lib/netZero.png';
import TheTinkerBloXUSP from '$lib/TheTinkerBloXUSP.svg';
import sX01 from '$lib/sX.01.png';
import sX02 from '$lib/sX.02.png';
import sX03 from '$lib/sX.03.png';
import sX04 from '$lib/sX.04.png';
import sX05 from '$lib/sX.05.png';
import bif1 from '$lib/bif1.png';
import bif2 from '$lib/bif2.png';
import bif3 from '$lib/bif3.png';
import bif4 from '$lib/bif4.png';
import bif5 from '$lib/bif5.png';
import CarouselSI from '$lib/components/CarouselSI.svelte';
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
	{ id: 'safe', text: 'Industry X.0 for you' },
	{ id: 'future', text: 'Future of Industry' },
	{ id: 'tinker', text: 'The TinkerBloX USP' },
	{ id: 'stories', text: 'Our Stories' }
];

let activeSection = sections[0].id; // Initialize with the first section

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
			<h1 class="text-4xl font-bold text-base-100 md:text-8xl">Smart Industry</h1>

			<p class=" mt-20 max-w-3xl p-5 text-justify text-xl text-base-100 md:p-5 md:text-2xl">
				Build a self-sufficient & self-aware AIoT eco-system within your factory site
			</p>
		</div>
	</div>
</section>

<section
	style="background-image: url(/defaultbg.png);"
	class=" w-full bg-cover bg-center bg-no-repeat py-20">
	<div class="m-auto flex max-w-6xl flex-col items-center gap-2">
		<h4 class=" w-3/5 text-center text-2xl text-secondary md:text-4xl">
			Take the next step in your <span class=" font-bold text-info">smart industry</span> journey…
			<span class="text-accent"> one BloX</span> @ a time !!
		</h4>

		<p class="mt-5 p-6 text-justify text-xl text-neutral/60 md:p-0 md:text-center md:text-2xl">
			he turn of the decade has posed numerous challenges to the manufacturing industry; be it the
			service-industry-inspired expectations set by a uber-riding netflix-binging digital savvy
			customer or the competitive pressures compounded by the    ever-growing geo-political turmoil
			or even an enhanced global consciousness on the need for sustainable measures in all acts of
			man… <br /> <br /> Thankfully, we’re also at an epoch where game-changing digital technologies
			– IoT, affordable distributed compute, cognitive AI, mature distributed ledger technology,
			etc. – make compelling arguments to embrace a smarter version of the manufacturing enterprise.
			<br />
			<br />
			<span
				class=" m-auto w-fit bg-gradient-to-l from-secondary to-info bg-clip-text text-center font-medium text-info text-transparent">
				TinkerBloX provides you with the building blocks of digital tech, as you reimagine the
				future of your smart enterprise…
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
	class="w-full bg-primary bg-cover bg-bottom bg-no-repeat py-20">
	<h4
		class="m-auto mb-10 w-full max-w-2xl p-5 text-center text-5xl text-base-100 md:p-0 md:text-6xl">
		SAFE Industry for you
	</h4>
	<p class="m-auto w-full text-center text-3xl text-white">Click to read more</p>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		class=" min-h-4 rounded-fullpx-4 m-auto mt-7 flex h-fit w-full flex-wrap items-center justify-center gap-6 overflow-hidden py-2 text-center text-sm text-white md:text-lg">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<span
			on:click="{() => handleClick('Sustainable')}"
			class="{'relative z-10 w-[773px] cursor-pointer rounded-full border border-[#00BE2A] px-3 py-2   '} {selected ===
			'Sustainable'
				? 'bg-[#00BE2A] shadow-md shadow-[#00BE2A] '
				: ''}">Solve your today’s Industry X.0 challenges with TBx</span>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<span
			on:click="{() => handleClick('Efficient')}"
			class="relative z-10 w-[635px] cursor-pointer rounded-full border border-[#A1499C] px-3 py-2 {selected ===
			'Efficient'
				? 'bg-[#A1499C] shadow-md shadow-[#A1499C]'
				: ''}">Build your Industry of the Future with TBx</span>
	</div>

	{#if selected === 'Sustainable'}
		<div
			class=" min-h-4 m-auto mt-7 flex h-fit w-full max-w-7xl flex-wrap items-center justify-center gap-6 overflow-hidden py-2">
			<div class=" flex w-96 flex-col items-center gap-4 p-8">
				<img class=" w-32" src="{sX01}" alt="" />
				<h5 class=" w-80 text-center text-2xl font-semibold text-white">
					Ensure near-100% uptime of your machines
				</h5>
				<p class="w-80 text-center font-normal text-white">
					Realize ZERO unplanned downtime of your machines with condition monitoring 🡪 predictive
					maintenance
				</p>
			</div>

			<div class=" flex w-96 flex-col items-center gap-4 p-8">
				<img class=" w-32" src="{sX02}" alt="" />
				<h5 class="w-80 text-center text-2xl font-semibold text-white">
					Monitor & Improve your OEE & Cycle Time
				</h5>
				<p class="w-80 text-center font-normal text-white">
					Real-time interventions to improve OEE and CT is the quickest way to improve throughput
					and thereby revenue
				</p>
			</div>

			<div class=" flex w-96 flex-col items-center gap-4 p-8">
				<img class=" w-32" src="{sX03}" alt="" />
				<h5 class="w-80 text-center text-2xl font-semibold text-white">
					Track & Optimize your intra-logistics assets
				</h5>
				<p class="w-80 text-center font-normal text-white">
					Know the real-time status of every asset [tuggers, pallets, RM-WIP-FG etc.] at your site
					to optimize fleet & implement JIT
				</p>
			</div>

			<div class=" flex w-96 flex-col items-center gap-4 p-8">
				<img class=" w-32" src="{sX04}" alt="" />
				<h5 class="w-80 text-center text-2xl font-semibold text-white">
					Quality management with Camera-as-a-Sensor
				</h5>
				<p class="w-80 text-center font-normal text-white">
					Camera-&-edge systems to manage defect outflow detection 🡪 defect occurrence detection 🡪
					defect prevention
				</p>
			</div>

			<div class=" flex w-96 flex-col items-center gap-4 p-8">
				<img class=" w-32" src="{sX05}" alt="" />
				<h5 class="w-80 text-center text-2xl font-semibold text-white">
					Supply Chain Digitalization
				</h5>
				<p class="w-80 text-center font-normal text-white">
					End-to-end supply chain visibility in real-time to detect 🡪 predict 🡪 pre-empt delays,
					pilferage, loss of goods
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
				<img class=" w-32" src="{bif1}" alt="" />
				<h5 class=" w-80 text-center text-2xl font-semibold text-white">
					Digital Twins : Assets Systems Process
				</h5>
				<p class="w-80 text-center font-normal text-white">
					Move to prescriptive interventions with digital twins of assets, systems & processes;
					Mature to implement Mfg Enterprise Digital Thread
				</p>
			</div>

			<div class=" flex w-96 flex-col items-center gap-4 p-8">
				<img class=" w-32" src="{bif2}" alt="" />
				<h5 class=" w-80 text-center text-2xl font-semibold text-white">
					Agile Ops : Manufacturing Logistics
				</h5>
				<p class="w-80 text-center font-normal text-white">
					Self-Aware & Self-Optimizing manufacturing & logistics processes for truly agile
					factory(ies)
				</p>
			</div>

			<div class=" flex w-96 flex-col items-center gap-4 p-8">
				<img class=" w-32" src="{bif3}" alt="" />
				<h5 class=" w-80 text-center text-2xl font-semibold text-white">Autonomous Shopfloor</h5>
				<p class="w-80 text-center font-normal text-white">
					100% lights-out factory combining “as-appropriate” maturities of vision factory, digital
					threads, AGV/AMRs, etc.
				</p>
			</div>

			<div class=" flex w-96 flex-col items-center gap-4 p-8">
				<img class=" w-32" src="{bif4}" alt="" />
				<h5 class=" w-80 text-center text-2xl font-semibold text-white">Networked Factory(ies)</h5>
				<p class="w-80 text-center font-normal text-white">
					Move towards federated manufacturing & additive manufacturing leveraging the power of 5G &
					the Network Edge
				</p>
			</div>

			<div class=" flex w-96 flex-col items-center gap-4 p-8">
				<img class=" w-32" src="{bif5}" alt="" />
				<h5 class=" w-80 text-center text-2xl font-semibold text-white">
					Sustainable Supply Chain
				</h5>
				<p class="w-80 text-center font-normal text-white">
					Build a highly resilient supply chain with focus on across the board sustainability 🡪
					circular economy
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
	class="  bg-cover bg-center bg-no-repeat py-20">
	<h4 class=" m-auto w-3/5 text-center text-4xl text-primary">Future of Spaces</h4>
	<div class=" m-auto flex w-full max-w-5xl flex-wrap">
		<div
			class=" min-h-4 top-16 m-auto mt-7 flex h-fit w-fit flex-wrap items-center justify-center gap-6 overflow-hidden px-4 py-2">
			<div class=" flex h-full w-64 flex-col items-center bg-[#E9E9E9]">
				<h5
					class=" flex h-10 w-full items-center justify-center bg-gradient-to-r from-info to-secondary text-center text-lg text-white">
					5G Networked Factory
				</h5>
				<img class="  w-64" src="{GNF}" alt="" />
				<p class=" p-2 text-center text-black/40">
					Leverage 5G private networks to build your state-of-the-art federated manufacturing site
				</p>
			</div>
		</div>
		<div
			class=" min-h-4 top-16 m-auto mt-7 flex h-fit w-fit flex-wrap items-center justify-center gap-6 overflow-hidden px-4 py-2">
			<div class=" flex h-full w-64 flex-col items-center bg-[#E9E9E9]">
				<h5
					class=" flex h-10 w-full items-center justify-center bg-gradient-to-r from-info to-secondary text-center text-lg text-white">
					Factory @ The Edge
				</h5>
				<img class="  w-64" src="{edgefactory}" alt="" />
				<p class=" p-2 text-center text-black/40">
					Leverage AI@Edge to build intelligence into every aspect of your manufacturing landscape
				</p>
			</div>
		</div>
		<div
			class=" min-h-4 top-16 m-auto mt-7 flex h-fit w-fit flex-wrap items-center justify-center gap-6 overflow-hidden px-4 py-2">
			<div class=" flex h-full w-64 flex-col items-center bg-[#E9E9E9]">
				<h5
					class=" flex h-10 w-full items-center justify-center bg-gradient-to-r from-info to-secondary text-center text-lg text-white">
					X – as a Service
				</h5>
				<img class="  w-64" src="{XaaS}" alt="" />
				<p class=" p-2 text-center text-black/40">
					Leverage our technology bloX to transform any asset into an –as-a-Service offering
				</p>
			</div>
		</div>
		<div
			class=" min-h-4 top-16 m-auto mt-7 flex h-fit w-fit flex-wrap items-center justify-center gap-6 overflow-hidden px-4 py-2">
			<div class=" flex h-full w-64 flex-col items-center bg-[#E9E9E9]">
				<h5
					class=" flex h-10 w-full items-center justify-center bg-gradient-to-r from-info to-secondary text-center text-lg text-white">
					COBOTS
				</h5>
				<img class="  w-64" src="{cobots}" alt="" />
				<p class=" p-2 text-center text-black/40">
					Get your assets to collaborate with each other for a truly digital shopfloor
				</p>
			</div>
		</div>
		<div
			class=" min-h-4 top-16 m-auto mt-7 flex h-fit w-fit flex-wrap items-center justify-center gap-6 overflow-hidden px-4 py-2">
			<div class=" flex h-full w-64 flex-col items-center bg-[#E9E9E9]">
				<h5
					class=" flex h-10 w-full items-center justify-center bg-gradient-to-r from-info to-secondary text-center text-lg text-white">
					Digital Twins
				</h5>
				<img class="  w-64" src="{digitalTwins}" alt="" />
				<p class=" p-2 text-center text-black/40">
					Twin your assets @ the edge & ensure ~100% uptime
				</p>
			</div>
		</div>
		<div
			class=" min-h-4 top-16 m-auto mt-7 flex h-fit w-fit flex-wrap items-center justify-center gap-6 overflow-hidden px-4 py-2">
			<div class=" flex h-full w-64 flex-col items-center bg-[#E9E9E9]">
				<h5
					class=" flex h-10 w-full items-center justify-center bg-gradient-to-r from-info to-secondary text-center text-lg text-white">
					Net Zero Manufacturing
				</h5>
				<img class="  w-64" src="{netZero}" alt="" />
				<p class=" p-2 text-center text-black/40">
					Move towards a sustainable + profitable future across scope I, II, III & IV
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
	<CarouselSI />
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
