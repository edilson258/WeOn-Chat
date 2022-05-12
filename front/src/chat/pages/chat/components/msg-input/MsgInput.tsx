import "./msgInputStyle.css";
import type { FC, ReactElement } from "react";
import { EmojiSmile , CameraFill, MicFill} from "react-bootstrap-icons";

const MsgInput:FC = ():ReactElement => {
  return (
    <div className="msg-input">
      
      <div className="msg-text">
        <EmojiSmile className="msg-icon smile" />
        <input placeholder="write some text" className="msg-text-input" />
        <CameraFill className="msg-icon camera" />
      </div>
      
      <div className="msg-audio">
        <MicFill className="msg-icon mic" /> 
      </div>

    </div>
  )
}

export default MsgInput;
