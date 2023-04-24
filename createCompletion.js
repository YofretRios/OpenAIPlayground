import { openai } from "./index.js";

const prompt = process.argv[2];
const temperature = process.argv[3];
const maxTokens = process.argv[4];

(async function createCompletion() {
  const response = await openai.createCompletion({
    model: "davinci:ft-firstleaf-2023-04-21-17-36-25",
    prompt: prompt,
    temperature: temperature || 0,
    max_tokens: maxTokens || 1,
  });

  if (response.data) {
    console.log('prompt:', prompt);
    console.log('response:', response.data.choices);
  }
})();
