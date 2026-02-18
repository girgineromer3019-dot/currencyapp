import './Currency.css'
import { FaMoneyBillTransfer } from "react-icons/fa6";

function Currency() {
  return (
    <div className="currency-div">

      <h2 className="title">Currency Conversion</h2>

      <input type="number" className="amount" placeholder="Miktar" />

      <select className="from-currency-amount">
        <option value="EUR">EUR</option>
        <option value="USD">USD</option>
        <option value="GBP">GBP</option>
        <option value="JPY">JPY</option>
        <option value="TRY">TRY</option>
      </select>

      <div className="icon-wrapper">
        <FaMoneyBillTransfer className="transfer-icon" />
      </div>

      <select className="to-currency-amount">
        <option value="TRY">TRY</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
        <option value="JPY">JPY</option>
      </select>

      <input type="number" className="amount" placeholder="Sonuç" />

      <div>
        <button className="convert-button">Convert</button>
      </div>

    </div>
  );
}

export default Currency
