import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  organization: "org-xuzRNtLLYfHSEoQ9eYdn4sRV",
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export { openai }; 