import React from "react";

const Title = ({ text }) => {
  return (
    <div className="slds-shrink-none">
      <div className="slds-page-header">
        <h2 className="slds-text-heading--medium">{text}</h2>
      </div>
    </div>
  );
};

export default Title;
