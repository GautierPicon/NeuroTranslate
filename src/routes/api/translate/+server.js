import ollama from 'ollama';
import { json } from '@sveltejs/kit';

export async function POST({ request }) {
	const { text } = await request.json();

	if (!text) {
		return json({ error: 'No text provided' }, { status: 400 });
	}

	const response = await ollama.chat({
		model: 'translategemma:4b',
		messages: [
			{
				role: 'user',
				content: `Translate this text to English:\n\n${text}`
			}
		]
	});

	return json({
		translation: response.message.content
	});
}
