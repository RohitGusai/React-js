import { useState } from 'react'
import { Inputbox } from './component'
import usecurrencyinfo from './hooks/usecurrencyinfo'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'

function App() {
const [amount,setamount] = useState();
const [from,setfrom] = useState("usd")
const [to,setto] = useState("inr")

const currencyInfo = usecurrencyinfo(from);

const option = currencyInfo ? Object.keys(currencyInfo) : [];

const swap = () =>
{
    setfrom(to)
    setto(from)
}
  return (
      <div
          className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        //   style={{
        //       backgroundImage: `url('${BackgroundImage}')`,
        //   }}
      >
          <div className="w-full">
              <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                  <form
                      onSubmit={(e) => {
                          e.preventDefault();
                         
                      }}
                  >
                      <div className="w-full mb-1">
                          <Inputbox
                              label="From"
                              amount={amount}
                              selectCurrency={from}
                              onAmountChange={(amount) => setamount(amount)}
                              onCurrencyChange={(currency) => setfrom(currency)}
                              
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
                          <Inputbox
                              label="To"
                            //   amount={amount}
                              selectCurrency={to}
                            //   onAmountChange={(amount) => setamount(amount)}
                              onCurrencyChange={(currency) => setto(currency)}
                              
                          />
                      </div>
                      <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                          Convert 
                      </button>
                  </form>
              </div>
          </div>
      </div>
  );
}

export default App
