import { openai } from "./index.js";
import fs from "fs";

/**
 * Upload prepared data for fine tuning, data was prepared with the following command from OpenAI CLI: `openai tools fine_tunes.prepare_data -f ./training_data.jsonl`
 * This process only uploads the file to be fine-tuned
 */
(async function upload() {
  try {
    const response = await openai.createFile(
      fs.createReadStream("./training_ratings_prepared_valid.jsonl"),
      "fine-tune"
    );

    console.log('File ID validation: ', response.data.id)
  } catch (err) {
    console.log(err);
  }
})();


// Created File ID: file-eiZPFSK4IZ4GpKh4bG2IrDFk
// File ID:  file-OdA0WpFsdtfTwVakq72rze4B
// File ID train:  file-jt7tfKpQYv5MoWjXNGURGB6E
// File ID validation:  file-apnxwriOGUp9hTVozvwJQYrf