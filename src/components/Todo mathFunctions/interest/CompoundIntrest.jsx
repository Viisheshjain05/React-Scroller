// Todo
// To Calculate Compont Intrest for years on
// Parameters [No.OF Years, IntrestValue, startingAmount ]
import React, { useState } from "react";

const CompoundIntrest = (props) => {
  const [CompoundValues, setCompoundValues] = useState({ years: "10", amount: "1000", intrestPer: "10" });
  const [CompoundCalculatedValue, setCompoundCalculatedValue] = useState("");

  const handleSubmit = () => {
    let { years, amount, intrestPer } = CompoundValues;
    const arr = [];
    years = parseInt(years);
    intrestPer = parseInt(intrestPer);
    amount = parseInt(amount);

    for (let i = 0; i < years; i++) {
      //   const calcIntr = amount * intrestPer;
      //   if (arr)
      if (!arr.length) {
        const oneYearAmount = amount + amount / intrestPer;
        console.log("handleSubmit ~ oneYearAmount", oneYearAmount);
        arr.push(oneYearAmount);
      }

      if (arr.length) {
        // const lastYearAmount = arr[-1]
        const value = arr[arr.length - 1];
        const lastYearAmount = value + value / intrestPer;
        console.log("handleSubmit ~ lastYearAmount", lastYearAmount);
        arr.push(lastYearAmount);
      }
    }
    setCompoundCalculatedValue(arr);
  };

  return (
    <>
      <div className="">
        <p> No.Of Years</p>
        <input type="number" onChange={(e) => setCompoundValues({ ...CompoundValues, years: e.target.value })} />
      </div>

      <div className="">
        <p> Starting Amount</p>
        <input type="number" onChange={(e) => setCompoundValues({ ...CompoundValues, amount: e.target.value })} />
      </div>

      <div className="">
        <p> IntrestValue </p>
        <input type="number" onChange={(e) => setCompoundValues({ ...CompoundValues, intrestPer: e.target.value })} />
      </div>

      <div className="">
        <button onClick={() => handleSubmit()}> GetValue </button>
      </div>

      <div>
        Calculated Value As per Year
        {CompoundCalculatedValue
          ? CompoundCalculatedValue.map((e, ind) => {
              return (
                <>
                  <ul>
                    <li> Amount + Intrest On Year {ind} </li>
                    <span>{Math.round(e)}</span>
                  </ul>
                </>
              );
            })
          : null}
      </div>
    </>
  );
};

export default CompoundIntrest;
