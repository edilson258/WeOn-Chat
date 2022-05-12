import "./homeStyle.css";
import type { FC, ReactElement } from "react";
import { ChatRightTextFill } from "react-bootstrap-icons";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Message from "./components/message/Message";
import { MessageProps }  from "./components/message/Message"

const Home:FC = ():ReactElement => {
  
  const msg1:MessageProps = {
    sender: "John Harvard",
    message: "Hi, how are you?"
  }
  
  const msg2:MessageProps = {
    sender: "Alice",
    message: "Hi, how are you?"
  }
  
  const msg3:MessageProps = {
    sender: "Bob",
    message: "Hi, how are you?"
  }
  
  const msg4:MessageProps = {
    sender: "Lorem",
    message: "Hi, how are you?"
  }
  
  const msg5:MessageProps = {
    sender: "Ipsum",
    message: "Hi, how are you?"
  }
  
  const msg6:MessageProps = {
    sender: "Foo",
    message: "Hi, how are you?"
  }
  
  const msg7:MessageProps = {
    sender: "Bar",
    message: "Hi, how are you?"
  }
  
  const msg8:MessageProps = {
    sender: "Manager",
    message: "Hi, how are you?"
  }

  return (
    <div className="">
      <header className="home-header container">
        <Header />
        <Navbar />
      </header>
      
      <main className="messages-wrap container">
        <Message { ...msg1 } />
        <Message { ...msg2 } />
        <Message { ...msg3 } />
        <Message { ...msg4 } />
        <Message { ...msg5 } />
        <Message { ...msg6 } />
        <Message { ...msg7 } />
        <Message { ...msg8 } />
      </main>
      
      <div className="float-btn shadow-md">
        <ChatRightTextFill className="float-icon" />
      </div>
    </div>
  )
}

export default Home;
