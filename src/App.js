import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
const ENDPOINT = "https://pdv-exchange-dev.herokuapp.com";

function App() {
  const [response, setResponse] = useState("");

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);

    socket.on("connect", (data) => {
      console.log("data received from connect:", data);
      setResponse((data && data["message"]) || "empty...");
    });

    socket.on("recent_data", (data) => {
      console.log("data received from recent_data:", data);
      setResponse((data && data["message"]) || "empty...");
    });
  }, []);

  return <div>Response: {response}</div>;
}

export default App;
