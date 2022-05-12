import "./chatHeaderStyle.css";
import type { FC, ReactElement } from "react";
import { ArrowLeft, CircleFill, TelephoneFill, CameraVideoFill, ThreeDotsVertical } from "react-bootstrap-icons";

const ChatHeader:FC = ():ReactElement => {
  return (
    <div className="chat-header">
     
      <div className="ch-f-actions">
        <div className="ch-out">
          <ArrowLeft className="ch-icon back" />
          <span className="ch-peer-picture"></span>
        </div>
        
        <div className="ch-info">
          <span className="ch-peer-name">John Harvard</span>
          <div className="ch-peer-online">
            <CircleFill className="ch-icon online" />
            <span className="ch-peer-online-status">online</span> 
          </div>
        </div>
      </div>
      
      <div className="ch-sec-actions">
        <TelephoneFill className="ch-s-icon phone-call"/>
        <CameraVideoFill className="ch-s-icon video-call"/>
        <ThreeDotsVertical className="ch-s-icon other-options"/>
      </div>

    </div>
  )
}

export default ChatHeader;
