import { useState } from "react";

const App = () => {
  const [color, setColor] = useState("lightgray");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed inset-x-0 flex flex-wrap justify-center px-2 bottom-12">
        <div className="flex flex-wrap justify-center gap-3 px-3 py-2 bg-white shadow-lg rounded-3xl">
          {["red", "green", "purple", "cyan"].map((colorName) => (
            <button
              key={colorName}
              className="px-4 py-1 text-white transition-transform transform rounded-full shadow-lg outline-none hover:scale-105"
              onClick={() => setColor(colorName)}
              style={{ backgroundColor: colorName }}
              aria-label={`Set background to ${colorName}`}
            >
              {colorName}
            </button>
          ))}
          <button
            className="px-4 py-1 text-gray-800 transition-transform transform rounded-full shadow-lg outline-none hover:scale-105"
            onClick={() => setColor("lightgray")}
            style={{ backgroundColor: "lightgray" }}
            aria-label="Reset background color"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
