import React from "react";
import Title from "../partials/Title";

const CaIndex = () => {
  return (
    <div>
      <Title text="REST index" />
      <div className="slds-m-around_medium">
      <ul className="slds-accordion">
            <li className="slds-accordion__list-item">
                <section className="slds-accordion__section slds-is-open">
                    <div className="slds-accordion__summary">
                        <h3 className="slds-text-heading_small slds-accordion__summary-heading">
                            <button aria-controls="accordion-details-01" aria-expanded="true" className="slds-button slds-button_reset slds-accordion__summary-action">
                                <svg className="slds-accordion__summary-action-icon slds-button__icon slds-button__icon_left" aria-hidden="true">
                                    <use xlink="http://www.w3.org/1999/xlink" href="/styles/slds/icons/utility-sprite/svg/symbols.svg#switch"></use>
                                </svg>
                                <span className="slds-truncate" title="Accordion summary">Accordion summary</span>
                            </button>
                        </h3>
                        <button className="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small slds-shrink-none" aria-haspopup="true">
                            <svg className="slds-button__icon" aria-hidden="true">
                                <use xlink="http://www.w3.org/1999/xlink" href="/styles/slds/icons/utility-sprite/svg/symbols.svg#down"></use>
                            </svg>
                            <span className="slds-assistive-text">More Options</span>
                        </button>
                    </div>
                    <div aria-hidden="false" className="slds-accordion__content" id="accordion-details-01">Accordion details - A</div>
                </section>
            </li>
            <li className="slds-accordion__list-item">
                <section className="slds-accordion__section">
                    <div className="slds-accordion__summary">
                        <h3 className="slds-text-heading_small slds-accordion__summary-heading">
                            <button aria-controls="accordion-details-02" aria-expanded="false" className="slds-button slds-button_reset slds-accordion__summary-action">
                                <svg className="slds-accordion__summary-action-icon slds-button__icon slds-button__icon_left" aria-hidden="true">
                                    <use xlink="http://www.w3.org/1999/xlink" href="/styles/slds/icons/utility-sprite/svg/symbols.svg#switch"></use>
                                </svg>
                                <span className="slds-truncate" title="Accordion summary">Accordion summary</span>
                            </button>
                        </h3>
                        <button className="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small slds-shrink-none" aria-haspopup="true">
                            <svg className="slds-button__icon" aria-hidden="true">
                                <use xlink="http://www.w3.org/1999/xlink" href="/styles/slds/icons/utility-sprite/svg/symbols.svg#down"></use>
                            </svg>
                            <span className="slds-assistive-text">More Options</span>
                        </button>
                    </div>
                    <div aria-hidden="true" className="slds-accordion__content" id="accordion-details-02">Accordion details - B</div>
                </section>
            </li>
            <li className="slds-accordion__list-item">
                <section className="slds-accordion__section">
                    <div className="slds-accordion__summary">
                        <h3 className="slds-text-heading_small slds-accordion__summary-heading">
                            <button aria-controls="accordion-details-03" aria-expanded="false" className="slds-button slds-button_reset slds-accordion__summary-action">
                                <svg className="slds-accordion__summary-action-icon slds-button__icon slds-button__icon_left" aria-hidden="true">
                                    <use xlink="http://www.w3.org/1999/xlink" href="/styles/slds/icons/utility-sprite/svg/symbols.svg#switch"></use>
                                </svg>
                                <span className="slds-truncate" title="Accordion summary">Accordion summary</span>
                            </button>
                        </h3>
                        <button className="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small slds-shrink-none" aria-haspopup="true">
                            <svg className="slds-button__icon" aria-hidden="true">
                                <use xlink="http://www.w3.org/1999/xlink" href="/styles/slds/icons/utility-sprite/svg/symbols.svg#down"></use>
                            </svg>
                            <span className="slds-assistive-text">More Options</span>
                        </button>
                    </div>
                    <div aria-hidden="true" className="slds-accordion__content" id="accordion-details-03">Accordion details - C</div>
                </section>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default CaIndex;
