import React, { useState } from "react";

function Appp() {
  const [inputValues, setInputValues] = useState(Array(7).fill(""));
  const [total, setTotal] = useState("");
  const [average, setAverage] = useState("");
  const [flispSubsidy, setFlispSubsidy] = useState("");
  const [flispSubsidyRounded, setFlispSubsidyRounded] = useState("");
  const [bankBalance, setBankBalance] = useState("");

  const handleInputChange = (index, event) => {
    const values = [...inputValues];
    values[index] = event.target.value;
    setInputValues(values);
  };

  const handleCalculate = () => {
    const values = inputValues.filter((value) => value !== "");
    const sum = values.reduce((acc, value) => acc + parseInt(value), 0);
    setTotal(sum.toLocaleString());
    setAverage(
      (sum / values.length).toLocaleString("en-US", {
        maximumFractionDigits: 2,
      })
    );
    handleFlispSubsidy();
    handleBuyingPower(sum);
  };

  const handleFlispSubsidy = () => {
    if (average !== "") {
      const averageSalary = parseInt(average);
      let flispAmount = 0;
      if (averageSalary < 3501) {
        flispAmount = 87000;
      } else if (averageSalary < 4501) {
        flispAmount = 68000;
      } else if (averageSalary < 5501) {
        flispAmount = 48000;
      } else if (averageSalary < 6501) {
        flispAmount = 28000;
      }
      const flispAmountRounded = Math.floor(flispAmount / 1000) * 1000;
      setFlispSubsidy(`R${flispAmount.toLocaleString()}`);
      setFlispSubsidyRounded(`R${flispAmountRounded.toLocaleString()}`);
    }
  };

  const handleBuyingPower = (sum) => {
    if (flispSubsidy !== "" && bankBalance !== "") {
      const flispAmount = parseInt(flispSubsidy.replace(/[^0-9]/g, ""));
      const bankBalanceAmount = parseInt(bankBalance.replace(/[^0-9]/g, ""));
      const buyingPower = flispAmount + bankBalanceAmount + sum - 140000;
      console.log(buyingPower);
    }
  };

  return (
    <div>
      {inputValues.map((value, index) => (
        <input
          type="number"
          value={value}
          onChange={(e) => handleInputChange(index, e)}
          key={index}
        />
      ))}
      <label htmlFor="">Bank balance</label>
      <input
        type="number"
        value={bankBalance}
        onChange={(e) => setBankBalance(e.target.value)}
      />
      <button onClick={handleCalculate}>Calculate</button>
      {total && (
        <div>
          <p>Total: {total}</p>
          <p>Average Salary: {average}</p>
          {flispSubsidy && (
            <p>
              Flisp Subsidy: {flispSubsidy} (Rounded: {flispSubsidyRounded})
            </p>
          )}
          <p>Bank Balance: {bankBalance}</p>
        </div>
      )}
    </div>
  );
}

export default Appp;
