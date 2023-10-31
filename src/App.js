import { useState } from "react";
import "./App.css";
import { sendMsgToOpenAI } from "./openai";
function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      text: "Hi, I am ChatGPT",
      isBot: true,
    },
  ]);

  const handleSend = async () => {
    const res = await sendMsgToOpenAI(input);
    // console.log(res);
    setMessages([
      ...messages,
      { text: input, isBot: false },
      { text: res, isBot: true },
    ]);
    setInput("");
  };
  return (
    <div className="App">
      <h1>Hello</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="ask me a question"
      />
      <button type="submit" onClick={handleSend}>
        send
      </button>
      {messages.map((message, i) => {
        return (
          <div key={i}>
            <span>{message.isBot ? "ChatGPT" : "User"}</span>
            <p>{message.text}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
