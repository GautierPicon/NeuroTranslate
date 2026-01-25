<script lang="ts">
	export let sourceText: string;
	export let targetText: string;
	export let loading: boolean = false;
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
				<div class="h-4 w-4 animate-spin rounded-full border-2 border-blue-600 border-t-transparent"></div>
				<span class="text-base">Translating...</span>
			</div>
		{:else}
			{targetText}
		{/if}
	</div>
</div>