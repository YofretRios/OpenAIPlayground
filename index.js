import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  organization: "org-xuzRNtLLYfHSEoQ9eYdn4sRV",
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

// (async function createCompletion() {
  
//   const response = await openai.createCompletion({
//     model: "text-davinci-003",
//     prompt: "You are now a Wine Expert, Make a List of wines brand under $20 that pairs well with Carbonara, Include the URL of the product and price, only include product from Firstleaf.com",
//     temperature: 0,
//     max_tokens: 1000,
//   });

//   console.log(response.data);
// })();

export { openai }; 