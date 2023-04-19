import React from "react";
import "./App.css";
import NavBar from "./NavBar";
import ChatBox from "./ChatBox";
import Welcome from "./Welcome";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <NavBar />
      {!user ? (
        <Welcome />
      ) : (
        <>
          <ChatBox />
        </>
      )}

    </div>   
  );
}

export default App;
