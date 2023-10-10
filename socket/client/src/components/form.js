import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:4001");

const Form = () => {
  const [inputText, setInputText] = useState("");

  const handleButtonSubmit = () => {
    socket.emit("send_message", { message: inputText });
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      alert(data.message);
    });
  }, [socket]);

  return (
    <div>
      <input
        placeholder="Message..."
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={handleButtonSubmit}>Submit</button>
    </div>
  );
};

export default Form;
