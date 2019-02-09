import React from "react";

const Home = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>App Title!</h1>
      Very cool description goes here.
      <button className="slds-button slds-button_neutral">
        Button Neutral
        <svg
          className="slds-button__icon slds-button__icon_right"
          aria-hidden="true">
          <use href="/assets/icons/utility-sprite/svg/symbols.svg#download" />
        </svg>
      </button>
    </div>
  );
};

export default Home;
