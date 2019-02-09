import React from "react";

const Footer = () => {
  return (
    <footer>
      <p className="slds-text-align_right slds-m-around_medium slds-border_top">
        &copy; 2018-{(new Date()).getFullYear()} Ros Haitovich
      </p>
    </footer>
  );
};

export default Footer;
