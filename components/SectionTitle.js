import React from "react";

const SectionTitle = ({ subTitle, titleFirst, titleSecond, smallFont }) => {
  return (
    <>
      <h4 className="section__sub-title">{subTitle}</h4>
      <h2
        className="section__title"
        // style={{ fontSize: smallFont ? "40px" : "" }}
      >
        {
          titleFirst === "Planning To Transform" || titleFirst === "Planning to transform"  || titleFirst=== "Skyrocket your growth" || titleFirst=== "Let's build something" ? 
          <span><nobr>{titleFirst}</nobr></span>
          :
          <span>{titleFirst}</span>
        }
        <br/>
        {titleSecond}
      </h2>
    </>
  );
};

export default SectionTitle;
