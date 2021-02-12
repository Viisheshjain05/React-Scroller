import React, { useState, useEffect } from "react";
import "./component/FormComponents/css/FormInputTemplate.css";
import FormInputTemplate from "./component/FormComponents/FormInputTemplate";

const AddTechItem = () => {
  const [NameData, setNameData] = useState({ name: "sample" });

  const [TagsData, setTagsData] = useState({
    primaryTag: "Front-end development , Back-end development",
    secondaryTag: "css",
    tersiaryTag: "styleguide , development",
  });

  const [LinksData, setLinksData] = useState({
    websiteUrl: "www.sampleWebsite.com",
    github: "https://github.com/sampleUserName",
    facebook: "Sample05@gmail.com||EmailAddress",
    instagram: "Sample05@gmail.com||EmailAddress",
    linkden: "https://www.linkedin.com/in/sample-759302583",
    figma: "figma.com/@SampleName",
  });

  const [LicenceData, setLicenceData] = useState({ licence: "Open Source Project" });

  const [TechLayout, setTechLayout] = useState("");

  useEffect(() => {
    const TagData = {
      primaryTag: TagsData.primaryTag.split(","),
      secondaryTag: TagsData.secondaryTag.split(","),
      tersiaryTag: TagsData.tersiaryTag.split(","),
    };

    const f = {
      name: NameData.name,
      id: "uniqIdLib",
      imageUrl: "http://placehold.it/400x200&text=",
      tags: TagData,
      links: LinksData,
      licence: LicenceData.licence,
    };

    setTechLayout(f);
  }, [LicenceData, NameData, LinksData, TagsData]);

  return (
    <>
      <div className="InputFormTemplate__sidebar--data" style={{ position: "fixed", bottom: "9.7em", borderBottom: "1px solid black", fontWeight: "600" }}>
        <p>name : {NameData.name}</p>
        <p>Primary Tag : {TagsData.primaryTag}</p>
        <p>Secondary Tag : {TagsData.secondaryTag}</p>
        <p>Tersiary Tag : {TagsData.tersiaryTag}</p>
        <p>websiteUrl : {LinksData.websiteUrl}</p>
        <p>github : {LinksData.github}</p>
        <p>facebook : {LinksData.facebook}</p>
        <p>linkden : {LinksData.linkden}</p>
        <p>instagram : {LinksData.instagram}</p>
        <p>figma : {LinksData.figma}</p>
        <p>Licence : {LicenceData.licence}</p>
      </div>

      <div className="FormTemplate InputFormTemplate">
        <FormInputTemplate props={[{ labelText: "Enter website Name ", inputName: "name" }]} inputValue={(e) => setNameData(e)} />

        <FormInputTemplate
          props={[
            { labelText: "Enter Primary Tag ", inputName: "primaryTag" },
            { labelText: "Enter Secondary Tag ", inputName: "secondaryTag" },
            { labelText: "Enter tersiary Tag ", inputName: "tersiaryTag" },
          ]}
          dividerName="Tags Details"
          dividerDataId="Tags"
          showValue="New Tags"
          inputValue={(e) => setTagsData(e)}
        />

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
          showValue="Show Input"
          inputValue={(e) => setLinksData(e)}
        />

        <FormInputTemplate props={[{ labelText: "Enter Tech Licence", inputName: "licence" }]} inputValue={(e) => setLicenceData(e)} value="submit" />
      </div>

      <div style={{ height: "auto", marginTop: "2em" }}>
        <p style={{ fontSize: "larger", fontWeight: "bold", textAlign: "center" }}>Just copy and add to Json File : </p>
        <p style={{ fontSize: "12px", border: "1px solid black", padding: "2rem 1.5rem" }}>{JSON.stringify(TechLayout)} </p>
      </div>
      
    </>
  );
};

export default AddTechItem;

// const [TechLayout, setTechLayout] = useState({
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
