import React from "react";
import Title from "../partials/Title";
import { Link } from "react-router-dom";

const CaSetup = () => {
  return (
    <div>
      <Title text="SETUP Custom Activity" />
      <div className="slds-box">

<div className="slds-grid slds-wrap slds-container--medium slds-container--center slds-order-1 slds-medium-order--2 slds-p-vertical--small">
  <div className="slds-col--padded slds-col-rule--right slds-size--1-of-1 slds-medium-size--1-of-2 slds-large-size--8-of-12 slds-p-bottom--x-large">
    <article className="slds-text-longform">
      <h3 className="slds-text-heading--medium">Introduction</h3>
      <p>
        Step by step guide to getting up and running with a basic Custom Activity
    </p>
      <h3 className="slds-text-heading--medium">Step 1</h3>
      <p>Go to <Link to="/ca/create">this page</Link> and create new configuration or pick one of the existing
        <Link to="/ca/list">configurations</Link>.</p>
      <ul className="slds-list_dotted">
        <li>
          Key - Custom activity Unique key. Must match your activity key as defined when created in
          Marketing Cloud Administration.
        </li>
        {/* <!--<li>-->
        <!--EndpointUrl - Endpoint URL used to execute the journey. Marketing Cloud will use this url-->
        <!--for fetching config.json file.-->
        <!--</li>--> */}
        <li>
          Type - String property representing the type of activity. Select REST for default activity
          and RESTDECISION for custom split activity.
        </li>
        <li>
          JWT - Encode Custom Activities Using a JWT. <a target="_blank" rel="noopener noreferrer"
            href="https://developer.salesforce.com/docs/atlas.en-us.noversion.mc-app-development.meta/mc-app-development/encode-custom-activities-using-jwt.htm">More
            information here</a>
        </li>
        <li>
          Name - Name of activity (i.e. 'Send Email', 'SMS', 'Create Salesforce Lead'), as shown in
          the activity list.
        </li>
        <li>
          Description - Description of what the activity does and what purpose it fulfills.
        </li>
        <li>
          Icon - String representing the icon for this activity. Defaults to images/icon.png when not
          provided.
        </li>
        <li>
          Small Icon - String representing the small display icon for this activity. Defaults to
          images/iconSmall.png.
        </li>

        <li>
          IsConfigured - Optional boolean value. If true, the activity is marked as configured
          when it is dropped on the canvas.
        </li>
        <li>
          ConfigOnDrop - Optional boolean value. If true, the activity configuration opens
          when the activity is dropped on the canvas.
        </li>
        <li>
          EditUrl - Endpoint for the UI displayed to marketers while configuring this activity.
        </li>
        <li>
          Splits - Contains an array of objects that define the custom splits. Each object contains
          label and key.
        </li>
        <li>
          Steps - Contains an array of objects that define the steps that the user may navigate
          through when configuring the custom activity.
          Each object contains label and key.
        </li>
        <li>
          Height and Width - Properties that defines the height and width of the iframe containing the
          configuration UI.
        </li>
      </ul>
      <p>
        Note: Key and EndpointUrl will be used in next step.
    </p>
      <h3 className="slds-text-heading--medium">Step 2</h3>
      <p>Create a package containing a Journey Builder Activity.
          A documentation for this task can be found here:
        <a target="_blank" rel="noopener noreferrer"
          href="https://developer.salesforce.com/docs/atlas.en-us.noversion.mc-app-development.meta/mc-app-development/define-jb-extension-app-center.htm">Create
            a Marketing Cloud App</a>.
    <ul className="slds-list_dotted">
          <li>
            Create an installed package or navigate to an existing package.
        </li>
          <li>
            Under Components, click Add Component.
        </li>
          <li>
            Select Journey Builder Activity or Journey Builder Entry Source.
        </li>
          <li>
            Type a Name and Description for the activity or entry source. This name is stored doesn't
            display on the Journey Builder canvas.
            For simplicity, give the activity or entry source the same name as it is called in the
            config.json file.
        </li>
          <li>
            For activities only, select a Category to determine which section the activity appears
            under on the Journey Builder Canvas. If a category is specified in the activity's
            config.json,
            that category overrides the value selected here.
        </li>
          <li>
            Enter the Endpoint URL, which is the baseUrl for your application. Journey Builder loads all
            assets relative to this endpoint.
        </li>
          <li>
            To complete registration, save the component.
        </li>
          <li>
            Copy UNIQUE KEY from created component and update Key of early created configuration.
        </li>
        </ul>
      </p>
      <h3 className="slds-text-heading--medium">Step 3</h3>
      <p>
        Go into <a target="_blank" href="https://mc.exacttarget.com/cloud/#app/Journey%20Builder" rel="noopener noreferrer">Journey
        Builder</a>
        and the Custom Activity should appear.
    </p>
      <p>
        Note: There is some caching done by the browser that could prevent your app from showing up in
        Journey Builder.
        Going back to activities list and reloading the page usually helps to solve this issue.
    </p>
      <h3 className="slds-text-heading--medium"> What’s next?</h3>
      <ul className="slds-list_dotted">
        <li>
          Same configuration can be used for different custom activities.
        </li>
        <li>
          Configuration can be changed at any time (journey builder reload required)
        </li>
      </ul>
    </article>
  </div>

  <div className="slds-col--padded slds-size--1-of-1 slds-small-size--1-of-2 slds-m-bottom--large">
    <div className="slds-box">
      <h2 className="slds-text-heading--label">Notes:</h2>
      <p><a href="/ca/create">Create new configuration</a></p>
      <p><a href="/ca/list">Browse existing configurations</a></p>
    </div>
  </div>

</div>
</div>
    </div>
  );
};

export default CaSetup;
