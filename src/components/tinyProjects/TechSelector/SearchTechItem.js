import React, { useState } from "react";
import FormOptionTemplate from "./component/FormComponents/FormOptionTemplate";
import TechMediaTemplate from "./component/TechMediaTemplate";
import Tech from "./Tech.json";
import "./component/FormComponents/css/FormOptionTemplate.css";

const SearchTechItemDUPLICATE = () => {
  const [PrimaryOption, setPrimaryOption] = useState([""]);
  const [SecondaryOption, setSecondaryOption] = useState([""]);
  const [TersiaryOption, setTersiaryOption] = useState([""]);

  const renderFormOption = () => {
    return (
      <>
        <div className="InputFormTemplate ViewInputForm">
          <FormOptionTemplate props={{ LabelText: "Select your Stack", ValueOptions: ["Front-end Development", "Back-end Development"] }} selectedValue={(e) => setPrimaryOption(e)} select="multiple" />

          <FormOptionTemplate props={{ LabelText: "Select your Tech", ValueOptions: ["Html", "Css", "JS"] }} selectedValue={(e) => setSecondaryOption(e)} select="multiple" />

          <FormOptionTemplate props={{ LabelText: "Select For Tags/Attir Looking For", ValueOptions: ["StyleGuide", "Development"] }} selectedValue={(e) => setTersiaryOption(e)}  />
        </div>
        <p>
          {" "}
          Tags Selected : {PrimaryOption.map((e) => e)} {SecondaryOption.map((e) => e)} {TersiaryOption.map((e) => e)}{" "}
        </p>
        {/* {console.log("TechMedia Arr ", arr)} */}
        <TechMediaTemplate props={FilterdValue.map((e) => e)} /> 
      </>
    );
  };


  // ! Example for any length of array TwoArrayFilterAlgorithm
  // * EX Arr1["el1","el2","el3","el4"] , Arr2["e2",3,"el4"] return true ["el4"]
  // * EX Arr1["el1","el2","el3","el4"] , Arr2["e2",3,"el"] return false [""]
  // * EX Arr1["el1","el2","el3","el4"] , Arr2["el3",3,"el4"] return true ["el3"]

  const SortingAlgoTwoArrays = (OrignalArr, SortingArr) => {
    if (Array.isArray(OrignalArr) || Array.isArray(SortingArr)) {
      // Convert Any non string el into string ex-numbers
      OrignalArr = OrignalArr.toString().toLowerCase().split(",");
      SortingArr = SortingArr.toString().toLowerCase().split(",");

      for (let i = 0; i < OrignalArr.length; i++) {
        for (let e = 0; e < SortingArr.length; e++) {
          if (OrignalArr[i] === SortingArr[e]) return true;
        }
      }

      return false;
    }
  };

  // * Multiple Filtered Arrays [Tech tags] to display Data
  const FilterdValue = Tech.filter((e) => {
    let arr = [];
    
    if (SortingAlgoTwoArrays(e.tags.primaryTag, PrimaryOption)) {
      arr.push(e);
    } else if (SortingAlgoTwoArrays(e.tags.secondaryTag, SecondaryOption)) {
      arr.push(e);
    } else if (SortingAlgoTwoArrays(e.tags.tersiaryTag, TersiaryOption)) {
      arr.push(e);
    } else return null;
    return arr;
  });


  // * Individual Filtered Arrays [Tech tags] to display Data
  // const FilterdPrimaryValue = Tech.filter((e) => {
  //   if (SortingAlgoTwoArrays(e.tags.primaryTag, PrimaryOption)) return e;
  //   return null;
  // });
  // console.log("filteredP", FilterdPrimaryValue);
  
  // const FilterdSecondaryValue = Tech.filter((e) => {
  //   if (SortingAlgoTwoArrays(e.tags.secondaryTag, SecondaryOption)) return e;
  //   return null;
  // });
  // console.log("filteredS", FilterdSecondaryValue);
  
  // const FilterdTersiaryValue = Tech.filter((e) => {
  //   if (SortingAlgoTwoArrays(e.tags.tersiaryTag, TersiaryOption)) return e;
  //   return null;
  // });
  // console.log("filteredT", FilterdTersiaryValue);
  
  
  return <div>{renderFormOption()}</div>;
};

export default SearchTechItemDUPLICATE;

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
