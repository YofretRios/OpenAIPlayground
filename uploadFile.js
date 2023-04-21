import { openai } from "./index.js";
import fs from "fs";

/**
 * Upload prepared data for fine tuning, data was prepared with the following command from OpenAI CLI: `openai tools fine_tunes.prepare_data -f ./training_data.jsonl`
 * This process only uploads the file to be fine-tuned
 */
(async function upload() {
  try {
    const response = await openai.createFile(
      fs.createReadStream("./training_data_prepared.jsonl"),
      "fine-tune"
    );

    console.log('File ID: ', response.data.id)
  } catch (err) {
    console.log(err);
  }
})();


// Created File ID: file-eiZPFSK4IZ4GpKh4bG2IrDFk