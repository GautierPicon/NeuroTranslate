import ollama from 'ollama';
import { json } from '@sveltejs/kit';

const languageCodes: Record<string, string> = {
	English: 'en',
	French: 'fr',
	Spanish: 'es',
	German: 'de',
	Japanese: 'ja'
};

export async function POST({ request }: { request: Request }) {
	const { text, source, target }: { text: string; source: string; target: string } =
		await request.json();

	if (!text) {
		return json({ error: 'No text provided' }, { status: 400 });
	}

	if (!target) {
		return json({ error: 'No target language provided' }, { status: 400 });
	}

	const sourceLang: string = source === 'auto' ? 'source language' : source;
	const sourceCode: string = source === 'auto' ? 'auto' : languageCodes[source] || 'unknown';
	const targetCode: string = languageCodes[target] || 'unknown';

	let prompt;
	if (source === 'auto') {
		prompt = `You are a professional translator to ${target} (${targetCode}). Your goal is to accurately convey the meaning and nuances of the original text while adhering to ${target} grammar, vocabulary, and cultural sensitivities. Produce only the ${target} translation, without any additional explanations or commentary. Please translate the following text into ${target}:

${text}`;
	} else {
		prompt = `You are a professional ${sourceLang} (${sourceCode}) to ${target} (${targetCode}) translator. Your goal is to accurately convey the meaning and nuances of the original ${sourceLang} text while adhering to ${target} grammar, vocabulary, and cultural sensitivities. Produce only the ${target} translation, without any additional explanations or commentary. Please translate the following ${sourceLang} text into ${target}:

${text}`;
	}

	const response = await ollama.chat({
		model: 'translategemma:4b',
		messages: [
			{
				role: 'user',
				content: prompt
			}
		]
	});

	return json({
		translation: response.message.content
	});
}
