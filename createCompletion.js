import { openai } from "./index.js";

(async function createCompletion() {
  const response = await openai.createCompletion({
    model: "davinci:ft-firstleaf-2023-04-21-03-44-04",
    prompt: "What is Lens Protocol?",
    temperature: 0,
    max_tokens: 1000,
  });

  if (response.data) {
    console.log(response.data.choices);
  }
})();
