import React, { useState } from "react";
import SearchTechItem from "./SearchTechItem";
import AddTechItem from "./AddTechItem";

const LayoutBulider = () => {
  const [SwitchButton, setSwitchButton] = useState(true);
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", width: "80vw", margin: "0 calc(20vw /2)" }}>
        <button type="submit" onClick={() => setSwitchButton(false)}>
          Add Form
        </button>

        <button type="submit" onClick={() => setSwitchButton(true)}>
          Search Form
        </button>
      </div>

      {SwitchButton ? <SearchTechItem /> : <AddTechItem />}
    </>
  );
};

export default LayoutBulider;
