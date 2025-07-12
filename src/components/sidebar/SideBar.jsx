import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { RiChatNewFill } from "react-icons/ri";
import { CiChat1 } from "react-icons/ci";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { VscHistory } from "react-icons/vsc";
import { IoSettingsOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

import "./sideBar.css";

const SideBar = () => {
   const [isExpanded, setIsExpanded] = useState(false);

   const toggleSidebar = () => {
      setIsExpanded(!isExpanded);
   };

   return (
      <div className={`sidebar ${isExpanded ? "expanded" : ""}`} onMouseEnter={() => setIsExpanded(true)} onMouseLeave={() => setIsExpanded(false)}>
         <div className="top">
            {isExpanded ? (
               <RxCross2 className="menu-icon" onClick={toggleSidebar} />
            ) : (
               <IoIosMenu className="menu-icon" onClick={toggleSidebar} />
            )}
            <div className="top-item new-chat">
               <RiChatNewFill className="new-chat-icon" />
               <p>New Chat</p>
            </div>
            <div className="top-item recent">
               <p className="recent-title">Recents</p>
               <div className="recent-entry">
                  <CiChat1 className="chat-icon" />
                  <p className="recent-entry-text">
                     Prompt goes here... Lorem ipsum dolor sit amet, consectetur
                     adipisicing elit. Fugiat magnam corrupti, repudiandae
                     laudantium ad quos quas deserunt ipsa, ullam adipisci
                     voluptate aperiam, eveniet ipsam necessitatibus delectus
                     facilis sapiente optio? Quae..
                  </p>
               </div>
            </div>
         </div>
         <div className="bottom help">
            <div className="bottom-item activity">
               <VscHistory className="history-icon" />
               <p className="activity-text">Activity</p>
            </div>
            <div className="bottom-item">
               <IoIosHelpCircleOutline className="help-icon" />
               <p>Help</p>
            </div>
            <div className="bottom-item settings">
               <IoSettingsOutline className="settings-icon" />
               <p>Settings</p>
            </div>
         </div>
      </div>
   );
};

export default SideBar;
