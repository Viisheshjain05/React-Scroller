import React, { useState } from "react";
import SearchTechItem from "./SearchTechItem";
import AddTechItem from "./AddTechItem";

const LayoutBulider = () => {
  const [SwitchButton, setSwitchButton] = useState(true);
  return (
    <>
    <div>
      
        <button style={{ marginLeft: "10em" }} type="submit" onClick={() => setSwitchButton(false)}>
          Add Form
        </button>

        <button style={{ marginLeft: "55em" }} type="submit" onClick={() => setSwitchButton(true)}>
          Search Form
        </button>
    </div>

      {SwitchButton ? <SearchTechItem /> : <AddTechItem />}
    </>
  );
};

export default LayoutBulider;
