import React from "react";

const SectionTitle = ({ subTitle, titleFirst, titleSecond, smallFont }) => {
  return (
    <>
      <h4 className="section__sub-title">{subTitle}</h4>
      <h2
        className="section__title"
        style={{ fontSize: smallFont ? "40px" : "" }}
      >
        <span>{titleFirst}&nbsp;</span>
        {titleSecond}
      </h2>
    </>
  );
};

export default SectionTitle;
