import { useState } from "react";
import useCurrencyInfo from "../../hooks/useCurrencyInfo";
import InputBox from "./InputBox";

function InputBody() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertAmount, setConvertAmount] = useState(0);
  const data = useCurrencyInfo(from);
  const currencyOpctions = Object.keys(data);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertAmount(amount);
    setAmount(convertAmount);
  };

  const convert = () => {
    console.log(amount, data[to]);
    setConvertAmount(amount * data[to]);
  };
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat bg-slate-800"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/259209/pexels-photo-259209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
      objectFit:"cover"

      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                amountDisable={false}
                currencyDisable={false}
                onAmountChange={(amoun) => {
                  setAmount(amoun);
                }}
                onCurrencyChange={(from) => setFrom(from)}
                selectCurrency={from}
                currencyOpction={currencyOpctions}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertAmount}
                amountDisable={true}
                currencyDisable={false}
                onCurrencyChange={(to) => setTo(to)}
                selectCurrency={to}
                currencyOpction={currencyOpctions}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              <span className="font-semibold"> {from.toUpperCase()} </span>
              Convert
              <span className="font-semibold"> {to.toUpperCase()}</span>
            </button>
       
          </form>
        </div>
      </div>
    </div>
  );
}

export default InputBody;
