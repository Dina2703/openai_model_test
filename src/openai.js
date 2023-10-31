import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export async function sendMsgToOpenAI(message) {
  const res = await openai.completions.create({
    model: "text-davinci-003",
    prompt: message,
    max_tokens: 256,
  });

  return res.choices[0].text;
}
