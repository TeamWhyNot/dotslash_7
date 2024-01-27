import React, { useState } from "react";
import NavbarLogOut from "../components/NavbarLogOut";
import chatboticon from "../assets/chatbot.svg";
import chatboticon2 from "../assets/chatbot2.svg";
import send from "../assets/send.svg";
import { GoogleGenerativeAI } from "@google/generative-ai";

const ChatBot = () => {
  const [inputValue, setInputValue] = useState("");

  const handleClick = async () => {
    const genAI = new GoogleGenerativeAI("AIzaSyA5pe423GwkXbEUI2v7Nr7yBbDnqgAZ2Qg");
    const generationConfig = {
      temperature: 0.9,
      topK: 1,
      topP: 1,
      maxOutputTokens: 2048,
    };

    // ...

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const parts = [
      { text: "how should one behave in front of parents give answer in 100 words" },
    ];

    const result = await model.generateContent({

      contents: [{ role: "user", parts }],
      generationConfig,

    });

    const response = result.response;
    console.log(response.text());



  }

  const [messages, setMessages] = useState([
    { message: "Hello! How can I help you?", isSender: false },
    { message: "Hi there! I have a question.", isSender: true },
    // Add more messages as needed
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputValue);
    const msg = {
      message: inputValue,
      isSender: true,
    };
    const genAI = new GoogleGenerativeAI("AIzaSyA5pe423GwkXbEUI2v7Nr7yBbDnqgAZ2Qg");
    const generationConfig = {
      temperature: 0.9,
      topK: 1,
      topP: 1,
      maxOutputTokens: 2048,
    };

    // ...

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const parts = [
      { text: inputValue },
    ];
    setMessages((prevMessages) => [...prevMessages, msg]);

    setInputValue("");

    const result = await model.generateContent({

      contents: [{ role: "user", parts }],
      generationConfig,

    });

    const response = result.response;
    console.log(response.text());
    const msg2 = {
      message: response.text(),
      isSender: false,
    };
    setMessages((prevMessages) => [...prevMessages, msg2]);

    setInputValue("");
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="desktop h-[100vh] w-full">
      <NavbarLogOut></NavbarLogOut>
      <div className="w-full h-[90%] flex items-center justify-center">
        <div className="bg-gainsboro h-[70%] w-[60%] rounded-2xl  overflow-hidden ">
          <div className="h-[80%] w-full flex flex-col justify-center items-center ">
            <div className="w-[90%] h-[90%] flex flex-col font-inter gap-y-2 overflow-y-auto scrollbar-hidden px-4">
              {/*This is from receiver  */}

              {messages.map((msg, index) => {
                if (!msg.isSender) {
                  return (
                    <div
                      className="flex h-fit w-full items-center gap-x-2"
                      key={index}
                    >
                      <img
                        src={chatboticon2}
                        className="h-[40px] self-start"
                        alt="Sender"
                      ></img>
                      <div
                        className="text-xl rounded-3xl h-fit max-w-[45%] flex items-start justify-start px-8 py-2.5 break-words self-start bg-operator-message-bg text-black"
                        style={{ borderTopLeftRadius: 0 }}
                      >
                        {msg.message}
                      </div>
                    </div>
                  );
                } else if (msg.isSender) {
                  return (
                    <div
                      className="text-xl rounded-3xl h-fit max-w-[45%] flex items-start justify-start px-8 py-2.5 break-words self-end bg-darkOrange text-white  "
                      style={{ borderTopRightRadius: 0 }}
                    >
                      {msg.message}
                    </div>
                  );
                }
              })}
              {/* <div className="flex  h-full w-full items-center gap-x-2">
                <img src={chatboticon2} className="h-[40px] self-start"></img>
                <div
                  className=" text-xl rounded-3xl h-fit max-w-[45%]  flex items-start justify-start px-8 py-2.5 break-words self-start bg-operator-message-bg text-black"
                  style={{ borderTopLeftRadius: 0 }}
                >
                  Lorem ipsum dolor sit amet co Lorem ipsum dolor sit amet co
                  Lorem ipsum dolor sit amet co Lorem ipsum dolor sit amet co
                </div>
              </div> */}

              {/* This is from sender */}
              {/* <div
                className="text-xl rounded-3xl h-fit max-w-[45%] flex items-start justify-start px-8 py-2.5 break-words self-end bg-darkOrange text-white  "
                style={{ borderTopRightRadius: 0 }}
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem,
                ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum
                dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor
                sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit
                amet consectetur adipisicing elit.
              </div> */}
            </div>
          </div>

          <form
            className="h-[20%] w-full flex items-center justify-center"
            onSubmit={handleSubmit}
          >
            <div className="h-[60%] w-[80%] shadow-lg bg-white rounded-3xl overflow-hidden flex items-center justify-center">
              <img src={chatboticon} className="h-full w-[10%] p-1"></img>
              <input
                placeholder="Type something"
                className="w-[80%] h-full font-roboto outline-none"
                value={inputValue}
                onChange={handleInputChange}
              ></input>
              <button
                type="submit"
                className="h-full w-[20%] p-4 cursor-pointer"
              >
                <img src={send} className="h-full w-full" alt="Send"></img>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
