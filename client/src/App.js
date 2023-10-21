import { useState } from 'react';
import './App.css';
import io from "socket.io-client";

const socket = io.connect("http://localhost:3001")

function App() {
  const[username, setUsername] = useState("");
  const[room, setRoom] =useState("");

  const joinRoom = () => {

    
  }




  return (
    <div className="App">
       <h3>Join a Chat</h3>
       <input type = "text" placeholder='Max Mustermann'></input>
       <input type = "text" placeholder='Room ID'></input>
       <button>Join</button>
    </div>
  );
}

export default App;
