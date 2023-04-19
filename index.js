import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  organization: "org-xuzRNtLLYfHSEoQ9eYdn4sRV",
  apiKey: process.env.OPENAI_API_KEY,
});

(async function createCompletion() {
  const openai = new OpenAIApi(configuration);
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "You are now a Wine Expert, Which wine",
    temperature: 0,
    max_tokens: 1000,
  });

  console.log(response.data);
})();

