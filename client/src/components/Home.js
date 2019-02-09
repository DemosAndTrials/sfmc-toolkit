import React from "react";
import Title from './partials/Title';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Title text="Welcome to SFMC Toolkit" />
      <div className="slds-m-around_medium">
      <ul className="slds-timeline slds-m-around_small">
          <li>
            <div className="slds-timeline__item">
              <span className="slds-assistive-text">Task</span>
              <div className="slds-media">
                <div className="slds-media__body">
                  <div className="slds-media slds-timeline__media slds-timeline__media_task">
                    <div className="slds-media__figure slds-timeline__icon">
                      <div className="slds-icon_container slds-icon-standard-task" title="task">
                        <svg className="slds-icon slds-icon_small" aria-hidden="true">
                          <use href="/assets/icons/standard-sprite/svg/symbols.svg#announcement"></use>
                        </svg>
                      </div>
                    </div>
                    <div className="slds-media__body">
                      <div className="slds-media">
                        <div className="slds-media__body">
                          <h3 className="slds-truncate">
                            <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">Moving to REACT + NodeJS</a></h3>
                          <ul className="slds-list_horizontal slds-wrap">
                            <li className="slds-m-right_large">
                              <span className="slds-text-title">Author:</span>
                              <span className="slds-text-body_small"><Link to="/about">Ros
                                                            Haitovich</Link></span>
                            </li>
                            <li className="slds-m-right_large">
                              <span className="slds-text-title">Date: </span>
                              <span className="slds-text-body_small"><Link to="/">10.06.2018</Link></span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
            {/* <!----> */}
            <li>
                <div className="slds-timeline__item">
                    <span className="slds-assistive-text">Event</span>
                    <div className="slds-media">
                        <div className="slds-media__body">
                            <div className="slds-media slds-timeline__media slds-timeline__media_event">
                                <div className="slds-media__figure slds-timeline__icon">
                                    <div className="slds-icon_container slds-icon-standard-event" title="event">
                                        <svg className="slds-icon slds-icon_small" aria-hidden="true">
                                            <use xlink="http://www.w3.org/1999/xlink" href="/assets/icons/standard-sprite/svg/symbols.svg#announcement"></use>
                                        </svg>
                                    </div>
                                </div>
                                <div className="slds-media__body">
                                    <h3 className="slds-truncate" title="API Examples"><Link to="/ca/">Custom Activity</Link></h3>
                                    <p className="slds-truncate">
                                        Update documentation</p>
                                    <ul className="slds-list_horizontal slds-wrap">
                                        <li className="slds-m-right_large">
                                            <span className="slds-text-title">Author:</span>
                                            <span className="slds-text-body_small"><Link to="/about">Ros
                                                    Haitovich</Link></span>
                                        </li>
                                        <li className="slds-m-right_large">
                                            <span className="slds-text-title">Date: </span>
                                            <span className="slds-text-body_small"><Link to="/">10.07.2018</Link></span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            {/* <!----> */}
            <li>
                <div className="slds-timeline__item">
                    <span className="slds-assistive-text">Login</span>
                    <div className="slds-media">
                        <div className="slds-media__body">
                            <div className="slds-media slds-timeline__media slds-timeline__media_email">
                                <div className="slds-media__figure slds-timeline__icon">
                                    <div className="slds-icon_container slds-icon-standard-email" title="email">
                                        <svg className="slds-icon slds-icon_small" aria-hidden="true">
                                            <use href="/assets/icons/standard-sprite/svg/symbols.svg#announcement"></use>
                                        </svg>
                                    </div>
                                </div>
                                <div className="slds-media__body">
                                    <h3 className="slds-truncate" title="Beta version online"><Link to="/login/">User
                                            authentication</Link></h3>
                                    <ul className="slds-list_horizontal slds-wrap">
                                        <li className="slds-m-right_large">
                                            <span className="slds-text-title">Author:</span>
                                            <span className="slds-text-body_small"><Link to="/about">Ros
                                                    Haitovich</Link></span>
                                        </li>
                                        <li className="slds-m-right_large">
                                            <span className="slds-text-title">Date: </span>
                                            <span className="slds-text-body_small"><Link to="/">05.07.2018</Link></span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div className="slds-timeline__item">
                    <span className="slds-assistive-text">Call</span>
                    <div className="slds-media">
                        <div className="slds-media__body">
                            <div className="slds-media slds-timeline__media slds-timeline__media_call">
                                <div className="slds-media__figure slds-timeline__icon">
                                    <div className="slds-icon_container slds-icon-standard-log-a-call" title="call">
                                        <svg className="slds-icon slds-icon_small" aria-hidden="true">
                                            <use xlink="http://www.w3.org/1999/xlink" href="/assets/icons/standard-sprite/svg/symbols.svg#announcement"></use>
                                        </svg>
                                    </div>
                                </div>
                                <div className="slds-media__body">
                                    <h3 className="slds-truncate" title="Custom Activity Tutorial "><Link to="/api/sdk/de">API
                                            - Manage folders</Link></h3>
                                    <ul className="slds-list_horizontal slds-wrap">
                                        <li className="slds-m-right_large">
                                            <span className="slds-text-title">Author:</span>
                                            <span className="slds-text-body_small"><Link to="/about">Ros
                                                    Haitovich</Link></span>
                                        </li>
                                        <li className="slds-m-right_large">
                                            <span className="slds-text-title">Date: </span>
                                            <span className="slds-text-body_small"><Link to="/">25.06.2018</Link></span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div className="slds-timeline__item">
                    <span className="slds-assistive-text">Task</span>
                    <div className="slds-media">
                        <div className="slds-media__body">
                            <div className="slds-media slds-timeline__media slds-timeline__media_task">
                                <div className="slds-media__figure slds-timeline__icon">
                                    <div className="slds-icon_container slds-icon-standard-task" title="task">
                                        <svg className="slds-icon slds-icon_small" aria-hidden="true">
                                            <use href="/assets/icons/standard-sprite/svg/symbols.svg#announcement"></use>
                                        </svg>
                                    </div>
                                </div>
                                <div className="slds-media__body">
                                    <div className="slds-media">
                                        <div className="slds-media__body">
                                            <h3 className="slds-truncate">
                                                <Link to="/api/sdk/de">API - Retrieve Data Extensions</Link></h3>
                                            <ul className="slds-list_horizontal slds-wrap">
                                                <li className="slds-m-right_large">
                                                    <span className="slds-text-title">Author:</span>
                                                    <span className="slds-text-body_small"><Link to="/about">Ros
                                                            Haitovich</Link></span>
                                                </li>
                                                <li className="slds-m-right_large">
                                                    <span className="slds-text-title">Date: </span>
                                                    <span className="slds-text-body_small"><Link to="/">10.06.2018</Link></span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            {/* <!----> */}
            <li>
                <div className="slds-timeline__item">
                    <span className="slds-assistive-text">Event</span>
                    <div className="slds-media">
                        <div className="slds-media__body">
                            <div className="slds-media slds-timeline__media slds-timeline__media_event">
                                <div className="slds-media__figure slds-timeline__icon">
                                    <div className="slds-icon_container slds-icon-standard-event" title="event">
                                        <svg className="slds-icon slds-icon_small" aria-hidden="true">
                                            <use href="/assets/icons/standard-sprite/svg/symbols.svg#announcement"></use>
                                        </svg>
                                    </div>
                                </div>
                                <div className="slds-media__body">
                                    <h3 className="slds-truncate" title="API Examples"><Link to="/api/">API Examples</Link></h3>
                                    <p className="slds-truncate">
                                        REST API and SOAP API Example</p>
                                    <ul className="slds-list_horizontal slds-wrap">
                                        <li className="slds-m-right_large">
                                            <span className="slds-text-title">Author:</span>
                                            <span className="slds-text-body_small"><Link to="/about">Ros
                                                    Haitovich</Link></span>
                                        </li>
                                        <li className="slds-m-right_large">
                                            <span className="slds-text-title">Date: </span>
                                            <span className="slds-text-body_small"><Link to="/">01.05.2018</Link></span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div className="slds-timeline__item">
                    <span className="slds-assistive-text">Call</span>
                    <div className="slds-media">
                        <div className="slds-media__body">
                            <div className="slds-media slds-timeline__media slds-timeline__media_call">
                                <div className="slds-media__figure slds-timeline__icon">
                                    <div className="slds-icon_container slds-icon-standard-log-a-call" title="call">
                                        <svg className="slds-icon slds-icon_small" aria-hidden="true">
                                            <use href="/assets/icons/standard-sprite/svg/symbols.svg#announcement"></use>
                                        </svg>
                                    </div>
                                </div>
                                <div className="slds-media__body">
                                    <h3 className="slds-truncate" title="Custom Activity Tutorial "><Link to="/ca">Custom
                                            Activity Tutorial</Link></h3>
                                    <p className="slds-truncate" title="">Tutorial for custom activity creation can be
                                        found <Link to="/ca/setup">here</Link>.
                                    </p>
                                    <ul className="slds-list_horizontal slds-wrap">
                                        <li className="slds-m-right_large">
                                            <span className="slds-text-title">Author:</span>
                                            <span className="slds-text-body_small"><Link to="/about">Ros
                                                    Haitovich</Link></span>
                                        </li>
                                        <li className="slds-m-right_large">
                                            <span className="slds-text-title">Date: </span>
                                            <span className="slds-text-body_small"><Link to="/">25.04.2018</Link></span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div className="slds-timeline__item">
                    <span className="slds-assistive-text">Email</span>
                    <div className="slds-media">
                        <div className="slds-media__body">
                            <div className="slds-media slds-timeline__media slds-timeline__media_email">
                                <div className="slds-media__figure slds-timeline__icon">
                                    <div className="slds-icon_container slds-icon-standard-email" title="email">
                                        <svg className="slds-icon slds-icon_small" aria-hidden="true">
                                            <use href="/assets/icons/standard-sprite/svg/symbols.svg#announcement"></use>
                                        </svg>
                                    </div>
                                </div>
                                <div className="slds-media__body">
                                    <h3 className="slds-truncate" title="Beta version online"><Link to="/ca/">Beta version
                                            online</Link></h3>
                                    <p className="slds-truncate" title="">
                                        Custom activity first beta version available now.</p>
                                    <ul className="slds-list_horizontal slds-wrap">
                                        <li className="slds-m-right_large">
                                            <span className="slds-text-title">Author:</span>
                                            <span className="slds-text-body_small"><Link to="/about">Ros
                                                    Haitovich</Link></span>
                                        </li>
                                        <li className="slds-m-right_large">
                                            <span className="slds-text-title">Date: </span>
                                            <span className="slds-text-body_small"><Link to="/">12.04.2018</Link></span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
