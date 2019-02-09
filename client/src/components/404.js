import React from "react";
import Title from "./partials/Title";

const Page404 = ({ location }) => {
  return (
    <div>
      <Title text="404" />
      <div className="slds-m-around_medium">
        <h2>
          No match found for <code>{location.pathname}</code>
        </h2>
      </div>
    </div>
  );
};

export default Page404;
