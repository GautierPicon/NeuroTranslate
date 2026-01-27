<script lang="ts">
	export let sourceText: string;
	export let targetText: string;
	export let loading: boolean = false;

	function copyToClipboard() {
		if (!targetText) return;
		navigator.clipboard.writeText(targetText);
	}
</script>

<div
	class="grid min-h-[350px] grid-cols-1 rounded-b-xl border border-t-0 bg-white shadow-lg md:grid-cols-2"
>
	<div class="border-r">
		<textarea
			bind:value={sourceText}
			placeholder="Write or paste your text here."
			class="h-full min-h-[300px] w-full resize-none border-none p-6 text-2xl placeholder-gray-300 outline-none focus:ring-0"
		></textarea>
	</div>

	<div class="relative rounded-br-xl bg-gray-50 p-6 text-2xl text-gray-800">
		{#if loading}
			<div class="flex items-center gap-2 text-gray-400">
				<div
					class="h-4 w-4 animate-spin rounded-full border-2 border-blue-600 border-t-transparent"
				></div>
				<span class="text-base">Translating...</span>
			</div>
		{:else}
			{targetText}
		{/if}

		<button
			aria-label="Copy the translation"
			title="Copy"
			on:click={copyToClipboard}
			class="absolute right-4 bottom-4 cursor-pointer rounded-md p-1.5 text-gray-700 transition hover:bg-gray-100"
		>
			<svg
				width="30px"
				height="30px"
				viewBox="0 0 1024 1024"
				xmlns="http://www.w3.org/2000/svg"
				fill="#000000"
				transform="matrix(-1, 0, 0, 1, 0, 0)rotate(180)"
			>
				<g id="SVGRepo_bgCarrier" stroke-width="0" />
				<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
				<g id="SVGRepo_iconCarrier">
					<path
						fill="#000000"
						d="M768 832a128 128 0 0 1-128 128H192A128 128 0 0 1 64 832V384a128 128 0 0 1 128-128v64a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64h64z"
					/>
					<path
						fill="#000000"
						d="M384 128a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64V192a64 64 0 0 0-64-64H384zm0-64h448a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H384a128 128 0 0 1-128-128V192A128 128 0 0 1 384 64z"
					/>
				</g>
			</svg>
		</button>
	</div>
</div>
