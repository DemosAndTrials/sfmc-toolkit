import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOut } from '../../actions/authActions'
import Spinner from './Spinner';

class Header extends Component{
  state = { isProfileOpen: false };

  componentWillMount(){
    document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillUnmount(){
    document.removeEventListener('mousedown', this.handleClick, false);
  }

  handleClick = (e) => {
    //console.log(e.target.getAttribute('href'));
    if (this.node && this.node.contains(e.target))
      return;
    if (this.state.isProfileOpen)
      this.setState({ isProfileOpen: false });
  }

  logout() {
    this.props.logOut()
  }

  // open profile card
  onAvatarClick(event) {
    this.setState({ isProfileOpen: !this.state.isProfileOpen });
  }

  render() {
    const { isAuthenticated, user, loading } = this.props.auth
    const authLinks = (
      <Fragment>

        <div ref={node => this.node = node} >
          <button className="slds-button" title="person name" aria-haspopup="true" onClick={this.onAvatarClick.bind(this)}>
            <span className="slds-avatar slds-avatar_circle slds-avatar_medium">
              <img id="userAvatar" src={user.avatar} alt={user.name} title={user.name}/>
            </span>
          </button>
          {/* --Profile Card-- */}
          {this.state.isProfileOpen &&
            <section className="slds-popover slds-nubbin_top-right slds-dynamic-menu" role="dialog"
              aria-label="My Favourites" aria-describedby="dialog-body-id-2" style={{ position: 'absolute', right: '10px', float: 'right', top: '48px' }}>
              <div className="slds-popover__body slds-p-horizontal_none slds-m-around_x-small" id="dialog-body-id-2">
                <div className="slds-media">
                  <div className="slds-media__figure">
                    <span className="slds-avatar slds-avatar_circle slds-avatar_large">
                      <img src={user.avatar} alt={user.name} title={user.name} />
                    </span>
                  </div>
                <div className="slds-media__body">
                  <h2 className="slds-text -title_caps slds-m-bottom_x-small" role="presentation">
                    {user.name}
                  </h2>
                  <p className="slds-m-bottom_x-small">
                    {user.email}
                  </p>
                </div>
                </div>
              </div>

              <footer className="slds-popover__footer">
                <p>
                  {/* ADMIN ONLY */}
                  {/* <a id="userFooterAdmin" href="/admin" className="slds-m-right_small">Admin</a> */}
                  <Link to='/profile' className="slds-m-right_small">Settings</Link>
                  <Link to='/' onClick={this.logout.bind(this)}>Logout</Link>
                </p>
              </footer>

            </section>
          }
        </div>

      </Fragment>
    )

    const guestLinks = (
      <Fragment>
        <Link to='/register' className="slds-m-right_small">Register</Link>
        <Link to='/login'>Sign-In</Link>
      </Fragment>
    )


    return (
      <header className="slds-global-header_container">
        <div className="slds-context-bar" /*onClick="close()"*/>
          {/* <!--HOME--> */}
          <div className="slds-context-bar__primary slds-context-bar__item_divider-right">
            <Link to='/'>
              <div className="slds-global-header__logo" style={{ width: "48px" }} />
            </Link>
            <div className="slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger_click slds-no-hover slds-context-bar__item_divider-right">
              <span className="slds-context-bar__label-action slds-context-bar__app-name">
                <div className="slds-truncate slds-m-left_medium">
                  <Link to='/'>SFMC Toolkit</Link>
                </div>
              </span>
            </div>
          </div>
          {/* Navigation */}
          <nav className="slds-context-bar__secondary" role="navigation">
            <ul className="slds-grid">
              {/* HOME */}
              <li className="slds-context-bar__item slds-context-bar__item_divider-right">
                <Link to="/" className="slds-context-bar__label-action" title="Home">
                  <span className="slds-truncate" title="Home">
                    Home
                </span>
                </Link>
              </li>
              {/* API */}
              <li className="slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger_hover slds-context-bar__item_divider-right">
                <Link to="/api" className="slds-context-bar__label-action" title="Demo">
                  <span className="slds-truncate" title="Menu Item">API</span>
                </Link>
                <div className="slds-context-bar__icon-action slds-p-left_none slds-context-bar__item_divider-right">
                  <button className="slds-button slds-button_icon slds-button_icon slds-context-bar__button"
                    aria-haspopup="true" title="Open submenu">
                    <svg className="slds-button__icon" aria-hidden="true">
                      <use xlink="http://www.w3.org/1999/xlink"
                        href="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown"></use>
                    </svg>
                    <span className="slds-assistive-text">Open submenu</span>
                  </button>
                </div>
                <div className="slds-dropdown slds-dropdown_right slds-context-bar__item_divider-right">
                  <ul className="slds-dropdown__list" role="menu">
                    {/* Index */}
                    <li className="slds-dropdown__item slds-context-bar__item_divider-right" role="presentation">
                      <Link to="/api" role="menuitem" tabIndex="-1">
                        <span className="slds-truncate" title="Getting Started">Getting Started</span>
                      </Link>
                    </li>
                    {/* SDK */}
                    <li className="slds-dropdown__item slds-context-bar__item_divider-right" role="presentation">
                      <Link to="/api/sdk" role="menuitem" tabIndex="-1">
                        <span className="slds-truncate" title="SDK">SDK</span>
                      </Link>
                    </li>
                    {/* REST */}
                    <li className="slds-dropdown__item slds-context-bar__item_divider-right" role="presentation">
                      <Link to="/api/rest" role="menuitem" tabIndex="-1">
                        <span className="slds-truncate" title="REST API">REST API</span>
                      </Link>
                    </li>
                    {/* SOAP */}
                    <li className="slds-dropdown__item slds-context-bar__item_divider-right" role="presentation">
                      <Link to="/api/soap" role="menuitem" tabIndex="-1">
                        <span className="slds-truncate" title="SOAP API">SOAP API</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              {/* CUSTOM ACTIVITY */}
              <li className="slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger_hover slds-context-bar__item_divider-right">
                <Link to="/ca" className="slds-context-bar__label-action" title="Custom Activity">
                  <span className="slds-truncate" title="Menu Item">Custom Activity</span>
                </Link>
                <div className="slds-context-bar__icon-action slds-p-left_none slds-context-bar__item_divider-right">
                  <button className="slds-button slds-button_icon slds-button_icon slds-context-bar__button"
                    aria-haspopup="true" title="Open submenu">
                    <svg className="slds-button__icon" aria-hidden="true">
                      <use xlink="http://www.w3.org/1999/xlink"
                        href="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown"></use>
                    </svg>
                    <span className="slds-assistive-text">Open submenu</span>
                  </button>
                </div>
                <div className="slds-dropdown slds-dropdown_right slds-context-bar__item_divider-right">
                  <ul className="slds-dropdown__list" role="menu">
                    {/* Index */}
                    <li className="slds-dropdown__item slds-context-bar__item_divider-right" role="presentation">
                      <Link to="/ca/index" role="menuitem" tabIndex="-1">
                        <span className="slds-truncate" title="Getting Started">Getting Started</span>
                      </Link>
                    </li>
                    {/* Setup */}
                    <li className="slds-dropdown__item slds-context-bar__item_divider-right" role="presentation">
                      <Link to="/ca/setup" role="menuitem" tabIndex="-1">
                        <span className="slds-truncate" title="Getting Started">Setup Activity</span>
                      </Link>
                    </li>
                    {/* List of configurations */}
                    <li className="slds-dropdown__item slds-context-bar__item_divider-right" role="presentation">
                      <Link to="/ca/list" role="menuitem" tabIndex="-1">
                        <span className="slds-truncate" title="Saved configurations">Saved configurations</span>
                      </Link>
                    </li>
                    {/* Create configuration */}
                    <li className="slds-dropdown__item slds-context-bar__item_divider-right" role="presentation">
                      <Link to="/ca/create" role="menuitem" tabIndex="-1">
                        <span className="slds-truncate" title="Create configuration">Create configuration</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              {/* ABOUT */}
              <li className="slds-context-bar__item slds-context-bar__item_divider-right">
                <Link to="/about" className="slds-context-bar__label-action" title="About">
                  <span className="slds-truncate" title="About">About</span>
                </Link>
              </li>
              {/* MENU ITEM */}
            </ul>
          </nav>
          {/* USER LOGIN & PROFILE */}
          <ul className="slds-global-header__item slds-grid slds-grid_vertical-align-center">
            <div className="authlink">
              {isAuthenticated
                ? loading
                  ? <Spinner />
                  : authLinks
                : loading
                  ? <Spinner />
                  : guestLinks
              }
            </div>
          </ul>
        </div>
      </header>
    );
  }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps, { logOut }) (Header);