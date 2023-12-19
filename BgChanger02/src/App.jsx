import { useState } from "react";
import data from './components/colorListData.json';
import "./App.css";
import BgButton from "./components/BgButton";
const colorList =  data.slice(0,20);

function App() {
  const [color, setColor] = useState("olive");
  const colorChangeHandlear = (_color) => {
    setColor(_color);
  };
console.log(data)
  return (
    <div
      className="h-screen w-screen duration-1000"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex w-auto  inset-x-0 flex-wrap justify-center gap-8  bg-white rounded-3xl  shadow-2xl p-2 m-5 bottom-8">
        {colorList.map((color) => {
          return (
            <BgButton
              key={color.hex}
              text={color.name}
              btnColor={color.rgb}
              ColorHandlear={() => colorChangeHandlear(color.hex)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
