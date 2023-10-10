import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:4001");

const Room = () => {
  const [inputRoom, setInputRoom] = useState("");
  const [inputText, setInputText] = useState("");

  const handleJoinRoom = () => {
    socket.emit("join_room", inputRoom);
  };

  const handleButtonSubmit = () => {
    socket.emit("send_message", { room: inputRoom, text: inputText });
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      alert(data);
    });
  }, [socket]);

  return (
    <div>
      <div>
        <input
          placeholder="Join room"
          onChange={(e) => setInputRoom(e.target.value)}
        />
        <button onClick={handleJoinRoom}>Join room</button>
      </div>
      <div>
        <input
          placeholder="Message..."
          onChange={(e) => setInputText(e.target.value)}
        />
        <button onClick={handleButtonSubmit}>Submit</button>
      </div>
    </div>
  );
}; 

export default Room;
