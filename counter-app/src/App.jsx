import { useState } from "react";

import "./App.css";
import Button from "./components/Button";
const App = () => {
  const [counter, setCounter] = useState(0);

  // handle click
  const handleClick = (action) => {
    switch (action) {
      case "add":
        setCounter((prevCounter) => prevCounter + 1);
        break;
      case "diff":
        setCounter((prevCounter) => prevCounter - 1);
        break;
      default:
        console.error("Unknown action:", action);
        return;
    }
  };
  return (
    <div>
      <h1 className="title">Counter App</h1>
      <div className="wrapper">
        <h3>{counter}</h3>
        <div className="buttons">
          {/* -  */}
          <Button
            fuc={handleClick}
            action="diff"
            label="Decrease counter"
            className="diff"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M5 11V13H19V11H5Z"></path>
            </svg>
          </Button>
          {/* +  */}
          <Button
            fuc={handleClick}
            action="add"
            label="Increase counter"
            className=" add"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default App;
