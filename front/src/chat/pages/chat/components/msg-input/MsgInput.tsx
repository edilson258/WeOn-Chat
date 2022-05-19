import "./msgInputStyle.css";
import type { FC, ReactElement } from "react";
import { useState, useRef } from "react";
import { EmojiSmile , CameraFill, MicFill, SendFill } from "react-bootstrap-icons";

const MsgInput:FC = ():ReactElement => {

  const [sendTextMessage, setSendTextMessage] = useState(false);
  const messageInput = useRef<HTMLTextAreaElement>(null);
  
  const handleOnInputMessage = () => {
    if (messageInput.current!.value.length > 0)
      setSendTextMessage(true)
    else
      setSendTextMessage(false)
  }

  return (
    <div className="msg-input">
      <div> 
        
        <div className="msg-text">
          <EmojiSmile className="msg-icon smile" />
          <textarea onInput={ handleOnInputMessage } ref={messageInput} placeholder="write some text" className="msg-text-input" rows={1} ></textarea>
          <CameraFill className="msg-icon camera" />
        </div>
        
        <div className="msg-audio">
          {
            sendTextMessage ? 
              <SendFill className="msg-icon mic" /> 
            : 
              <MicFill className="msg-icon mic" /> 
          }
        </div>
      
      </div>
    </div>
  )
}

export default MsgInput;
