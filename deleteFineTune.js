import { openai } from "./index.js";

/**
 * Function to grab the training file and kickstart the fine tuning process
 */
(async function fineTune() {
  try {
    const response = await openai.deleteModel("davinci:ft-firstleaf-2023-04-21-16-39-32");

    console.log('response: ', response)
  } catch (error) {
    console.log("error: ", error.toJSON());
  }
})();
