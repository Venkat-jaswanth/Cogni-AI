import React, { useEffect, useRef, useState } from "react";
import "./ChatUI.css";

const ChatUI = () => {
   const [messages, setMessages] = useState([]);
   const [input, setInput] = useState("");
   const [isTyping, setIsTyping] = useState(false);
   const [showCenteredInput, setShowCenteredInput] = useState(false);
   const chatEndRef = useRef(null);

   const scrollToBottom = () => {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
   };

   useEffect(() => {
      scrollToBottom();
   }, [messages]);

   const handleInputChange = (e) => {
      const value = e.target.value;
      setInput(value);

      if (messages.length === 0) {
         if (value.trim() && !isTyping) {
            setIsTyping(true);
            setTimeout(() => setShowCenteredInput(true), 200);
         } else if (!value.trim() && isTyping) {
            setShowCenteredInput(false);
            setTimeout(() => setIsTyping(false), 400);
         }
      }
   };

   const handleSend = () => {
      if (!input.trim()) return;

      // Reset animation states
      setIsTyping(false);
      setShowCenteredInput(false);

      const newMessages = [
         ...messages,
         { type: "user", text: input },
         { type: "bot", text: "Thinking..." }, // Simulate bot response
      ];
      setMessages(newMessages);
      setInput("");

      // Simulate response after delay
      setTimeout(() => {
         setMessages((prev) => [
            ...prev.slice(0, -1), // remove "Thinking..."
            {
               type: "bot",
               text: "Hello! I'm here to help you with any questions or tasks you might have. Feel free to ask me about anything you'd like to know or discuss!",
            },
         ]);
      }, 1500);
   };

   const handleExampleClick = (exampleText) => {
      setInput(exampleText);
      setIsTyping(true);
      setTimeout(() => setShowCenteredInput(true), 200);
   };

   const examples = [
      {
         title: "Explain concepts",
         text: "Explain quantum computing in simple terms",
      },
      {
         title: "Creative writing",
         text: "Write a short story about a time traveler",
      },
      {
         title: "Problem solving",
         text: "Help me plan a productive daily routine",
      },
   ];

   return (
      <div
         className={`chat-container ${messages.length > 0 ? "has-messages" : ""}`}
      >
         {/* Header */}
         <div className="chat-header">Cogni-AI</div>

         {/* Chat Messages or Welcome Screen */}
         <div className="chat-messages">
            {messages.length === 0 ? (
               <div className={`welcome-screen ${isTyping ? "typing" : ""}`}>
                  <h1 className={`welcome-title ${isTyping ? "typing" : ""}`}>
                     How can I help you today?
                  </h1>
                  <p className={`welcome-subtitle ${isTyping ? "typing" : ""}`}>
                     I'm here to assist you with questions, creative tasks,
                     problem-solving, and more.
                  </p>
                  <div
                     className={`welcome-examples ${isTyping ? "typing" : ""}`}
                  >
                     {examples.map((example, idx) => (
                        <div
                           key={idx}
                           className="example-card"
                           onClick={() => handleExampleClick(example.text)}
                        >
                           <div className="example-title">{example.title}</div>
                           <div className="example-text">"{example.text}"</div>
                        </div>
                     ))}
                  </div>
               </div>
            ) : (
               messages.map((msg, idx) => (
                  <div
                     key={idx}
                     className={`message-wrapper ${
                        msg.type === "user"
                           ? "user-wrapper"
                           : msg.type === "bot"
                             ? "bot-wrapper"
                             : "system-wrapper"
                     }`}
                  >
                     <div className="message">
                        <div className="message-content">
                           <div
                              className={`avatar ${
                                 msg.type === "user"
                                    ? "avatar-user"
                                    : "avatar-bot"
                              }`}
                           >
                              {msg.type === "user" ? "U" : "AI"}
                           </div>
                           <div
                              className={`message-text ${
                                 msg.type === "user"
                                    ? "message-user"
                                    : msg.type === "bot"
                                      ? "message-bot"
                                      : "message-system"
                              }`}
                           >
                              {msg.text}
                           </div>
                        </div>
                     </div>
                  </div>
               ))
            )}
            <div ref={chatEndRef} />
         </div>

         {/* Input Area */}
         <div
            className={`chat-input-container ${showCenteredInput ? "centered" : ""} ${messages.length > 0 ? "has-messages" : ""}`}
         >
            <div
               className={`chat-input-wrapper ${showCenteredInput ? "centered" : ""} ${messages.length > 0 ? "has-messages" : ""}`}
            >
               <div
                  className={`chat-input-area ${showCenteredInput ? "centered" : ""} ${messages.length > 0 ? "has-messages" : ""}`}
               >
                  <textarea
                     value={input}
                     onChange={handleInputChange}
                     onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                           e.preventDefault();
                           handleSend();
                        }
                     }}
                     className="chat-input"
                     placeholder="Type here..."
                     rows={1}
                  />
                  <button
                     onClick={handleSend}
                     disabled={!input.trim()}
                     className="send-button"
                  >
                     ↗
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ChatUI;
