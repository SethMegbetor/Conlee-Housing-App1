import React, { useState } from "react";
import "./InputBoxes.css"; // import CSS file

function InputBoxes() {
  const [values, setValues] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
    input5: "",
    input6: "",
    input7: "",
  });
  const [clicked, setClicked] = useState(false);
  const [total, setTotal] = useState("");
  const [average, setAverage] = useState("");



  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const calculateTotal = () => {
    const nonEmptyValues = Object.values(values).filter(
      (value) => value !== ""
    );
    const count = nonEmptyValues.length;
    const sum = nonEmptyValues.reduce((acc, curr) => acc + parseInt(curr), 0);
    const avg = sum / count;
    setTotal(sum);
    setAverage(avg);

 
  };

  const handleClick = () => {
    calculateTotal();
    setClicked(true);


  
  };

  let flispSubsidy;
  if (average < 3501) {
    flispSubsidy = "Amount too low. Does not qualify for FLISP";
  } else if (average >= 3501 && average <= 3700) {
    flispSubsidy = "R130505";
  } else if (average >= 3701 && average <= 3900) {
    flispSubsidy = "R129388";
  } else if (average >= 3901 && average <= 4100) {
    flispSubsidy = "R128272";
  } else if (average >= 4101 && average <= 4300) {
    flispSubsidy = "127155";
  } else if (average >= 4301 && average <= 4500) {
    flispSubsidy = "126038";
  } else if (average >= 4501 && average <= 4700) {
    flispSubsidy = "124921";
  } else if (average >= 4701 && average <= 4900) {
    flispSubsidy = "123805";
  } else if (average >= 4901 && average <= 5100) {
    flispSubsidy = "122688";
  } else if (average >= 5101 && average <= 5300) {
    flispSubsidy = "121571";
  } else if (average >= 5301 && average <= 5500) {
    flispSubsidy = "120454";
  } else if (average >= 5501 && average <= 5700) {
    flispSubsidy = "119383";
  } else if (average >= 5701 && average <= 5900) {
    flispSubsidy = "118221";
  } else if (average >= 5901 && average <= 6100) {
    flispSubsidy = "117105";
  } else if (average >= 6101 && average <= 6300) {
    flispSubsidy = "115988";
  } else if (average >= 6301 && average <= 6500) {
    flispSubsidy = "114871";
  } else if (average >= 6501 && average <= 6700) {
    flispSubsidy = "113754";
  } else if (average >= 6701 && average <= 6900) {
    flispSubsidy = "112637";
  } else if (average >= 6901 && average <= 7100) {
    flispSubsidy = "111521";
  } else if (average >= 7101 && average <= 7300) {
    flispSubsidy = "110404";
  } else if (average >= 7301 && average <= 7500) {
    flispSubsidy = "109287";
  } else if (average >= 7501 && average <= 7700) {
    flispSubsidy = "108170";
  } else if (average >= 7701 && average <= 7900) {
    flispSubsidy = "107054";
  } else if (average >= 7901 && average <= 8100) {
    flispSubsidy = "105937";
  } else if (average >= 8101 && average <= 8300) {
    flispSubsidy = "104820";
  } else if (average >= 8301 && average <= 8500) {
    flispSubsidy = "103703";
  } else if (average >= 8501 && average <= 8700) {
    flispSubsidy = "102587";
  } else if (average >= 8701 && average <= 8900) {
    flispSubsidy = "101470";
  } else if (average >= 8901 && average <= 9100) {
    flispSubsidy = "100353";
  } else if (average >= 9101 && average <= 9300) {
    flispSubsidy = "99237";
  } else if (average >= 9301 && average <= 9500) {
    flispSubsidy = "98120";
  } else if (average >= 9501 && average <= 9700) {
    flispSubsidy = "97003";
  } else if (average >= 9701 && average <= 9900) {
    flispSubsidy = "95886";
  } else if (average >= 9901 && average <= 10100) {
    flispSubsidy = "94771";
  } else if (average >= 10101 && average <= 10300) {
    flispSubsidy = "93654";
  } else if (average >= 10501 && average <= 10700) {
    flispSubsidy = "92537";
  } else if (average >= 10701 && average <= 10900) {
    flispSubsidy = "90304";
  } else if (average >= 10901 && average <= 11100) {
    flispSubsidy = "89187";
  } else if (average >= 11101 && average <= 11300) {
    flispSubsidy = "88070";
  } else if (average >= 11301 && average <= 11500) {
    flispSubsidy = "86954";
  } else if (average >= 11501 && average <= 11700) {
    flispSubsidy = "85837";
  } else if (average >= 11701 && average <= 11900) {
    flispSubsidy = "84720";
  } else if (average >= 11901 && average <= 12100) {
    flispSubsidy = "83603";
  } else if (average >= 12101 && average <= 12300) {
    flispSubsidy = "82487";
  } else if (average >= 12301 && average <= 12500) {
    flispSubsidy = "81370";
  } else if (average >= 12501 && average <= 12700) {
    flispSubsidy = "80253";
  } else if (average >= 12701 && average <= 12900) {
    flispSubsidy = "79136";
  } else if (average >= 12901 && average <= 13100) {
    flispSubsidy = "78020";
  } else if (average >= 13101 && average <= 13300) {
    flispSubsidy = "76903";
  } else if (average >= 13301 && average <= 13500) {
    flispSubsidy = "75786";
  } else if (average >= 13501 && average <= 13700) {
    flispSubsidy = "74670";
  } else if (average >= 13701 && average <= 13900) {
    flispSubsidy = "73553";
  } else if (average >= 13901 && average <= 14100) {
    flispSubsidy = "72436";
  } else if (average >= 14101 && average <= 14300) {
    flispSubsidy = "71319";
  } else if (average >= 14301 && average <= 14500) {
    flispSubsidy = "70203";
  } else if (average >= 14501 && average <= 14700) {
    flispSubsidy = "69086";
  } else if (average >= 14701 && average <= 14900) {
    flispSubsidy = "67969";
  } else if (average >= 14901 && average <= 15000) {
    flispSubsidy = "66852";
  } else if (average >= 15001 && average <= 15200) {
    flispSubsidy = "65736";
  } else if (average >= 15201 && average <= 15400) {
    flispSubsidy = "64619";
  } else if (average >= 15401 && average <= 15600) {
    flispSubsidy = "63502";
  } else if (average >= 15601 && average <= 15800) {
    flispSubsidy = "62385";
  } else if (average >= 15801 && average <= 16000) {
    flispSubsidy = "61269";
  } else if (average >= 16001 && average <= 16200) {
    flispSubsidy = "60152";
  } else if (average >= 16201 && average <= 16400) {
    flispSubsidy = "59035";
  } else if (average >= 16401 && average <= 16600) {
    flispSubsidy = "57919";
  } else if (average >= 16601 && average <= 16800) {
    flispSubsidy = "56802";
  } else if (average >= 16801 && average <= 17000) {
    flispSubsidy = "55685";
  } else if (average >= 17001 && average <= 17200) {
    flispSubsidy = "54568";
  } else if (average >= 17201 && average <= 17400) {
    flispSubsidy = "53452";
  } else if (average >= 17401 && average <= 17600) {
    flispSubsidy = "52335";
  } else if (average >= 17601 && average <= 18000) {
    flispSubsidy = "51219";
  } else if (average >= 18001 && average <= 18200) {
    flispSubsidy = "50102";
  } else if (average >= 18201 && average <= 18400) {
    flispSubsidy = "48986";
  } else if (average >= 18401 && average <= 18600) {
    flispSubsidy = "47869";
  } else if (average >= 18601 && average <= 19000) {
    flispSubsidy = "46752";
  } else if (average >= 19001 && average <= 19200) {
    flispSubsidy = "45636";
  } else if (average >= 19201 && average <= 19400) {
    flispSubsidy = "44519";
  } else if (average >= 19401 && average <= 19600) {
    flispSubsidy = "43402";
  } else if (average >= 19601 && average <= 19800) {
    flispSubsidy = "42285";
  } else if (average >= 19801 && average <= 20000) {
    flispSubsidy = "41168";
  } else if (average >= 20001 && average <= 20200) {
    flispSubsidy = "40052";
  } else if (average >= 20201 && average <= 20400) {
    flispSubsidy = "38935";
  } else if (average >= 20401 && average <= 20600) {
    flispSubsidy = "37818";
  } else if (average >= 20601 && average <= 20800) {
    flispSubsidy = "36702";
  } else if (average >= 20801 && average <= 21000) {
    flispSubsidy = "35585";
  } else if (average >= 21001 && average <= 21200) {
    flispSubsidy = "34468";
  } else if (average >= 21201 && average <= 21400) {
    flispSubsidy = "33351";
  } else if (average >= 21401 && average <= 21600) {
    flispSubsidy = "32235";
  } else if (average >= 21601 && average <= 21800) {
    flispSubsidy = "31118";
  } else if (average >= 21801 && average <= 22000) {
    flispSubsidy = "30001";
  } else {
    flispSubsidy = "No FLISP subsidy available, check your input";
  }

  const flispAmount = Math.floor(flispSubsidy / 1000) * 1000;
  const flispRounded = flispAmount.toLocaleString();


  return (
    <div>
      <input
        type="text"
        name="input1"
        value={values.input1}
        onChange={handleChange}
        className="input-box"
      />
      <input
        type="text"
        name="input2"
        value={values.input2}
        onChange={handleChange}
        className="input-box"
      />
      <input
        type="text"
        name="input3"
        value={values.input3}
        onChange={handleChange}
        className="input-box"
      />
      <input
        type="text"
        name="input4"
        value={values.input4}
        onChange={handleChange}
        className="input-box"
      />
      <input
        type="text"
        name="input5"
        value={values.input5}
        onChange={handleChange}
        className="input-box"
      />
      <input
        type="text"
        name="input6"
        value={values.input6}
        onChange={handleChange}
        className="input-box"
      />
      <input
        type="text"
        name="input7"
        value={values.input7}
        onChange={handleChange}
        className="input-box"
      />
      <button onClick={handleClick}>Calculate Total and Average</button>
      {clicked && (
        <div>
          <p>Total: {total}</p>
          <p>Average: {average}</p>
          <p>FLISP Subsidy: {flispSubsidy}</p>
          <p>Flisp rounded {flispRounded}</p>
        </div>
      )}

   
    </div>
  );
}

export default InputBoxes;
