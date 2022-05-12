import type { FC, ReactElement } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Home from "./chat/pages/home/Home";
import Chat from "./chat/pages/chat/Chat";

const App:FC = ():ReactElement => {
  return (
    <Chat />    
  );
}

export default App;
