import "./chatStyle.css";
import type { FC, ReactElement } from "react";
import ChatHeader from "./components/chat-header/ChatHeader";
import MsgInput from "./components/msg-input/MsgInput";

const Chat:FC = ():ReactElement => {
  return (
    <div className="main-chat">
      <ChatHeader />
      <MsgInput /> 
    </div>
  )
}

export default Chat;
