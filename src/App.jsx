import React from "react";
import "./App.css"; // Assuming you have a CSS file for global styles
import SideBar from "./components/sidebar/SideBar.jsx";
// import ChatUI from "./components/ChatUI/ChatUI.jsx"; // Assuming you have a Main component
import Main from "./components/main/Main.jsx"; // Assuming you have a Main component

const App = () => {
   return (
      <div className="app-container">
         <SideBar />
         {/* <ChatUI /> */}
         <Main />
      </div>
   );
};

export default App;
