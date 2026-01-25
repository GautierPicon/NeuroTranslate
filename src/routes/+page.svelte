<script lang="ts">
	import Header from '$lib/components/header.svelte';
	import LanguageToolbar from '$lib/components/LanguageToolbar.svelte';
	import TranslationPanel from '$lib/components/TranslationPanel.svelte';

	let sourceText: string = '';
	let targetText: string = '';
	let loading: boolean = false;
	let timeout: ReturnType<typeof setTimeout>;

	const languages = ['French', 'English', 'Spanish', 'German', 'Japanese'];

	let sourceLang: string = 'Detect language';
	let targetLang: string = 'English';

	async function translate(text: string, src: string, tgt: string): Promise<void> {
		if (!text) {
			targetText = '';
			return;
		}
		loading = true;

		const res = await fetch('/api/translate', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				text,
				source: src === 'Detect language' ? 'auto' : src,
				target: tgt
			})
		});

		const data: { translation: string } = await res.json();
		targetText = data.translation;
		loading = false;
	}

	$: {
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			translate(sourceText, sourceLang, targetLang);
		}, 300);
	}

	function swapLanguages() {
		if (sourceLang !== 'Detect language') {
			const temp = sourceLang;
			sourceLang = targetLang;
			targetLang = temp;
		}
	}
</script>

<main class="min-h-screen bg-gray-50 p-4 font-sans text-gray-800">
	<Header />

	<div class="mx-auto max-w-6xl pt-5">
		<LanguageToolbar bind:sourceLang bind:targetLang {languages} onSwap={swapLanguages} />

		<TranslationPanel bind:sourceText {targetText} {loading} />
	</div>
</main>
