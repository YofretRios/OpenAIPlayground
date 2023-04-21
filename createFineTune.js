import { openai } from "./index.js";

/**
 * Function to grab the training file and kickstart the fine tuning process
 */
(async function fineTune() {
  try {
    const response = await openai.createFineTune({
      training_file: "file-eiZPFSK4IZ4GpKh4bG2IrDFk",
      model: "davinci",
    });

    console.log('response: ', response)
  } catch (error) {
    console.log("error: ", error);
  }
})();
