<script lang="ts">
	export let selectedLang: string;
	export let languages: string[];
	export let showDetect: boolean = false;
	export let alignment: 'left' | 'right' = 'left';
	export let showMenu: boolean = false;
	export let onToggle: () => void;
	export let disabledLang: string | null = null;

	function selectLanguage(lang: string) {
		selectedLang = lang;
		onToggle();
	}

	function isDisabled(lang: string): boolean {
		return disabledLang === lang;
	}
</script>

<div class="relative py-2">
	<button
		on:click={onToggle}
		class="flex items-center gap-1.5 rounded-md px-4 py-2 text-sm font-bold text-blue-600 transition hover:bg-gray-100"
	>
		{selectedLang}
		<span class="text-[10px] text-blue-600">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				class="size-5"
			>
				<path
					fill-rule="evenodd"
					d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
					clip-rule="evenodd"
				/>
			</svg>
		</span>
	</button>

	{#if showMenu}
		<div
			class="absolute top-full z-20 mt-1 w-64 rounded-lg border bg-white shadow-xl {alignment ===
			'right'
				? 'right-0'
				: 'left-0'}"
		>
			<div class="grid grid-cols-1 gap-1 p-2">
				{#if showDetect}
					<button
						class="rounded px-4 py-2 text-left text-sm hover:bg-blue-50 {selectedLang ===
						'Detect language'
							? 'bg-blue-100 text-blue-700'
							: ''}"
						on:click={() => selectLanguage('Detect language')}
					>
						Detect language
					</button>
					<hr class="my-1" />
				{/if}
				{#each languages as lang}
					<button
						class="rounded px-4 py-2 text-left text-sm {isDisabled(lang)
							? 'cursor-not-allowed opacity-50'
							: 'hover:bg-gray-100'} {selectedLang === lang ? 'bg-gray-100 font-bold' : ''}"
						on:click={() => !isDisabled(lang) && selectLanguage(lang)}
						disabled={isDisabled(lang)}
					>
						{lang}
					</button>
				{/each}
			</div>
		</div>
	{/if}
</div>
