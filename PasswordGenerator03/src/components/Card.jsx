import { useEffect } from "react";
import { useRef } from "react";
import { useCallback } from "react";
import { useState } from "react";

function Card() {
  const [length, setLength] = useState(6);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "~!@#$%^&*()_+{}[]:<>,./?";
    for (let index = 0; index < length; index++) {
      const charIndex = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(charIndex);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);
  //useRef
  const passwordRef = useRef(null);
  const copyHandlear = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 25);
    navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <>
      <h1 className="text-white text-center text-2xl font-semibold">
        Password Generator
      </h1>
      <div className="flex flex-row justify-between mt-10">
        <input
          className="block w-9/12 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          type="text"
          value={password}
          ref={passwordRef}
          placeholder="Password"
        ></input>
        <button
          onClick={copyHandlear}
          className="bg-blue-700 px-2 rounded-md text-white font-bold"
        >
          Copy
        </button>
      </div>
      <div className="flex flex-row justify-between mt-8 text-white">
        <div className="flex gap-2">
          <input
            type="range"
            name="range"
            id="range"
            minLength={1}
            min={6}
            max={25}
            step={1}
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
          <label htmlFor="range">( {length} )</label>
        </div>

        <div className="flex gap-2">
          <input
            type="checkbox"
            name="number"
            id="isNumber"
            defaultChecked={numberAllowed}
            onChange={() => setNumberAllowed((pre) => !pre)}
          />
          <label htmlFor="isNumber">Is Number</label>
        </div>
        <div className="flex gap-2">
          <input
            type="checkbox"
            name="Charactor"
            id="isCharactars"
            defaultChecked={charAllowed}
            onChange={() => setcharAllowed((pre) => !pre)}
          />
          <label htmlFor="isCharactars">Is Charactars</label>
        </div>
      </div>
    </>
  );
}

export default Card;
