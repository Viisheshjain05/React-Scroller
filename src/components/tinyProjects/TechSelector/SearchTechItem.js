import React, { useState } from "react";
import WhatNext from "./WhatNext";
import FormOptionTemplate from "./component/FormComponents/FormOptionTemplate";
import TechMediaTemplate from "./component/TechMediaTemplate";
import Tech from "./Tech.json";
import "./component/FormComponents/css/FormOptionTemplate.css";

const SearchTechItem = () => {
  const [PrimaryOption, setPrimaryOption] = useState([""]);
  const [SecondaryOption, setSecondaryOption] = useState([""]);
  const [TersiaryOption, setTersiaryOption] = useState([""]);

  const renderFormOption = () => {
    return (
      <>
        <div className="InputFormTemplate ViewInputForm">
          <FormOptionTemplate
            props={{ LabelText: "Select your Stack", ValueOptions: ["Front-end Development", "Back-end Development"] }}
            selectedValue={(e) => setPrimaryOption(e)}
            select="multiple"
          />

          <FormOptionTemplate
            props={{ LabelText: "Select your Tech", ValueOptions: ["Html", "Css", "JS"] }}
            selectedValue={(e) => setSecondaryOption(e)}
            select="multiple"
          />

          <FormOptionTemplate
            props={{ LabelText: "Select For Tags/Attir Looking For", ValueOptions: ["StyleGuide", "Development"] }}
            selectedValue={(e) => setTersiaryOption(e)}
          />
        </div>
        <p>
          {" "}
          Tags Selected : {PrimaryOption.map((e) => e)} {SecondaryOption.map((e) => e)} {TersiaryOption.map((e) => e)}{" "}
        </p>
        <TechMediaTemplate props={FilterdValue.map((e) => e)} />
        <WhatNext />
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

  return <div>{renderFormOption()}</div>;
};

export default SearchTechItem;

// const TechLayout = {
//   name: "sample",
//   id: "596588",
//   imageUrl: "http://placehold.it/400x200&text=",
//   tags: {
//     primaryTag: "Front-end development , Back-end development",
//     secondaryTag: "css",
//     tersiaryTag: "styleguide , development",
//   },
//   links: {
//     websiteUrl: "www.sampleWebsite.com",
//     github: "https://github.com/sampleUserName",
//     facebook: "Sample05@gmail.com||EmailAddress",
//     instagram: "Sample05@gmail.com||EmailAddress",
//     linkden: "https://www.linkedin.com/in/sample-759302583",
//     figma: "figma.com/@SampleName",
//   },
//   licence: "Open Source Project",
// });
