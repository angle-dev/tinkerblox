<script>
import '../app.css';
import Logo from '$lib/logo.png';
import Arrowdown from '$lib/arrowdown.svg';
import Line from '$lib/line.svg';
let open = 'false';
</script>

<nav
	class="fixed top-0 flex h-14 w-full items-center justify-between bg-base-100/30 px-3 py-2.5 backdrop-blur-md">
	<a class=" h-full" href="/"><img class=" h-full" src="{Logo}" alt="tinkerblox logo" /></a>

	<div class="hidden md:block">
		<ul class="flex">
			<li>
				<button class="btn-link btn-active btn font-medium text-neutral decoration-transparent">
					<a href="/">HOME</a>
				</button>
			</li>
			<li>
				<button
					on:click="{() => (open = open === 'superblox' ? false : 'superblox')}"
					class="btn-link btn-active btn font-medium text-neutral decoration-transparent">
					<div class="flex gap-1">
						SUPERBLOX <img src="{open === 'superblox' ? Line : Arrowdown}" alt="arrow" />
					</div>
				</button>
			</li>
			<li>
				<button
					on:click="{() => (open = open === 'buildingblox' ? false : 'buildingblox')}"
					class="btn-link btn-active btn font-medium text-neutral decoration-transparent">
					<div class="flex gap-1">
						BUILDINGBLOX <img src="{open === 'buildingblox' ? Line : Arrowdown}" alt="arrow" />
					</div>
				</button>
			</li>
			<li>
				<button
					on:click="{() => (open = open === 'meet' ? false : 'meet')}"
					class="btn-link btn-active btn font-medium text-neutral decoration-transparent">
					<div class="flex gap-1">
						MEET <img src="{open === 'meet' ? Line : Arrowdown}" alt="arrow" />
					</div>
				</button>
			</li>
			<li>
				<button class="btn-link btn-active btn font-medium text-neutral decoration-transparent">
					<a href="/connect">CONNECT</a>
				</button>
			</li>
		</ul>
	</div>
	<div class="block md:hidden">=</div>
</nav>
<div>
	{#if open === 'superblox'}
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			on:mouseleave="{() => (open = false)}"
			class="t-14 absolute z-10 flex w-full justify-center gap-3 bg-base-100/20 p-3 backdrop-blur-sm">
			<a href="/">
				<div
					class="prose h-full max-w-xs rounded-md bg-[#89C365] p-3 text-base-100 hover:brightness-105">
					<h3 class=" text-xl font-medium text-base-100">Smart Spaces</h3>
					<p>Digital + Sustainable Ecosystems. Communities. Buildings. Farms.</p>
				</div>
			</a>
			<a href="/">
				<div
					class="prose h-full max-w-xs rounded-md bg-[#C66A66] p-3 text-base-100 hover:brightness-105">
					<h3 class=" text-xl font-medium text-base-100">Smart Devices</h3>
					<p>From Devices to Device-based Experience as a Service.</p>
				</div>
			</a>
			<a href="/">
				<div
					class="prose h-full max-w-xs rounded-md bg-[#CED17A] p-3 text-base-100 hover:brightness-105">
					<h3 class=" text-xl font-medium text-base-100">Smart Utilities</h3>
					<p>Net Zero & Beyond... O&G. Energy. Industry. Commercial.</p>
				</div>
			</a>
			<a href="/">
				<div
					class="prose h-full max-w-xs rounded-md bg-[#5C5C5C] p-3 text-base-100 hover:brightness-105">
					<h3 class=" text-xl font-medium text-base-100">Smart Industry</h3>
					<p>Industry X.0 Resilient Supply Chain</p>
				</div>
			</a>
		</div>
	{/if}
	{#if open === 'buildingblox'}
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			on:mouseleave="{() => (open = false)}"
			class="t-14 absolute z-10 flex w-full justify-center gap-3 bg-base-100/20 p-3 backdrop-blur-sm">
			<a href="/buildingblox/sandblox">
				<div class="prose h-full rounded-md bg-[#AB71AD] p-3 text-base-100 hover:brightness-105">
					<h3 class="text-xl font-medium text-base-100">SandBlox</h3>
					<p>Reimagining Digital. Realizing Outcomes</p>
				</div>
			</a>
			<a href="/buildingblox/edgeblox">
				<div
					class="prose h-full max-w-xs rounded-md bg-[#DF875D] p-3 text-base-100 hover:brightness-105">
					<h3 class="text-xl font-medium text-base-100">EdgeBlox</h3>
					<p>Meet the Lego Blocks of your AloT Transformation.</p>
				</div>
			</a>

			<a href="/buildingblox/servblox">
				<div
					class="prose h-full max-w-xs rounded-md bg-[#6EB7E6] p-3 text-base-100 hover:brightness-105">
					<h3 class=" text-xl font-medium text-base-100">ServBlox</h3>
					<p>Generate 360° value for your business</p>
				</div>
			</a>
		</div>
	{/if}
	{#if open === 'meet'}
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			on:mouseleave="{() => (open = false)}"
			class="t-14 absolute z-10 flex w-full justify-center gap-3 bg-base-100/20 p-3 backdrop-blur-sm">
			<a href="/">
				<div
					class="prose h-full max-w-xs rounded-md bg-[#DA7874] p-3 text-base-100 hover:brightness-105">
					<h3 class="  text-xl font-medium text-base-100">Our Company</h3>
					<p>Meet the Vision. Meet the People. Meet the Passion.</p>
				</div>
			</a>
			<a href="/">
				<div
					class="prose h-full max-w-xs rounded-md bg-[#71BAB6] p-3 text-base-100 hover:brightness-105">
					<h3 class=" text-xl font-medium text-base-100">Your Future Team</h3>
					<p>We're missing some key players in our team... Make your move now!</p>
				</div>
			</a>
		</div>
	{/if}
</div>

<main class=" m-auto mt-14 w-full max-w-screen-2xl px-2 md:px-3">
	<slot />
</main>
