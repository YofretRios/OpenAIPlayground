import { openai } from "./index.js";

/**
 * 4 - List fine tunings
 */
(async function fineTune() {
  try {
    const response = await openai.listFineTunes();

    console.log('response: ', response.data.data)
  } catch (error) {
    console.log("error: ", error);
  }
})();
