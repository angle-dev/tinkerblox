<style>
.gradient-button {
	border-radius: 99999999px;
	background: linear-gradient(135deg, #a74c93 0%, #e05f2d 100%);
	box-shadow: 9px 7px 19px -3px rgba(231, 97, 32, 0.81), -5px -1px 12px -2px #aa4d8d;
}
</style>

<script>
import gradientbackground from '$lib/gradient_background.png';
import connectphone from '$lib/connectphone.png';
import connectmail from '$lib/connectmail.png';
import linkedin from '$lib/linkedin.png';
</script>

<section
	class=" w-full bg-[#002C49] bg-cover bg-no-repeat py-16"
	style="
background-image: url({gradientbackground});
">
	<div class="m-auto flex max-w-6xl flex-col items-start gap-14 md:flex-row md:items-center">
		<div class="m-auto w-5/6">
			<div class=" h-fit min-h-[60vh] w-full px-2 py-20">
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
							placeholder=""
							class="input-bordered input w-full rounded-full text-neutral" />
					</div>
					<div class=" flex w-full justify-stretch gap-3">
						<div class="w-full">
							Reach me at<br /><input
								name="email"
								type="text"
								placeholder=""
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
		</div>
		<div
			class="m-auto flex w-11/12 flex-col items-center p-5 text-center text-base-100 md:w-2/3 md:items-start md:p-0 md:text-left">
			<h4 class="mb-6 text-4xl font-normal md:mb-14">Want to reach us directly?</h4>

			<p class=" flex gap-4">
				<img class="w-8" src="{connectphone}" alt="phone" />
				+1 (262) 302 4044
			</p>

			<p class=" mt-6 flex gap-4">
				<img class="w-8" src="{connectmail}" alt="mail" />
				connect@tinkerblox.io
			</p>

			<p class=" mt-6 flex gap-2 md:mt-52">
				Follow us on
				<img class=" w-8" src="{linkedin}" alt="in" />
			</p>
		</div>
	</div>
</section>
