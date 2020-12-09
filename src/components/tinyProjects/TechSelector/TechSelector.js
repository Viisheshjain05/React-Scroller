import React, { useState } from "react";
import SearchTechItem from "./SearchTechItem";
import AddTechItem from "./AddTechItem";

const LayoutBulider = () => {
  const [SelectLayout, setSelectLayout] = useState(true);
  return (
    <>
      <button onClick={() => (SelectLayout ? setSelectLayout(false) : setSelectLayout(true))}>Change Layout</button>

      {SelectLayout ? <AddTechItem /> : <SearchTechItem />}
    </>
  );
};

export default LayoutBulider;
