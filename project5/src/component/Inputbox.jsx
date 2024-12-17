import React from 'react'


    function Inputbox({label,className = "" ,
        amount,
        onAmountChange,
        onCurrencyChange,
        currencyOption = [],
        selectCurrency = "usd"}) {
    

        return (
            <div className={`bg-white p-3 rounded-lg text-sm flex`}>
                <div className="w-1/2">
                    <label  className="text-black/40 mb-2 inline-block">
                        {label}
                    </label>
                    <input
                        
                        className="outline-none w-full bg-transparent py-1.5 text-black"
                        type="number"
                        placeholder="Amount"
                        value={amount}
                        onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                    />
                </div>
                <div className="w-1/2 flex flex-wrap justify-end text-right">
                    <p className="text-black mb-2 w-full">Currency Type</p>
                    <label htmlFor="" className='text-black'>{selectCurrency}</label>
                    <select
                        className="rounded-lg px-1 py-1 bg-gray-100 text-black cursor-pointer outline-none"
                        value={selectCurrency}
                        onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}                    
                    >
                                
                            {currencyOption.map((currency) =>
                            {
                                <option key={currency}value={currency}>
                                    {currency}
                                </option>
                            })}
                    
                    </select>
                </div>
            </div>
        );
    }




export default Inputbox;