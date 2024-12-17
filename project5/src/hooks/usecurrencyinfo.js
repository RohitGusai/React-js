import { useEffect, useState } from "react";

function usecurrencyinfo(currency)
{
    const[data,setdata] = useState({})
    useEffect(() => {
      
        fetch(`https://v6.exchangerate-api.com/v6/d4456fd9c066a7bc00e27e9d/latest/{currency}`)
        .then((res) => res.json())
        .then((res) => setdata(res[currency]))
        console.log(data)
    
      
    }, [currency])
    console.log(data)
    return data;
    
}

export default usecurrencyinfo;