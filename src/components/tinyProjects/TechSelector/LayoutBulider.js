import React, { useState } from "react";
// import FormOptionBtnTemplate from "./component/FormOptionBtnTemplate";
// import FormOptionSelectTemplate from "./component/FormOptionSelectTemplate";
import SearchTechItem from "./SearchTechItem";
import SearchTechItemDUPLICATE from "./SearchTechItemDUPLICATE";

const LayoutBulider = () => {
  const [SelectLayout, setSelectLayout] = useState(true);
  return (
    <>
      <button onClick={() => (SelectLayout ? setSelectLayout(false) : setSelectLayout(true))}>Change Layout</button>

      {SelectLayout ? <SearchTechItem /> : <SearchTechItemDUPLICATE />}
    </>
  );
};

export default LayoutBulider;
