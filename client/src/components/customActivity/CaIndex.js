import React from "react";
import Title from "../partials/Title";

const CaIndex = () => {
  return (
    <div>
      <Title text="Custom Activity" />
      <div className="slds-box slds-m-vertical_medium">
        <h3 className="slds-text-heading--medium slds-m-around_small slds-m-top_none">Official Documentation:</h3>
        <ul className="slds-list_dotted">
          <li>
            <a target="_blank" className=".slds-text-link_faux" rel="noopener noreferrer"
              href="https://developer.salesforce.com/docs/atlas.en-us.noversion.mc-app-development.meta/mc-app-development/create-a-mc-app.htm">Create
                        a Marketing Cloud App</a>
          </li>
          <li>
            <p><a target="_blank" className=".slds-text-link_faux" rel="noopener noreferrer"
              href="https://developer.salesforce.com/docs/atlas.en-us.noversion.mc-app-development.meta/mc-app-development/creating-activities.htm">Create
                        Custom Activity</a></p>
          </li>
          <li>
            <p><a target="_blank" className=".slds-text-link_faux" rel="noopener noreferrer"
              href="https://developer.salesforce.com/docs/atlas.en-us.noversion.mc-app-development.meta/mc-app-development/extending-activities.htm">Custom
                        Split Activity</a></p>
          </li>
          <li>
            <p><a target="_blank" className=".slds-text-link_faux" rel="noopener noreferrer"
              href="https://developer.salesforce.com/docs/atlas.en-us.noversion.mc-app-development.meta/mc-app-development/using-postmonger.htm">Postmonger
                        Events</a></p>
          </li>
        </ul>
        <h3 className="slds-text-heading--medium slds-m-around_small">Forums:</h3>
        <ul className="slds-list_dotted">
          <li>
            <a target="_blank" className=".slds-text-link_faux" rel="noopener noreferrer"
              href="https://salesforce.stackexchange.com/questions/179671/how-to-create-a-custom-activity-for-journey-builder">How
                        to create a custom activity for journey builder?</a>
          </li>
          <li>
            <p><a target="_blank" className=".slds-text-link_faux" rel="noopener noreferrer"
              href="https://salesforce.stackexchange.com/questions/69319/how-to-create-a-custom-split-activity">How
                        to create a Custom Split Activity</a></p>
          </li>
          <li>
            <p><a target="_blank" className=".slds-text-link_faux" href="https://www.youtube.com/watch?v=tbBz6D0cpvM" rel="noopener noreferrer">Journey Builder Activities for Developers</a></p>
          </li>
        </ul>
        <h3 className="slds-text-heading--medium slds-m-around_small">Examples:</h3>
        <ul className="slds-list_dotted">
          <li>
            <p><a target="_blank" className=".slds-text-link_faux" rel="noopener noreferrer"
              href="https://github.com/DemosAndTrials/sfmc-examples">Custom activity and api examples</a></p>
          </li>
          <li>
            <p><a target="_blank" className=".slds-text-link_faux" rel="noopener noreferrer"
              href="https://developer.salesforce.com/docs/atlas.en-us.noversion.mc-app-development.meta/mc-app-development/example-rest-activity.htm">Example
                        REST Activity</a></p>
          </li>
          <li>
            <p><a target="_blank" className=".slds-text-link_faux" href="https://github.com/anthony1993/JBActivities" rel="noopener noreferrer">Journey
                        Builder Custom Activities</a></p>
          </li>
          <li>
            <p><a target="_blank" className=".slds-text-link_faux" rel="noopener noreferrer"
              href="https://github.com/mslabina/sfmc-servicecloud-customsplit">Custom Split Activity</a></p>
          </li>
          <li>
            <p><a target="_blank" className=".slds-text-link_faux" rel="noopener noreferrer"
              href="https://github.com/kevinparkerson/postmonger">Postmonger on Github</a></p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CaIndex;
