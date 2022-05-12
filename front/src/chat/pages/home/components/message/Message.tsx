import "./messageStyle.css";
import type { FC, ReactElement } from "react";

export interface MessageProps {
  sender:string;
  message:string;
}

const Message:FC<MessageProps> = (props):ReactElement => {
  
  return (
    <div className="message">
      
      <div className="sender-picture"> 
        <span></span>
      </div>
        
      <div className="message-details"> 
        
        <div className="message-sender-date">
          <p>{ props.sender }</p>
          <span>10:51</span>
        </div>
        
        <div>
          <span className="message-body">{ props.message }</span>
        </div>

      </div>
    </div>
  )
}

export default Message;
