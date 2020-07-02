import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import axios from "axios";

const HEROKU_ENDPOINT = "https://pdv-exchange-dev.herokuapp.com";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTkzMTgwNjYyfQ.MHW_QsE9RNVqdxbGcMBjiynV7J7orUqBAl-Sy8-W2p0";

function App() {
  const [response, setResponse] = useState("");

  useEffect(() => {
    const socket = socketIOClient(HEROKU_ENDPOINT);
    // const socket = socketIOClient(":3000");

    socket.on("connect", (data) => {
      console.log("data received from connect:", data);
      setResponse((data && data["message"]) || "empty...");
    });

    socket.on("connect_data", (data) => {
      console.log("data received from connect_data:", data);
      setResponse((data && data["message"]) || "empty...");
    });

    socket.on("recent_data", (data) => {
      console.log("data received from recent_data:", data);
      setResponse((data && data["message"]) || "empty...");
    });
  }, []);

  // useEffect(() => {
  //   (async () => {
  //     console.log("fetching");
  //     const response = await axios.get(
  //       "https://pdv-exchange-dev.herokuapp.com/ohlc",
  //       {
  //         interval: 60,
  //         since: 1593400319,
  //       },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${TOKEN}`,
  //         },
  //       }
  //     );
  //     console.log(response);
  //     console.log(response.data);
  //     console.log(response.data.length);
  //   })();
  // }, []);

  return <div>Response: {response}</div>;
}

export default App;
