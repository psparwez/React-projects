import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState("8");
  const [isNumberAllowed, setIsNumberAllowed] = useState(false);
  const [isCharacterAllowed, setIsCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const generatePassword = useCallback(() => {
    let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = "0123456789";
    let specialCharacters = "!@#$%^&*()_+=-{}[]|:;<>,.?/~`";
    let password = "";

    if (isNumberAllowed) characters += numbers;
    if (isCharacterAllowed) characters += specialCharacters;

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * characters.length + 1);

      password += characters.charAt(char);
    }

    setPassword(password);
  }, [isCharacterAllowed, isNumberAllowed, length, setPassword]);

  useEffect(() => {
    generatePassword();
  }, [length, isNumberAllowed, isCharacterAllowed, generatePassword]);

  // copy text

  const passwordRef = useRef(null);

  const [btnName, setBtnName] = useState("Copy");

  const copyPasswordToClipboard = useCallback(() => {
    setBtnName("Copied");

    passwordRef.current?.select();
    // window.navigator.clipboard.writeText(password);

    window.navigator.clipboard.writeText(password).then(() => {
      setTimeout(() => {
        passwordRef.current.setSelectionRange(0, 0);
        setBtnName("Copy");
      }, 1500);
    });
  }, [password]);

  return (
    <>
      <div className="max-w-lg py-5 mx-auto mt-10 bg-gray-900 rounded-lg shadow-lg">
        <h1 className="mb-1 text-3xl text-yellow-600 select-none">
          Password Generator
        </h1>
        <div className="w-full p-5">
          <div className="flex flex-wrap items-center justify-start sm:flex-nowrap">
            <input
              type="text"
              value={password}
              ref={passwordRef}
              readOnly
              className="inline-block w-full p-3 text-base text-blue-100 bg-gray-800 shadow-md outline-none pointer-events-none select-none selection:bg-yellow-600 selection:text-black rounded-l-md "
              placeholder="Password"
            />
            <button
              onClick={copyPasswordToClipboard}
              className="block w-full px-6 py-3 mt-2 transition duration-300 bg-yellow-700 cursor-pointer sm:w-fit sm:inline-block sm:mt-0 rounded-r-md hover:bg-yellow-600"
            >
              {btnName}
            </button>
          </div>
          <div className="flex flex-wrap items-center w-11/12 gap-4 mt-5">
            <div className="flex items-center gap-2 cursor-pointer ">
              <input
                type="range"
                min={8}
                max={100}
                value={length}
                id="length"
                onChange={(e) => {
                  setLength(e.target.value);
                }}
                className="cursor-pointer accent-yellow-600 "
              />
              <label
                htmlFor="length"
                className="text-base cursor-pointer select-none text-blue-100/90"
              >
                Length {length}
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="number"
                defaultChecked={isNumberAllowed}
                onChange={() => setIsNumberAllowed((prev) => !prev)}
                className="cursor-pointer accent-yellow-600 "
              />
              <label
                htmlFor="number"
                className="text-base cursor-pointer select-none text-blue-100/90"
              >
                Number
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="character"
                defaultChecked={isCharacterAllowed}
                onChange={() => setIsCharacterAllowed((prev) => !prev)}
                className="cursor-pointer accent-yellow-600"
              />
              <label
                htmlFor="character"
                className="text-base cursor-pointer select-none text-blue-100/90"
              >
                Character
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
