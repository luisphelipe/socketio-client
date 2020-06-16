import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:8000";

function App() {
  const [response, setResponse] = useState("");

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);

    socket.on("connect", (data) => {
      console.log("data received from connect:", data);
      setResponse((data && data["message"]) || "empty...");
    });

    socket.on((data) => {
      console.log("data received from send:", data);
      setResponse((data && data["message"]) || "empty...");
    });

    socket.on("job_socket_test", (data) => {
      console.log("data received from job_socket_test:", data);
      setResponse((data && data["message"]) || "empty...");
    });

    socket.on("message", (data) => {
      console.log("data received from message:", data);
      setResponse((data && data["message"]) || "empty...");
    });
  }, []);

  return <div>Response: {response}</div>;
}

export default App;
