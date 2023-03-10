import React, { useState, useEffect } from "react";
import moment from "moment";

const App = () => {
  const [datetime, setDatetime] = useState(
    moment().format("MMMM Do YYYY, h:mm:ss a")
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setDatetime(moment().format("MMMM Do YYYY, h:mm:ss a"));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p id="datetime">{datetime}</p>
    </div>
  );
};

export default App;
