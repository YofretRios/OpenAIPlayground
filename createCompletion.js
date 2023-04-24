import { openai } from "./index.js";

const prompt = process.argv[2];
const temperature = process.argv[3];
const maxTokens = process.argv[4];

// 5 - Create completion using fine-tuned model, in this case we are using davinci (part of the GPT family)
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

/**
 * Pretty standard chianti ->
 * cheap ->
 * "Have been looking for Gewurztraminer and Riesling - nice I finally got one ->
 * May 2018 - does Firstleaf not have any connections with Riesling - seems like California would have some fine examples. ->
 * "I liked this wine, but not sure if this was one of the best white wines I had which I would like to reorder. ->
 * Can this (Tintoretto Rosso) be a part of my next order? I liked its subtle sweetness and depth. ->
 * Average ->
 * Loved this wine ->
 * No sweet wines please ->
 */
