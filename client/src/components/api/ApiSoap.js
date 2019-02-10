import React from "react";
import Title from "../partials/Title";

const CaIndex = () => {
  return (
    <div>
      <Title text="SOAP index" />
      <div className="slds-m-vertical_medium">
      <div className="slds-box">
            <h3 className="slds-text-heading--medium slds-m-around_small slds-m-top_none">Data Extensions</h3>
            <ul className="slds-list_dotted">
                <li>
                    <p><a className=".slds-text-link_faux" rel="noopener noreferrer" target="_blank"
                          href="https://developer.salesforce.com/docs/atlas.en-us.noversion.mc-apis.meta/mc-apis/web_service_guide.htm">SOAP Web Service Guide</a></p>
                </li>
                <li>
                    <p><a className=".slds-text-link_faux" rel="noopener noreferrer" target="_blank"
                          href="https://developer.salesforce.com/docs/atlas.en-us.noversion.mc-apis.meta/mc-apis/getting_started_developers_and_the_exacttarget_api.htm">Get Started with the SOAP Web Services API</a></p>
                </li>
                <li>
                    <p><a className=".slds-text-link_faux" rel="noopener noreferrer" target="_blank"
                          href="https://developer.salesforce.com/docs/atlas.en-us.noversion.mc-apis.meta/mc-apis/soap_api_best_practices.htm">SOAP API Best Practices</a></p>
                </li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default CaIndex;
