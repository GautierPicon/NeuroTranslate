<script>
	import Header from '$lib/components/header.svelte';

	let sourceText = '';
	let targetText = '';

	const languages = ['French', 'English', 'Spanish', 'German', 'Japanese'];
</script>

<main class="min-h-screen bg-gray-50 p-4 font-sans text-gray-800">
	<Header />

	<div class="pt-5 mx-auto max-w-6xl">
		<div class="flex items-center overflow-hidden rounded-t-xl border bg-white shadow-sm">
			<div class="flex flex-1 border-r">
				<button class="border-b-2 border-blue-600 px-6 py-3 text-sm font-medium text-blue-600">
					Detect language
				</button>
				{#each languages.slice(0, 2) as lang}
					<button class="cursor-pointer px-6 py-3 text-sm font-medium transition hover:bg-gray-100">{lang}</button>
				{/each}
			</div>

			<div class="p-2 text-gray-400">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
					/>
				</svg>
			</div>

			<div class="flex flex-1 border-l">
				{#each languages.slice(0, 4) as lang}
					<button class="cursor-pointer px-6 py-3 text-sm font-medium transition hover:bg-gray-100">{lang}</button>
				{/each}
			</div>
		</div>

		<div
			class="grid min-h-[300px] grid-cols-1 rounded-b-xl border border-t-0 bg-white shadow-lg md:grid-cols-2"
		>
			<div class="border-r p-4">
				<textarea
					bind:value={sourceText}
					placeholder="Write or paste your text here."
					class="w-full resize-none border-r border-none p-4 text-2xl placeholder-gray-300 outline-none focus:ring-0"
				></textarea>
			</div>

			<div class="rounded-br-xl bg-gray-50 p-4 text-2xl">
				{sourceText ? 'This is a translation simulation.' : targetText}
			</div>
		</div>
	</div>
</main>
