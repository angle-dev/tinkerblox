<style>
.gradient-button {
	border-radius: 99999999px;
	background: linear-gradient(135deg, #a74c93 0%, #e05f2d 100%);
	box-shadow: 9px 7px 19px -3px rgba(231, 97, 32, 0.81), -5px -1px 12px -2px #aa4d8d;
}
</style>

<script>
import gradientbackground from '$lib/gradient_background.png';
</script>

<div
	style="
 background-image: url({gradientbackground});
"
	class=" h-fit min-h-screen w-full bg-[#002C49] bg-cover bg-no-repeat px-2 py-10">
	<form
		class=" m-auto flex w-full max-w-2xl flex-col gap-3 text-base-100"
		action="mailto:connect@tinkerblox.io"
		method="post"
		enctype="text/plain">
		<h1 class=" text-center text-4xl md:text-left md:text-5xl">
			Let’s build… <br /> <span class="font-bold">a Sustainable Outcome! </span>
		</h1>
		<div>
			Hi I am<br /><input
				name="name"
				type="text"
				placeholder="john doe/curious doe"
				class="input-bordered input w-full rounded-full text-neutral" />
		</div>
		<div class=" flex w-full justify-stretch gap-3">
			<div class="w-full">
				Reach me at<br /><input
					name="email"
					type="text"
					placeholder="john.doe@...."
					class="input-bordered input w-full rounded-full text-neutral" />
			</div>
			<div class="w-full">
				Call me at<br /><input
					name="phone"
					type="tel"
					placeholder="+1 2XX 2X6 X81X"
					class="input-bordered input w-full rounded-full text-neutral" />
			</div>
		</div>

		<div class=" flex w-full justify-stretch gap-3">
			<div class="w-full">
				Company<br /><input
					name="company"
					placeholder="Awesome Co."
					class="input-bordered input w-full rounded-full text-neutral" />
			</div>
			<div class="w-full">
				SUBJECT<br /><input
					name="subject"
					placeholder=""
					class="input-bordered input w-full rounded-full text-neutral" />
			</div>
		</div>

		<div>
			Message<br />
			<textarea
				name="message"
				class=" textarea-bordered textarea h-36 w-full resize-none text-neutral"
				placeholder=""></textarea>
		</div>

		<div class=" flex w-full">
			<input
				class="gradient-button btn border-none px-12 font-bold text-base-100"
				type="submit"
				value="Send Message" />
		</div>
	</form>
</div>
