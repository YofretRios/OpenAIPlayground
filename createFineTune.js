import { openai } from "./index.js";

/**
 * 3 - Function to grab the training file and kickstart the fine tuning process
 */
(async function fineTune() {
  try {
    const response = await openai.createFineTune({
      training_file: "file-jt7tfKpQYv5MoWjXNGURGB6E",
      validation_file: "file-apnxwriOGUp9hTVozvwJQYrf",
      model: "davinci",
    });

    console.log('response: ', response)
  } catch (error) {
    console.log("error: ", error);
  }
})();
