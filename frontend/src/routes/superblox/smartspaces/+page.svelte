<script>
import SmartSpaces from '$lib/smartspaces_hero.png';
import gradientbackground from '$lib/gradient_background.png';
import GradientButton from '$lib/components/GradientButton.svelte';
import powerplant from '$lib/powerplant.png';
import TheTinkerBloXUSP from '$lib/TheTinkerBloXUSP.svg';
import temp from '$lib/temp.svg';
let selected = 'Sustainable';
function handleClick(newValue) {
	selected = newValue;
}
</script>

<section
	style="  background-image: url('{SmartSpaces}'); "
	class="relative z-30 flex h-fit min-h-[777px] w-full flex-col items-center justify-center bg-cover bg-center bg-no-repeat p-3 py-2 md:p-10">
</section>

<section
	style="background-image: url(/defaultbg.png);"
	class=" w-full bg-cover bg-center bg-no-repeat py-10">
	<div class="m-auto flex max-w-6xl flex-col items-center gap-2">
		<h4 class=" w-3/5 text-center text-4xl text-secondary">
			Take the next step in your <span class=" font-bold text-info">smart spaces</span> journey…
			<span class="text-accent"> one BloX</span> @ a time !!
		</h4>

		<p class="mt-5 text-center text-2xl text-neutral/60">
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
<div
	class=" min-h-4 sticky top-16 z-50 m-auto flex h-fit w-full max-w-5xl items-center justify-between gap-2 overflow-hidden rounded-full bg-[#B5B5B5] px-4 py-2 text-center text-sm text-white md:text-lg">
	<a href="#safe" class="relative z-10"> <span>SAFE Spaces for you</span></a>
	<a href="#future" class="relative z-10"> <span>Future of Spaces</span></a>
	<a href="#tinker" class="relative z-10"> <span>The TinkerBloX USP</span></a>
	<a href="#stories" class="relative z-10"> <span>Stories we bring to life</span></a>

	<div class="absolute z-0 -ml-4 h-full w-[10%] bg-gradient-to-b from-info to-secondary"></div>
</div>

<br />

<section
	id="safe"
	style=" background-image: url({gradientbackground}) "
	class="w-full bg-primary bg-cover bg-bottom bg-no-repeat py-10">
	<h4
		class="m-auto mb-10 w-full max-w-2xl p-5 text-center text-5xl text-base-100 md:p-0 md:text-6xl">
		Safe Spaces for you
	</h4>
	<p class="m-auto w-full text-center text-3xl text-white">Click to read more</p>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		class=" min-h-4 rounded-fullpx-4 m-auto mt-7 flex h-fit w-full max-w-5xl flex-wrap items-center justify-center gap-6 overflow-hidden py-2 text-center text-sm text-white md:text-lg">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<span
			on:click="{() => handleClick('Sustainable')}"
			class="{'relative z-10 cursor-pointer rounded-full border border-[#00BE2A] px-3 py-2   '} {selected ===
			'Sustainable'
				? 'bg-[#00BE2A] shadow-md shadow-[#00BE2A] '
				: ''}">Sustainable Spaces</span>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<span
			on:click="{() => handleClick('Autonomous')}"
			class="relative z-10 cursor-pointer rounded-full border border-[#00A7E5] px-3 py-2 {selected ===
			'Autonomous'
				? 'bg-[#00A7E5] shadow-md shadow-[#00A7E5]'
				: ''}">Autonomous Spaces</span>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<span
			on:click="{() => handleClick('Federated')}"
			class="relative z-10 cursor-pointer rounded-full border border-[#E76120] px-3 py-2 {selected ===
			'Federated'
				? 'bg-[#E76120] shadow-md shadow-[#E76120]'
				: ''}">Federated Spaces</span>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<span
			on:click="{() => handleClick('Efficient')}"
			class="relative z-10 cursor-pointer rounded-full border border-[#A1499C] px-3 py-2 {selected ===
			'Efficient'
				? 'bg-[#A1499C] shadow-md shadow-[#A1499C]'
				: ''}">Efficient Spaces</span>
	</div>

	{#if selected === 'Sustainable'}
		<div
			class=" min-h-4 m-auto mt-7 flex h-fit w-full max-w-5xl flex-wrap items-center justify-center gap-6 overflow-hidden py-2">
			<div class=" flex w-60 flex-col items-center gap-3">
				<img class=" w-32" src="{temp}" alt="" />
				<h5 class=" text-center text-2xl text-white">
					(Re)Design your building for WELL standards
				</h5>
				<p class=" text-center text-white">
					Leverage AIoT to meet regulatory requirements for health, well-being & comfort of
					occupants
				</p>
			</div>

			<div class=" flex w-60 flex-col items-center gap-3">
				<img class=" w-32" src="{temp}" alt="" />
				<h5 class=" text-center text-2xl text-white">
					(Re)Design your building for WELL standards
				</h5>
				<p class=" text-center text-white">
					Leverage AIoT to meet regulatory requirements for health, well-being & comfort of
					occupants
				</p>
			</div>

			<div class=" flex w-60 flex-col items-center gap-3">
				<img class=" w-32" src="{temp}" alt="" />
				<h5 class=" text-center text-2xl text-white">
					(Re)Design your building for WELL standards
				</h5>
				<p class=" text-center text-white">
					Leverage AIoT to meet regulatory requirements for health, well-being & comfort of
					occupants
				</p>
			</div>

			<div class=" flex w-60 flex-col items-center gap-3">
				<img class=" w-32" src="{temp}" alt="" />
				<h5 class=" text-center text-2xl text-white">
					(Re)Design your building for WELL standards
				</h5>
				<p class=" text-center text-white">
					Leverage AIoT to meet regulatory requirements for health, well-being & comfort of
					occupants
				</p>
			</div>

			<div class=" flex w-60 flex-col items-center gap-3">
				<img class=" w-32" src="{temp}" alt="" />
				<h5 class=" text-center text-2xl text-white">
					(Re)Design your building for WELL standards
				</h5>
				<p class=" text-center text-white">
					Leverage AIoT to meet regulatory requirements for health, well-being & comfort of
					occupants
				</p>
			</div>

			<div class=" bold flex w-60 flex-col items-center gap-3 text-3xl text-white underline">
				Learn More
			</div>
		</div>
	{/if}
	{#if selected === 'Autonomous'}Autonomous{/if}
	{#if selected === 'Federated'}Fed{/if}
	{#if selected === 'Efficient'}Efficient{/if}
</section>

<section
	id="future"
	style="background-image: url(/defaultbg.png);"
	class="  bg-cover bg-center bg-no-repeat py-10">
	<h4 class=" m-auto w-3/5 text-center text-4xl text-primary">Future of Spaces</h4>
	<div class=" m-auto flex w-full max-w-5xl flex-wrap">
		<div
			class=" min-h-4 top-16 m-auto mt-7 flex h-fit w-fit flex-wrap items-center justify-center gap-6 overflow-hidden px-4 py-2">
			<div class=" flex h-full w-64 flex-col items-center bg-[#F1F1F1]">
				<h5
					class=" flex h-10 w-full items-center justify-center bg-gradient-to-r from-info to-secondary text-center text-lg text-white">
					Smart Refineries
				</h5>
				<img class="  w-64" src="{powerplant}" alt="" />
				<p class=" pb-2 pt-3 text-center text-black/40">
					O&G spaces need to be safe, secure, optimum & responsive…now, more than ever
				</p>
			</div>
		</div>
		<div
			class=" min-h-4 top-16 m-auto mt-7 flex h-fit w-fit flex-wrap items-center justify-center gap-6 overflow-hidden px-4 py-2">
			<div class=" flex h-full w-64 flex-col items-center bg-[#F1F1F1]">
				<h5
					class=" flex h-10 w-full items-center justify-center bg-gradient-to-r from-info to-secondary text-center text-lg text-white">
					Smart Refineries
				</h5>
				<img class="  w-64" src="{powerplant}" alt="" />
				<p class=" pb-2 pt-3 text-center text-black/40">
					O&G spaces need to be safe, secure, optimum & responsive…now, more than ever
				</p>
			</div>
		</div>
		<div
			class=" min-h-4 top-16 m-auto mt-7 flex h-fit w-fit flex-wrap items-center justify-center gap-6 overflow-hidden px-4 py-2">
			<div class=" flex h-full w-64 flex-col items-center bg-[#F1F1F1]">
				<h5
					class=" flex h-10 w-full items-center justify-center bg-gradient-to-r from-info to-secondary text-center text-lg text-white">
					Smart Refineries
				</h5>
				<img class="  w-64" src="{powerplant}" alt="" />
				<p class=" pb-2 pt-3 text-center text-black/40">
					O&G spaces need to be safe, secure, optimum & responsive…now, more than ever
				</p>
			</div>
		</div>
		<div
			class=" min-h-4 top-16 m-auto mt-7 flex h-fit w-fit flex-wrap items-center justify-center gap-6 overflow-hidden px-4 py-2">
			<div class=" flex h-full w-64 flex-col items-center bg-[#F1F1F1]">
				<h5
					class=" flex h-10 w-full items-center justify-center bg-gradient-to-r from-info to-secondary text-center text-lg text-white">
					Smart Refineries
				</h5>
				<img class="  w-64" src="{powerplant}" alt="" />
				<p class=" pb-2 pt-3 text-center text-black/40">
					O&G spaces need to be safe, secure, optimum & responsive…now, more than ever
				</p>
			</div>
		</div>
		<div
			class=" min-h-4 top-16 m-auto mt-7 flex h-fit w-fit flex-wrap items-center justify-center gap-6 overflow-hidden px-4 py-2">
			<div class=" flex h-full w-64 flex-col items-center bg-[#F1F1F1]">
				<h5
					class=" flex h-10 w-full items-center justify-center bg-gradient-to-r from-info to-secondary text-center text-lg text-white">
					Smart Refineries
				</h5>
				<img class="  w-64" src="{powerplant}" alt="" />
				<p class=" pb-2 pt-3 text-center text-black/40">
					O&G spaces need to be safe, secure, optimum & responsive…now, more than ever
				</p>
			</div>
		</div>
		<div
			class=" min-h-4 top-16 m-auto mt-7 flex h-fit w-fit flex-wrap items-center justify-center gap-6 overflow-hidden px-4 py-2">
			<div class=" flex h-full w-64 flex-col items-center bg-[#F1F1F1]">
				<h5
					class=" flex h-10 w-full items-center justify-center bg-gradient-to-r from-info to-secondary text-center text-lg text-white">
					Smart Refineries
				</h5>
				<img class="  w-64" src="{powerplant}" alt="" />
				<p class=" pb-2 pt-3 text-center text-black/40">
					O&G spaces need to be safe, secure, optimum & responsive…now, more than ever
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

<section id="stories"></section>

<section
	style=" background-image: url({gradientbackground}) "
	class="w-full bg-primary bg-cover bg-bottom bg-no-repeat py-10">
	<h4
		class="m-auto mb-16 w-full max-w-2xl p-5 text-center text-5xl font-bold text-base-100 md:p-0 md:text-6xl">
		Be part of our  Smart Spaces huddle
	</h4>

	<div class="m-auto mt-10 flex h-auto max-w-6xl items-center justify-center gap-10 px-2">
		<GradientButton>JOIN OUR ALLIANCE</GradientButton>
	</div>
</section>
