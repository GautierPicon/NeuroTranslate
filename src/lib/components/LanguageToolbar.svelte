<script lang="ts">
	import LanguageSelector from './LanguageSelector.svelte';

	export let sourceLang: string;
	export let targetLang: string;
	export let languages: string[];
	export let onSwap: () => void;

	$: canSwap = sourceLang !== 'Detect language';
</script>

<div class="flex items-center justify-center rounded-t-xl border bg-white px-4 shadow-sm">
	<div class="flex flex-1 justify-end">
		<LanguageSelector
			bind:selectedLang={sourceLang}
			{languages}
			showDetect={true}
			alignment="right"
		/>
	</div>

	<div class="px-2">
		<button
			on:click={onSwap}
			class="p-2 text-gray-700 transition rounded-md hover:bg-gray-100 hover:text-blue-600 disabled:opacity-30"
			disabled={!canSwap}
			aria-label="Swap languages"
			title="Swap languages"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				aria-hidden="true"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
				/>
			</svg>
		</button>
	</div>

	<div class="flex flex-1 justify-start">
		<LanguageSelector bind:selectedLang={targetLang} {languages} alignment="left" />
	</div>
</div>