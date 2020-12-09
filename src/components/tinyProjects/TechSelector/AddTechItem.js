// TODO use Local storage
// TODO ADD image drop and Select from os file Explorer
// Todo adjust fotter to not to collide with fixed sidebar

//*  NEED BACKEND DATABASE TO UPLOAD AND INSERT IMAGE

import React, { useState, useEffect } from "react";
import "./component/FormComponents/css/FormInputTemplate.css";
// import Tech from "./Tech.json";
import FormInputTemplate from "./component/FormComponents/FormInputTemplate";
// import FormOptionTemplate from "./component/FormComponents/FormOptionTemplate";

const AddTechItem = () => {
  const [NameData, setNameData] = useState({ name: "sample" });

  const [LinksData, setLinksData] = useState({
    websiteUrl: "www.sampleWebsite.com",
    github: "https://github.com/sampleUserName",
    facebook: "Sample05@gmail.com||EmailAddress",
    instagram: "Sample05@gmail.com||EmailAddress",
    linkden: "https://www.linkedin.com/in/sample-759302583",
    figma: "figma.com/@SampleName",
  });

  const [LicenceData, setLicenceData] = useState({ licence: "Open Source Project" });

  const [TechLayout, setTechLayout] = useState({
    name: "sample",
    id: "596588",
    imageUrl: "http://placehold.it/400x200&text=",
    tags: {
      primaryTag: ["front-end development", "back-end development"],
      secondaryTag: ["css"],
      tersiaryTag: ["styleguide", "development"],
    },
    links: {
      websiteUrl: "www.sampleWebsite.com",
      github: "https://github.com/sampleUserName",
      facebook: "Sample05@gmail.com||EmailAddress",
      instagram: "Sample05@gmail.com||EmailAddress",
      linkden: "https://www.linkedin.com/in/sample-759302583",
      figma: "figma.com/@SampleName",
    },
    licence: "Open Source Project",
  });

  useEffect(() => {
    const f = {
      name: NameData.name,
      id: "uniqIdLib",
      imageUrl: "http://placehold.it/400x200&text=slide1",
      tags: {
        primaryTag: ["front-end development", "back-end development"],
        secondaryTag: ["css"],
        tersiaryTag: ["styleguide", "development"],
      },
      links: LinksData,
      licence: LicenceData.licence,
    };

    setTechLayout(f);
  }, [LicenceData, NameData, LinksData]);

  return (
    // TODO Join Both Files For [Tags] And create [Flex Order] To use both [Option And Input with common File]

    <>
      <div>
        <div className="styleP" style={{ position: "fixed", top: "5em" }}>
          <p> name: {NameData.name} </p>
          <p> websiteUrl: {LinksData.websiteUrl} </p>
          <p> github: {LinksData.github} </p>
          <p> facebook: {LinksData.facebook} </p>
          <p> instagram: {LinksData.instagram} </p>
          <p> linkden: {LinksData.linkden} </p>
          <p> figma: {LinksData.figma} </p>
        </div>

        <div className="FormTemplate">
          {/* required  - ToDO Add Only To name*/}

          <FormInputTemplate props={[{ labelText: "Enter website Name ", inputName: "name" }]} inputValue={(e) => setNameData(e)} />

          <FormInputTemplate
            props={[
              { labelText: "Enter websiteUrl URL ", inputName: "websiteUrl" },
              { labelText: "Enter github  ", inputName: "github" },
              { labelText: "Enter facebook id ", inputName: "facebook" },
              { labelText: "Enter instagram profile ", inputName: "instagram" },
              { labelText: "Enter linkden userName ", inputName: "linkden" },
              { labelText: "Enter figma address ", inputName: "figma" },
            ]}
            dividerName="Social media Details"
            dividerDataId="links"
            inputValue={(e) => setLinksData(e)}
          />

          <FormInputTemplate props={[{ labelText: "Enter Tech Licence", inputName: "licence" }]} inputValue={(e) => setLicenceData(e)} value="submit" />
        </div>

        <p style={{ fontSize: "larger", fontWeight: "bold", textAlign: "center" }}>Just copy and add to Json File : </p>
        <br />
        <p style={{ fontSize: "larger", border: "2px solid black", padding: "2em" }}>{JSON.stringify(TechLayout)} </p>
        <br />
      </div>
    </>
  );
};

export default AddTechItem;
