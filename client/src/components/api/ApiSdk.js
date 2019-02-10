import React from "react";
import Title from "../partials/Title";
import { Link } from 'react-router-dom';

const CaIndex = () => {
  return (
    <div>
      <Title text="SDK index" />
      <div className="slds-m-vertical_medium">
      <div className="slds-box">
            <h3 className="slds-text-heading--medium slds-m-around_small slds-m-top_none">Data Extensions</h3>
            <ul className="slds-list_dotted">
                <li>
                    <Link className=".slds-text-link_faux"
                       to="/api/sdk/de">Data extensions</Link>
                </li>
                <li>
                    <p><Link className=".slds-text-link_faux"
                          to="/api/sdk/de-create">Create Data Extension</Link></p>
                </li>
                <li>
                    <p><a className=".slds-text-link_faux" rel="noopener noreferrer" target="_blank"
                          href="https://developer.salesforce.com/docs/atlas.en-us.mc-getting-started.meta/mc-getting-started/get-api-key.htm">Get an API Key</a></p>
                </li>
                <li>
                    <p><a className=".slds-text-link_faux" rel="noopener noreferrer" target="_blank"
                          href="https://developer.salesforce.com">Link</a></p>
                </li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default CaIndex;
