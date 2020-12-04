import React, { useState } from "react";
import FormOptionSelectTemplate from "./component/FormComponents/FormOptionSelectTemplate";
import TechMediaTemplate from "./component/TechMediaTemplate";
import Tech from "./Tech.json";
import "./component/FormComponents/css/FormOptionBtnTemplate.css";

const SearchTechItemDUPLICATE = () => {
  const [PrimaryOption, setPrimaryOption] = useState("");
  const [SecondaryOption, setSecondaryOption] = useState("");
  const [TersiaryOption, setTersiaryOption] = useState("");

  const renderFormOption = () => {
    return (
      <>
        <div className="InputFormTemplate ViewInputForm">
          <FormOptionSelectTemplate props={{ LabelText: "Select your Stack", ValueOptions: ["Front-end Development", "Back-end Development"] }} selectedValue={(e) => setPrimaryOption(e)} />

          <FormOptionSelectTemplate props={{ LabelText: "Select your Tech", ValueOptions: ["Html", "Css", "JS"] }} selectedValue={(e) => setSecondaryOption(e)} />

          <FormOptionSelectTemplate props={{ LabelText: "Select For Tags/Attir Looking For", ValueOptions: ["StyleGuide", "Development"] }} selectedValue={(e) => setTersiaryOption(e)} />
        </div>
        <p>
          {" "}
          Tags Selected : {PrimaryOption} {SecondaryOption} {TersiaryOption}{" "}
        </p>
        {/* {console.log(arr, filteredP, PrimaryOption)}   */}
        <TechMediaTemplate props={arr} extraProps={filteredT} /> {/* 2 Options Either filteredT or arr */}
      </>
    );
  };

  // TODO apply functionality of all selected units at once

  const filteredP = Tech.filter((e) => {
    if (e.tags.primaryTag.includes(PrimaryOption.toLowerCase())) {
      return e;
    }
    return null;
  });
  let arr = filteredP;

  const filteredS = filteredP.filter((e) => {
    if (e.tags.secondaryTag.includes(SecondaryOption.toLowerCase())) {
      arr = [e];
      return e;
    }
    return null;
  });

  const filteredT = filteredS.filter((e) => {
    if (e.tags.tersiaryTag.includes(TersiaryOption.toLowerCase())) {
      arr = [e];
      return e;
    }
    return null;
  });

  // TechMediaTemplate(filteredT)

//   filteredP.forEach((e) => console.log("TEchFilterP", e));
//   filteredS.forEach((e) => console.log("TEchFilterS", e));
//   filteredT.forEach((e) => console.log("TEchFilterT", e));
// console.log(`PTag ${PrimaryOption}, STag${SecondaryOption}, TTag${TersiaryOption}`);

return <div>{renderFormOption()}</div>;
};

export default SearchTechItemDUPLICATE;

// const Props = {
// LabelText : "questionLine"
// ValueOptions : [option1 ,option2],
// returnValue : "Selected Option",
// Styles,
// }

// const Tech = {
//     "name": "KSS",
//     "imagUrl": "http://placehold.it/400x200&text=slide1",
//     "tags": {
//         "primaryTag": "Front-end Development",
//         "secondaryTag": "Css",
//         "tersiaryTag": "StyleGuide, Development"
//     },
//     "Links": {
//         "WebsiteUrl": "LOGO TODO",
//         "Instagram": "Front-end Development",
//         "Facebook": "Css",
//         "linkden": "Css",
//         "github": "StyleGuide, Development",
//         "Figma": "StyleGuide, Development"
//     },
//     "ID": "LOGO TODO",
//     "licence": "LOGO TODO"
// }
