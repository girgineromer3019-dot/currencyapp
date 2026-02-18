import './Currency.css'
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { useState } from 'react';
import axios from 'axios';
import photo from './para.png';

function Currency() {

    const [amount, setAmount] = useState('0');
    const [fromCurrency, setFromCurrency] = useState('EUR');
    const [toCurrency, setToCurrency] = useState('TRY');
    const [result, setResult] = useState('0');

    let BaseURL = `https://open.er-api.com/v6/latest/${fromCurrency}`;
    let API_Key = 'fca_live_75E9ncW4luUwsN94YiFagfnWc2XxGn90uxlJye3D';

    let EXCHANGE_API = `${BaseURL}?base=${fromCurrency}&symbols=${toCurrency}`;


    const exchange = async () => {
    try {
        const response = await axios.get(BaseURL);

        const rate = response.data.rates[toCurrency];
        const calculated = (amount * rate).toFixed(2);

        setResult(calculated);
    } catch (error) {
        console.log("Hata oluştu:", error);
    }
}


  return (
    <div className="currency-div">
        <div><h2 className="title">Currency Conversion</h2></div>
      <input 
        value={amount} 
        onChange={(e) => setAmount(e.target.value)} 
        type="number" 
        className="amount" 
        placeholder="Miktar" 
      />

      <select 
        value={fromCurrency} 
        onChange={(e) => setFromCurrency(e.target.value)} 
        className="from-currency-amount"
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="TRY">TRY</option>
      </select>

      <div className="icon-wrapper">
        <FaMoneyBillTransfer className="transfer-icon" />
      </div>

      <select 
        value={toCurrency} 
        onChange={(e) => setToCurrency(e.target.value)} 
        className="to-currency-amount"
      >
        <option value="TRY">TRY</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
      </select>

      <input 
        value={result} 
        type="number" 
        className="amount" 
        placeholder="Sonuç"
        readOnly
      />

      <div>
        <button onClick={exchange} className="convert-button">
          Convert
        </button>
      </div>

    </div>
  );
}

export default Currency;
