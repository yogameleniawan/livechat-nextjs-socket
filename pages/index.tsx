/* eslint-disable react-hooks/exhaustive-deps */
import io from "socket.io-client";
import React, { useState, useEffect, useRef } from "react";
import LobyRoom from "./components/LobyRoom";
import ChatRoom from './components/ChatRoom';
import useChatScroll from "./hooks/useChatScroll";
import DarkMode from './components/DarkMode';

let socket;

type Message = {
  author: string;
  message: string;
  type: string;
};

export default function Home() {
  const [username, setUsername] = useState("");
  const [chosenUsername, setChosenUsername] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Array<Message>>([]);
  const chatbox = useChatScroll(messages);
  
  useEffect(() => {
    fetch("/api/socket");
    socket = io();

    socket.on("newIncomingMessage", (msg) => {
      setMessages((currentMsg) => [
        ...currentMsg,
        { author: msg.author, message: msg.message, type: 'incoming' },
      ]);
    });

    return () => socket.off("newIncomingMessage");
  }, []);  

  const sendMessage = async () => {
    if (message !== '') {
      socket.emit("createdMessage", { author: chosenUsername, message, type: 'send' });
      setMessages((currentMsg) => [
        ...currentMsg,
        { author: chosenUsername, message, type: 'send' },
      ]);
      setMessage("");
    }
  };

  const handleKeypress = (e) => {
    if (e.keyCode === 13) {
      if (message) {
        sendMessage();
      }
    }
  };

  return (
    <div className="dark-mode-main p-4">
      <DarkMode />
      {!chosenUsername ? (
        <LobyRoom username={username} setUsername={setUsername} setChosenUsername={setChosenUsername} />
        ) : (
          <ChatRoom username={username} messages={messages} message={message} setMessage={setMessage} handleKeypress={handleKeypress} sendMessage={sendMessage} chatbox={chatbox} socket={socket}  />
        )
      }
    </div>
  );
}