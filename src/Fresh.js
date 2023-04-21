import React, { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState(0);
  const [num3, setNum3] = useState(0);
  const [num4, setNum4] = useState(0);
  const [num5, setNum5] = useState(0);
  const [num6, setNum6] = useState(0);
  const [numberOfMonths, setNumberOfMonths] = useState();
  const [bankBalance, setBankBalance] = useState();
  const [total, setTotal] = useState(0);
  const [client, setClient] = useState(0);
  const [agent, setAgent] = useState(0);

  const handleNum1Change = (event) => {
    setNum1(parseFloat(event.target.value));
  };

  const handleNum2Change = (event) => {
    setNum2(parseFloat(event.target.value));
  };
  const handleNum3Change = (event) => {
    setNum3(parseFloat(event.target.value));
  };
  const handleNum4Change = (event) => {
    setNum4(parseFloat(event.target.value));
  };
  const handleNum5Change = (event) => {
    setNum5(parseFloat(event.target.value));
  };
  const handleNum6Change = (event) => {
    setNum6(parseFloat(event.target.value));
  };
  const handlenumberOfMonthsChange = (event) => {
    setNumberOfMonths(parseFloat(event.target.value));
  };
  const handleSetBankBalanceChange = (event) => {
    setBankBalance(parseFloat(event.target.value));
  };

  const handleClientChange = (event) => {
    setClient(event.target.value);
  };

  const handleAgentChange = (event) => {
    setAgent(event.target.value);
  };

  const handleCalculate = () => {
    setTotal(num1 + num2 + num3 + num4 + num5 + num6);
  };

  // calculations
  const markup = 140000;
  let average = total / numberOfMonths;

  let flispAmount;
  if (average < 3501) {
    flispAmount = "Amount too low. Does not qualify for FLISP";
  } else if (average >= 3501 && average <= 3700) {
    flispAmount = "130505";
  } else if (average >= 3701 && average <= 3900) {
    flispAmount = "129388";
  } else if (average >= 3901 && average <= 4100) {
    flispAmount = "128272";
  } else if (average >= 4101 && average <= 4300) {
    flispAmount = "127155";
  } else if (average >= 4301 && average <= 4500) {
    flispAmount = "126038";
  } else if (average >= 4501 && average <= 4700) {
    flispAmount = "124921";
  } else if (average >= 4701 && average <= 4900) {
    flispAmount = "123805";
  } else if (average >= 4901 && average <= 5100) {
    flispAmount = "122688";
  } else if (average >= 5101 && average <= 5300) {
    flispAmount = "121571";
  } else if (average >= 5301 && average <= 5500) {
    flispAmount = "120454";
  } else if (average >= 5501 && average <= 5700) {
    flispAmount = "119383";
  } else if (average >= 5701 && average <= 5900) {
    flispAmount = "118221";
  } else if (average >= 5901 && average <= 4100) {
    flispAmount = "117105";
  } else if (average >= 6101 && average <= 6300) {
    flispAmount = "115988";
  } else if (average >= 6301 && average <= 6500) {
    flispAmount = "114871";
  } else if (average >= 6501 && average <= 6700) {
    flispAmount = "113754";
  } else if (average >= 6701 && average <= 6900) {
    flispAmount = "112637";
  } else if (average >= 6901 && average <= 7100) {
    flispAmount = "111521";
  } else if (average >= 7101 && average <= 7300) {
    flispAmount = "110404";
  } else if (average >= 7301 && average <= 7500) {
    flispAmount = "109287";
  } else if (average >= 7501 && average <= 7700) {
    flispAmount = "108170";
  } else if (average >= 7701 && average <= 7900) {
    flispAmount = "107054";
  } else if (average >= 7901 && average <= 8100) {
    flispAmount = "105937";
  } else if (average >= 8101 && average <= 8300) {
    flispAmount = "104820";
  } else if (average >= 8301 && average <= 8500) {
    flispAmount = "103703";
  } else if (average >= 8501 && average <= 8700) {
    flispAmount = "102587";
  } else if (average >= 8701 && average <= 8900) {
    flispAmount = "101470";
  } else if (average >= 8901 && average <= 9100) {
    flispAmount = "100353";
  } else if (average >= 9101 && average <= 9300) {
    flispAmount = "99237";
  } else if (average >= 9301 && average <= 9500) {
    flispAmount = "98120";
  } else if (average >= 9501 && average <= 9700) {
    flispAmount = "97003";
  } else if (average >= 9701 && average <= 9900) {
    flispAmount = "95886";
  } else if (average >= 9901 && average <= 10100) {
    flispAmount = "94771";
  } else if (average >= 10101 && average <= 10300) {
    flispAmount = "93654";
  } else if (average >= 10501 && average <= 10700) {
    flispAmount = "92537";
  } else if (average >= 10701 && average <= 10900) {
    flispAmount = "90304";
  } else if (average >= 10901 && average <= 11100) {
    flispAmount = "89187";
  } else if (average >= 11101 && average <= 11300) {
    flispAmount = "88070";
  } else if (average >= 11301 && average <= 11500) {
    flispAmount = "86954";
  } else if (average >= 11501 && average <= 11700) {
    flispAmount = "85837";
  } else if (average >= 11701 && average <= 11900) {
    flispAmount = "84720";
  } else if (average >= 11901 && average <= 12100) {
    flispAmount = "83603";
  } else if (average >= 12101 && average <= 12300) {
    flispAmount = "82487";
  } else if (average >= 12301 && average <= 12500) {
    flispAmount = "81370";
  } else if (average >= 12501 && average <= 12700) {
    flispAmount = "80253";
  } else if (average >= 12701 && average <= 12900) {
    flispAmount = "79136";
  } else if (average >= 12901 && average <= 13100) {
    flispAmount = "78020";
  } else if (average >= 13101 && average <= 13300) {
    flispAmount = "76903";
  } else if (average >= 13301 && average <= 13500) {
    flispAmount = "75786";
  } else if (average >= 13501 && average <= 13700) {
    flispAmount = "74670";
  } else if (average >= 13701 && average <= 13900) {
    flispAmount = "73553";
  } else if (average >= 13901 && average <= 14100) {
    flispAmount = "72436";
  } else if (average >= 14101 && average <= 14300) {
    flispAmount = "71319";
  } else if (average >= 14301 && average <= 14500) {
    flispAmount = "70203";
  } else if (average >= 14501 && average <= 14700) {
    flispAmount = "69086";
  } else if (average >= 14701 && average <= 14900) {
    flispAmount = "67969";
  } else if (average >= 14901 && average <= 15000) {
    flispAmount = "66852";
  } else if (average >= 15001 && average <= 15200) {
    flispAmount = "65736";
  } else if (average >= 15201 && average <= 15400) {
    flispAmount = "64619";
  } else if (average >= 15401 && average <= 15600) {
    flispAmount = "63502";
  } else if (average >= 15601 && average <= 15800) {
    flispAmount = "62385";
  } else if (average >= 15801 && average <= 16000) {
    flispAmount = "61269";
  } else if (average >= 16001 && average <= 16200) {
    flispAmount = "60152";
  } else if (average >= 16201 && average <= 16400) {
    flispAmount = "59035";
  } else if (average >= 16401 && average <= 16600) {
    flispAmount = "57919";
  } else if (average >= 16601 && average <= 16800) {
    flispAmount = "56802";
  } else if (average >= 16801 && average <= 17000) {
    flispAmount = "55685";
  } else if (average >= 17001 && average <= 17200) {
    flispAmount = "54568";
  } else if (average >= 17201 && average <= 17400) {
    flispAmount = "53452";
  } else if (average >= 17401 && average <= 17600) {
    flispAmount = "52335";
  } else if (average >= 17601 && average <= 18000) {
    flispAmount = "51219";
  } else if (average >= 18001 && average <= 18200) {
    flispAmount = "50102";
  } else if (average >= 18201 && average <= 18400) {
    flispAmount = "48986";
  } else if (average >= 18401 && average <= 18600) {
    flispAmount = "47869";
  } else if (average >= 18601 && average <= 19000) {
    flispAmount = "46752";
  } else if (average >= 19001 && average <= 19200) {
    flispAmount = "45636";
  } else if (average >= 19201 && average <= 19400) {
    flispAmount = "44519";
  } else if (average >= 19401 && average <= 19600) {
    flispAmount = "43402";
  } else if (average >= 19601 && average <= 19800) {
    flispAmount = "42285";
  } else if (average >= 19801 && average <= 20000) {
    flispAmount = "41168";
  } else if (average >= 20001 && average <= 20200) {
    flispAmount = "40052";
  } else if (average >= 20201 && average <= 20400) {
    flispAmount = "38935";
  } else if (average >= 20401 && average <= 20600) {
    flispAmount = "37818";
  } else if (average >= 20601 && average <= 20800) {
    flispAmount = "36702";
  } else if (average >= 20801 && average <= 21000) {
    flispAmount = "35585";
  } else if (average >= 21001 && average <= 21200) {
    flispAmount = "34468";
  } else if (average >= 21201 && average <= 21400) {
    flispAmount = "33351";
  } else if (average >= 21401 && average <= 21600) {
    flispAmount = "32235";
  } else if (average >= 21601 && average <= 21800) {
    flispAmount = "31118";
  } else if (average >= 21801 && average <= 22000) {
    flispAmount = "30001";
  } else {
    flispAmount = "No FLISP subsidy available, check your input";
  }

  const flispConverted = Math.floor(+flispAmount / 1000) * 1000;

  console.log(typeof flispConverted);

  const buyingPower = flispConverted + bankBalance - markup;

  return (
    <div>
      <label>Month 1: </label>
      <input type="number" value={num1} onChange={handleNum1Change} />
      <br />
      <label>Month 2: </label>
      <input type="number" value={num2} onChange={handleNum2Change} />
      <br />
      <label>Month 3: </label>
      <input type="number" value={num3} onChange={handleNum3Change} />
      <br />
      <label>Month 4: </label>
      <input type="number" value={num4} onChange={handleNum4Change} />
      <br />
      <label>Month 5: </label>
      <input type="number" value={num5} onChange={handleNum5Change} />
      <br />
      <label>Month 6: </label>
      <input type="number" value={num6} onChange={handleNum6Change} />
      <br />
      <br />
      <label>Number of months: </label>
      <input
        type="number"
        value={numberOfMonths}
        onChange={handlenumberOfMonthsChange}
      />
      <br />
      <br />
      <label>Bank Amount </label>
      <input
        type="number"
        value={bankBalance}
        onChange={handleSetBankBalanceChange}
      />
      <br />
      <label>Client name: </label>
      <input type="text" value={client} onChange={handleClientChange} />
      <br />
      <label>Agent name: </label>
      <input type="text" value={agent} onChange={handleAgentChange} />
      <br />
      <br />
      <button onClick={handleCalculate}>Calculate</button>
      <br />
      <br />
      <label>Total salary: R{total}</label>
      <p>Average salary: R{average}</p>
      <p>Flisp Amount: R{flispAmount}</p>
      <p>***********************</p>
      <p>Client name: {client}</p>
      <p>Collected by: {agent}</p>
      <p>Amount from the bank: R{bankBalance}</p>
      <p>FLISP: R{flispConverted}</p>
      <p>Buying power: R{buyingPower}</p>

    </div>
  );
}

export default Calculator;
