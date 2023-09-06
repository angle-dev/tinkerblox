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
import SmartSpaces from '$lib/smartspaces_hero.png';
import edgeCentric from '$lib/edgeCentric.png';
import gradientbackground from '$lib/gradient_background.png';
import GradientButton from '$lib/components/GradientButton.svelte';
import smartBuildings from '$lib/smartBuildings.png';
import smartRefineries from '$lib/smartRefineries.png';
import smartFactories from '$lib/smartFactories.png';
import smartFarms from '$lib/smartFarms.png';
import smartHomes from '$lib/smartHomes.png';
import smartLogistics from '$lib/smartLogistics.png';
import TheTinkerBloXUSP from '$lib/TheTinkerBloXUSP.svg';
import ss1 from '$lib/ss1.svg';
import ss2 from '$lib/ss2.png';
import ss3 from '$lib/ss3.png';
import ss4 from '$lib/ss4.png';
import ss5 from '$lib/ss5.png';
import as1 from '$lib/as1.png';
import as2 from '$lib/as2.png';
import as3 from '$lib/as3.png';
import as4 from '$lib/as4.png';
import as5 from '$lib/as5.png';
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
	{ id: 'safe', text: 'SAFE Spaces for you' },
	{ id: 'future', text: 'Future of Spaces' },
	{ id: 'tinker', text: 'The TinkerBloX USP' },
	{ id: 'stories', text: 'Stories we bring to life' }
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
	style="  background-image: url('{SmartSpaces}'); "
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
			<h1 class="text-4xl font-bold text-base-100 md:text-8xl">Smart Spaces</h1>

			<p class=" mt-20 max-w-3xl p-5 text-justify text-xl text-base-100 md:p-5 md:text-2xl">
				Build an autonomous & sustainable AIoT eco-system of your living & work spaces.
			</p>
		</div>
	</div>
</section>

<section
	style="background-image: url(/defaultbg.png);"
	class=" w-full bg-cover bg-center bg-no-repeat py-10">
	<div class="m-auto flex max-w-6xl flex-col items-center gap-2">
		<h4 class=" w-3/5 text-center text-2xl text-secondary md:text-4xl">
			Take the next step in your <span class=" font-bold text-info">smart spaces</span> journey…
			<span class="text-accent"> one BloX</span> @ a time !!
		</h4>

		<p class="mt-5 p-6 text-justify text-xl text-neutral/60 md:p-0 md:text-center md:text-2xl">
			There used to be a time when the spaces we lived in, travelled in, worked in and played in,
			were only that – spaces.  Interactions, if any, were limited, unidirectional and mostly,
			boring. <br /> <br /> With digital technologies becoming mainstream, this has changed
			drastically. Today, it’s not unimaginable for homes to interact with its inhabitants, for
			offices to proactively care for the environment of its workers, for factories to take
			responsibility of the safety & security of its men & machines, for greenhouses to adapt to the
			needs of its plant life, and for all of the above to be conscious of their role in creating a
			sustainable and eco-friendly environment <br /> <br />
			<span
				class=" m-auto w-fit bg-gradient-to-l from-secondary to-info bg-clip-text text-center font-medium text-info text-transparent">
				@TinkerBloX, we believe in creating SAFE – Sustainable, Autonomous, Federated, Efficient –
				spaces for all of the aforementioned scenarios leveraging on our Device Native Edge-Centric
				suite of AIoT products…
			</span>
		</p>
	</div>
</section>
<!-- <div
	class=" min-h-4 sticky top-16 z-50 m-auto flex h-fit w-full max-w-5xl items-center justify-between gap-2 overflow-hidden rounded-full bg-[#B5B5B5] px-4 py-2 text-center text-sm text-white md:text-lg">
	<a href="#safe" class=" relative z-10"> <span>SAFE Spaces for you</span></a>
	<a href="#future" class=" relative z-10"> <span>Future of Spaces</span></a>
	<a href="#tinker" class=" relative z-10"> <span>The TinkerBloX USP</span></a>
	<a href="#stories" class=" relative z-10"> <span>Stories we bring to life</span></a>

	<div class="absolute z-0 -ml-4 h-full w-[10%] bg-gradient-to-b from-info to-secondary"></div>
</div> -->

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
		SAFE Spaces for you
	</h4>
	<p class="m-auto w-full text-center text-3xl text-white">Click to read more</p>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		class=" min-h-4 rounded-fullpx-4 m-auto mt-7 flex h-fit w-full flex-wrap items-center justify-center gap-6 overflow-hidden py-2 text-center text-sm text-white md:text-lg">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<span
			on:click="{() => handleClick('Sustainable')}"
			class="{'relative z-10 w-80 cursor-pointer rounded-full border border-[#00BE2A] px-3 py-2   '} {selected ===
			'Sustainable'
				? 'bg-[#00BE2A] shadow-md shadow-[#00BE2A] '
				: ''}">Sustainable Spaces</span>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<span
			on:click="{() => handleClick('Autonomous')}"
			class="relative z-10 w-80 cursor-pointer rounded-full border border-[#00A7E5] px-3 py-2 {selected ===
			'Autonomous'
				? 'bg-[#00A7E5] shadow-md shadow-[#00A7E5]'
				: ''}">Autonomous Spaces</span>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<span
			on:click="{() => handleClick('Federated')}"
			class="relative z-10 w-80 cursor-pointer rounded-full border border-[#E76120] px-3 py-2 {selected ===
			'Federated'
				? 'bg-[#E76120] shadow-md shadow-[#E76120]'
				: ''}">Federated Spaces</span>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<span
			on:click="{() => handleClick('Efficient')}"
			class="relative z-10 w-80 cursor-pointer rounded-full border border-[#A1499C] px-3 py-2 {selected ===
			'Efficient'
				? 'bg-[#A1499C] shadow-md shadow-[#A1499C]'
				: ''}">Efficient Spaces</span>
	</div>

	{#if selected === 'Sustainable'}
		<div
			class=" min-h-4 m-auto mt-7 flex h-fit w-full max-w-7xl flex-wrap items-center justify-center gap-6 overflow-hidden py-2">
			<div class=" flex w-96 flex-col items-center gap-4 p-8">
				<img class=" w-32" src="{ss1}" alt="" />
				<h5 class=" w-80 text-center text-2xl font-semibold text-white">
					(Re)Design your building for WELL standards
				</h5>
				<p class="w-80 text-center font-normal text-white">
					Leverage AIoT to meet regulatory requirements for health, well-being & comfort of
					occupants
				</p>
			</div>

			<div class=" flex w-96 flex-col items-center gap-4 p-8">
				<img class=" w-32" src="{ss2}" alt="" />
				<h5 class="w-80 text-center text-2xl font-semibold text-white">
					Protect your O&G spaces against eco-logical events
				</h5>
				<p class="w-80 text-center font-normal text-white">
					Real-time 🡪 predictive 🡪 prescriptive management of O&G spaces for ~ZERO hazards
				</p>
			</div>

			<div class=" flex w-96 flex-col items-center gap-4 p-8">
				<img class=" w-32" src="{ss3}" alt="" />
				<h5 class="w-80 text-center text-2xl font-semibold text-white">
					Optimize your manufacturing footprint
				</h5>
				<p class="w-80 text-center font-normal text-white">
					Optimize/minimize the overall efficiency of your factory space across the sustainability
					matrix
				</p>
			</div>

			<div class=" flex w-96 flex-col items-center gap-4 p-8">
				<img class=" w-32" src="{ss4}" alt="" />
				<h5 class="w-80 text-center text-2xl font-semibold text-white">
					Your greenhouse can now be truly green
				</h5>
				<p class="w-80 text-center font-normal text-white">
					AIoT based end-to-end greenhouse management for maximizing plant & environmental health
				</p>
			</div>

			<div class=" flex w-96 flex-col items-center gap-4 p-8">
				<img class=" w-32" src="{ss5}" alt="" />
				<h5 class="w-80 text-center text-2xl font-semibold text-white">
					Optimize your multi-sourced energy needs
				</h5>
				<p class="w-80 text-center font-normal text-white">
					Leverage AIoT for optimizing your energy needs across W.A.G.E.S
				</p>
			</div>

			<a href="/connect">
				<div class=" bold flex w-96 flex-col items-center gap-4 p-8 text-3xl text-white underline">
					Learn More...
				</div>
			</a>
		</div>
	{/if}
	{#if selected === 'Autonomous'}
		<div
			class=" min-h-4 m-auto mt-7 flex h-fit w-full max-w-7xl flex-wrap items-center justify-center gap-6 overflow-hidden py-2">
			<div class=" flex w-96 flex-col items-center gap-4 p-8">
				<img class=" w-32" src="{as1}" alt="" />
				<h5 class=" w-80 text-center text-2xl font-semibold text-white">
					Autonomous utility management for buildings
				</h5>
				<p class="w-80 text-center font-normal text-white">
					IoT-ize your utility assets to ensure 360o value for your commercial spaces
				</p>
			</div>

			<div class=" flex w-96 flex-col items-center gap-4 p-8">
				<img class=" w-32" src="{as2}" alt="" />
				<h5 class=" w-80 text-center text-2xl font-semibold text-white">
					Autonomize your O&G property, plant & equipment
				</h5>
				<p class="w-80 text-center font-normal text-white">
					Create autonomous closed-loop systems for maximum efficiency & safety of your refinery
				</p>
			</div>

			<div class=" flex w-96 flex-col items-center gap-4 p-8">
				<img class=" w-32" src="{as3}" alt="" />
				<h5 class=" w-80 text-center text-2xl font-semibold text-white">Autonomous Shopfloor</h5>
				<p class="w-80 text-center font-normal text-white">
					100% lights-out factory combining “as-appropriate” maturities of vision factory, digital
					threads, AGV/AMRs, etc.
				</p>
			</div>

			<div class=" flex w-96 flex-col items-center gap-4 p-8">
				<img class=" w-32" src="{as4}" alt="" />
				<h5 class=" w-80 text-center text-2xl font-semibold text-white">
					Autonomous Farm Managements Systems
				</h5>
				<p class="w-80 text-center font-normal text-white">
					Leverage AIoT to autonomize your farm/crop management system for higher yield at higher
					quality
				</p>
			</div>

			<div class=" flex w-96 flex-col items-center gap-4 p-8">
				<img class=" w-32" src="{as5}" alt="" />
				<h5 class=" w-80 text-center text-2xl font-semibold text-white">
					Autonomous spaces with private 5G
				</h5>
				<p class="w-80 text-center font-normal text-white">
					Build & manage autonomous sites with the power of private 5G & the network edge
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
					Smart Buildings
				</h5>
				<img class="  w-64" src="{smartBuildings}" alt="" />
				<p class=" p-2 text-center text-black/40">
					Embrace AIoT to realize smart sustainable humane buildings with a “life” of their own
				</p>
			</div>
		</div>
		<div
			class=" min-h-4 top-16 m-auto mt-7 flex h-fit w-fit flex-wrap items-center justify-center gap-6 overflow-hidden px-4 py-2">
			<div class=" flex h-full w-64 flex-col items-center bg-[#E9E9E9]">
				<h5
					class=" flex h-10 w-full items-center justify-center bg-gradient-to-r from-info to-secondary text-center text-lg text-white">
					Smart Refineries
				</h5>
				<img class="  w-64" src="{smartRefineries}" alt="" />
				<p class=" p-2 text-center text-black/40">
					O&G spaces need to be safe, secure, optimum & responsive…now, more than ever
				</p>
			</div>
		</div>
		<div
			class=" min-h-4 top-16 m-auto mt-7 flex h-fit w-fit flex-wrap items-center justify-center gap-6 overflow-hidden px-4 py-2">
			<div class=" flex h-full w-64 flex-col items-center bg-[#E9E9E9]">
				<h5
					class=" flex h-10 w-full items-center justify-center bg-gradient-to-r from-info to-secondary text-center text-lg text-white">
					Smart Factories
				</h5>
				<img class="  w-64" src="{smartFactories}" alt="" />
				<p class=" p-2 text-center text-black/40">
					Shift your ESG initiatives into high gear powered by AIoT products & services
				</p>
			</div>
		</div>
		<div
			class=" min-h-4 top-16 m-auto mt-7 flex h-fit w-fit flex-wrap items-center justify-center gap-6 overflow-hidden px-4 py-2">
			<div class=" flex h-full w-64 flex-col items-center bg-[#E9E9E9]">
				<h5
					class=" flex h-10 w-full items-center justify-center bg-gradient-to-r from-info to-secondary text-center text-lg text-white">
					Smart Farms
				</h5>
				<img class="  w-64" src="{smartFarms}" alt="" />
				<p class=" p-2 text-center text-black/40">
					Explore Farms that are autonomous federated sustainable local eco-systems
				</p>
			</div>
		</div>
		<div
			class=" min-h-4 top-16 m-auto mt-7 flex h-fit w-fit flex-wrap items-center justify-center gap-6 overflow-hidden px-4 py-2">
			<div class=" flex h-full w-64 flex-col items-center bg-[#E9E9E9]">
				<h5
					class=" flex h-10 w-full items-center justify-center bg-gradient-to-r from-info to-secondary text-center text-lg text-white">
					Smart Homes
				</h5>
				<img class="  w-64" src="{smartHomes}" alt="" />
				<p class=" p-2 text-center text-black/40">
					Transform your living spaces into pro-active intelligent experiential identities
				</p>
			</div>
		</div>
		<div
			class=" min-h-4 top-16 m-auto mt-7 flex h-fit w-fit flex-wrap items-center justify-center gap-6 overflow-hidden px-4 py-2">
			<div class=" flex h-full w-64 flex-col items-center bg-[#E9E9E9]">
				<h5
					class=" flex h-10 w-full items-center justify-center bg-gradient-to-r from-info to-secondary text-center text-lg text-white">
					Smart Logistics
				</h5>
				<img class="  w-64" src="{smartLogistics}" alt="" />
				<p class=" p-2 text-center text-black/40">
					Scope III is perhaps the most impactful sustainability aspect of the future of enterprises
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
		Be part of our  Smart Spaces huddle
	</h4>

	<div class="m-auto mt-10 flex h-auto max-w-6xl items-center justify-center gap-10 px-2">
		<GradientButton>JOIN OUR ALLIANCE</GradientButton>
	</div>
</section>
