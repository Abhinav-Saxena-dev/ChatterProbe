import { Configuration, OpenAIApi } from "openai";
import { config } from "dotenv";

config()

const configuration = new Configuration({
  apiKey: process.env.OPEN_API_KEY,
});
const openai = new OpenAIApi(configuration);

const handler = async (req, res) => {
  try {
    const { chat, title } = req.body;
    console.log(chat, title);
    if (!chat) {
      return res.status(400).json({ error: "Prompt missing" });
    }

    const message = [
        {role : 'system', content : `Answer all questions with reference to the research paper named ${title}`},
        ...chat
    ]

    console.log(message);

    const completion = await openai.createChatCompletion({
        model:"gpt-3.5-turbo",
        messages: message
    });
    res.status(200).json(completion.data.choices);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

export default handler;
