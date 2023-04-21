import React, { useState } from 'react';

function BankBalance() {
  const [balance, setBalance] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleButtonClick = () => {
    setBalance(inputValue);
    console.log(`Your bank balance is ${inputValue}`);
  }

  return (
    <div>
      <label htmlFor="balanceInput">Enter your bank balance:</label>
      <input 
        type="number"
        id="balanceInput"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleButtonClick}>Print Balance</button>
      
    </div>
  );
}

export default BankBalance;
