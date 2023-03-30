import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPEN_API_KEY,
});
const openai = new OpenAIApi(configuration);

const handler = async (req, res) => {
  try {
    const { chat } = req.body;
    console.log(chat);
    if (!chat) {
      return res.status(400).json({ error: "Prompt missing" });
    }

    const completion = await openai.createChatCompletion({
        model:"gpt-3.5-turbo",
        messages: chat
    });
    res.status(200).json(completion.data.choices);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

export default handler;
