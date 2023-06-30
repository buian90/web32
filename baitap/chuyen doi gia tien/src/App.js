import React, { useState, useEffect } from 'react';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [exchangeRate, setExchangeRate] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);

  useEffect(() => {
    fetchExchangeRate();
  }, [fromCurrency, toCurrency]);

  const fetchExchangeRate = async () => {
    try {
      const response = await fetch(
        `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
      );
      const data = await response.json();
      setExchangeRate(data.rates[toCurrency]);
    } catch (error) {
      console.error('Error fetching exchange rate:', error);
    }
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleFromCurrencyChange = (event) => {
    setFromCurrency(event.target.value);
  };

  const handleToCurrencyChange = (event) => {
    setToCurrency(event.target.value);
  };

  const handleConvert = () => {
    const convertedValue = amount * exchangeRate;
    setConvertedAmount(convertedValue);
  };

  return (
    <div>
      <h1>Currency Converter</h1>
      <div>
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={handleAmountChange}
          />
        </label>
      </div>
      <div>
        <label>
          From Currency:
          <select value={fromCurrency} onChange={handleFromCurrencyChange}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="JPY">JPY</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          To Currency:
          <select value={toCurrency} onChange={handleToCurrencyChange}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="JPY">JPY</option>
          </select>
        </label>
      </div>
      <div>
        <button onClick={handleConvert}>Convert</button>
      </div>
      <div>
        Converted Amount: {convertedAmount.toFixed(2)}</div>
</div>
);
};



const App = () => {
  return (
    <div className="App">
      <CurrencyConverter />
    </div>
  );
};

export default App;

