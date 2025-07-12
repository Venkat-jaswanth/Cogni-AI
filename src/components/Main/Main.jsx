import React from "react";
import { MdAddPhotoAlternate } from "react-icons/md";
import { FaMicrophone } from "react-icons/fa6";
import { IoMdSend } from "react-icons/io";

import "./main.css";
const titles = [
   "Ready when you are",
   "Ask me anything",
   "How can I help today?",
   "Start a new conversation",
   "Let’s talk!",
];
const getRandomTitle = () => {
   const index = Math.floor(Math.random() * titles.length);
   return titles[index];
};
const randomTitle = getRandomTitle();
const examples = [
   {
      title: "Explain Life Theories",
      text: "How to get a Girlfriend (cuz u dont have one)",
   },
   {
      title: "Creative writing",
      text: "Write a short story of a happy love life",
   },
   {
      title: "Can Code For You",
      text: "Do you need this really?(first solve problems in your life bud)",
   },
];
const Main = () => {
   return (
      <div className="main">
         <div className="nav">
            <p>Cogni-AI</p>
            {/*PROFILE PIC*/}
            <div className="profile-pic">
               <img
                  src="https://www.w3schools.com/howto/img_avatar.png"
                  alt="Profile"
                  className="profile-image"
               />
            </div>
         </div>
         <div className="main-container">
            <div className="greet">
               <p>
                  <span>Hello</span>👋
               </p>
               <p>{randomTitle}</p>
            </div>
            <div className="cards">
               {examples.map((example, idx) => (
                  <div
                     key={idx}
                     className="card"
                     onClick={() => handleExampleClick(example.text)}
                  >
                     <div className="example-title">{example.title}</div>
                     <div className="example-text">"{example.text}"</div>
                  </div>
               ))}
            </div>
            <div className="main-bottom">
               <div className="search-box">
                  <textarea
                     placeholder="Search for topics or questions..."
                     className="search-input"
                     rows="1"
                     style={{
                        width: "80%",
                        padding: "10px",
                        border: "none",
                        borderRadius: "20px",
                        background: "none",
                        color: "#fff",
                        fontSize: "16px",
                        minHeight: "24px",
                        maxHeight: "15vh",
                        resize: "none",
                        overflowY: "auto",
                        lineHeight: "1.5",
                        fontFamily: "inherit",
                     }}
                     onInput={(e) => {
                        e.target.style.height = "auto";
                        e.target.style.height =
                           Math.min(
                              e.target.scrollHeight,
                              window.innerHeight * 0.15
                           ) + "px";
                     }}
                  />
                  <div>
                     <MdAddPhotoAlternate className="search-icon" />
                     <FaMicrophone className="mic-icon" />
                     <IoMdSend className="send-icon" />
                  </div>
               </div>
               <p className="bottom-info">:beware: - can give fake info: / </p>
            </div>
         </div>
      </div>
   );
};

export default Main;
