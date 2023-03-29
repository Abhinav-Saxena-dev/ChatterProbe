import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

const handler = async (req, res) => {
  try {

    const { prompt = "hello" } = req.body;
    if (!prompt) {
      return res.status(400).json({ error: "Prompt missing" });
    }

    if (prompt.length > 100) {
      return res.status(400).json({ error: "Prompt too long" });
    }

    const completion = await openai.createChatCompletion({
        model:"gpt-3.5-turbo",
        messages:[
              {role : "user", content : "Hello ChatGPT"},
          ]
    });
    res.status(200).json(completion.data.choices);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

export default handler;
