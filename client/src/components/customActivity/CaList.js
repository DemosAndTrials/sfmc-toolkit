import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { fetchCaConfigs, deleteCaConfig } from '../../actions';
import Modal from '../partials/Modal';

class CaList extends Component {
  constructor(props) {
    super(props);
    // set initial state for modal
    this.state = { isOpen: false };
  }

  componentDidMount() {
    this.props.fetchCaConfigs();
  }

  toggleModal = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  confirmDelete = () => {
    const config = this.state.configToDelete;
    console.log('confirm delete ' + JSON.stringify(config));
    if (config) {
      this.props.caConfigs.splice(this.props.caConfigs.indexOf(config), 1)
      this.props.deleteCaConfig(config._id);
    }
    this.setState({ isOpen: false });
  }

  // Delete config
  deleteConfig(config) {
    // open modal
    this.toggleModal();
    this.setState({ configToDelete: config });
  }

  // Render configs table
  renderTable() {
    return (
      <table className="slds-table slds-table_bordered slds-max-medium-table_stacked-horizontal slds-table_striped">
        <thead>
          <tr className="slds-text-title_caps">
            <th scope="col">
              <div className="slds-truncate" title="Id">Id</div>
            </th>
            <th scope="col">
              <div className="slds-truncate" title="Id">Icon</div>
            </th>
            <th scope="col">
              <div className="slds-truncate" title="Name">Name</div>
            </th>
            <th scope="col">
              <div className="slds-truncate" title="Description">Description</div>
            </th>
            <th scope="col">
              <div className="slds-truncate" title="Description">Type</div>
            </th>
            <th scope="col">
              <div className="slds-truncate" title="Number of steps">Number of steps</div>
            </th>
            <th scope="col">
              <div className="slds-truncate" title="EditUrl">Edit Url</div>
            </th>
            <th scope="col">
              <div className="slds-truncate" title="Key">Key</div>
            </th>
            <th scope="col">
              <div className="slds-truncate" title="EndpointUrl">Endpoint Url</div>
            </th>
            <th scope="col">
              <div className="slds-truncate" title="EditUrl">json</div>
            </th>
            <th scope="col">
            </th>
          </tr>
        </thead>
        <tbody>
        {this.props.caConfigs && this.props.caConfigs.map((config, index) => (
          <tr key={`config_${index}`}>
            <th scope="row" data-label="Id">
              <div className="slds-truncate" title="Id">
                <a href={`/ca/create/${config._id}`}>
                  {config._id}</a>
              </div>
            </th>
            <td data-label="Icon">
              <div className="slds-truncate" title="Icon">
                <span className="slds-icon_container slds-icon-custom-custom9" title="Icon">
                  <img alt="icon" src={config.bigImageUrl} style={{maxHeight:'40px',maxWidth:'40px'}} />
                  <span className="slds-assistive-text">Icon</span>
                </span>
              </div>
            </td>
            <td data-label="Name">
              <div className="slds-truncate" title="Name">
                <a href={`/ca/create/${config._id}`}>
                  {config.name}
                </a>
              </div>
            </td>
            <td data-label="Description">
              <div className="slds-truncate">
                {config.description}
              </div>
            </td>
            <td data-label="Type">
              <div className="slds-truncate">
                {config.type}
              </div>
            </td>
            <td data-label="NumSteps">
              <div className="slds-truncate">
                {config.steps.length}
              </div>
            </td>
            <td data-label="EditUrl">
              <div className="slds-truncate" title="EditUrl">
                <a href={config.editUrl} target="_blank" rel="noopener noreferrer">Open</a>
              </div>
            </td>
            <td data-label="Key">
              <div className="slds-truncate" title="Key">
                <a id={`copyToClipboardKey_${config.id}`} data={config.key}
                  target="_blank" rel="noopener noreferrer">{config.key}</a>
              </div>
            </td>
            <td data-label="EndpointUrl">
              <div className="slds-truncate" title="EndpointUrl">
                <a id={`copyToClipboardUrl_${config._id}`} data={config.endpointUrl} target="_blank">Copy</a>
              </div>
            </td>
            <td data-label="Json">
              <div className="slds-truncate" title="Json">
                <a id={`jsonBtn_${config.id}`} name={config._id}>View</a>
              </div>
            </td>
            <td data-label="Delete">
              <button id={`deleteBtn_${config._id}`} name={config._id} className="slds-button slds-button_icon slds-button_icon-border slds-button_icon-error"
                aria-pressed="false" title="Delete" onClick={() => this.deleteConfig(config) }>
                <svg className="slds-button__icon" aria-hidden="true">
                  <use href="/assets/icons/utility-sprite/svg/symbols.svg#delete"></use>
                </svg>
                <span className="slds-assistive-text">Delete</span>
              </button>
            </td>
          </tr>
        ))}

      </tbody>
      </table>
    );
  }

  render() {
    console.log('render calist');
    //this.state = { isOpen: false };
  return (
    <div>
      {/* Title */}
      <div className="slds-shrink-none">
        <div className="slds-page-header">
          <div className="slds-grid slds-grid_vertical-align-center slds-grid_align-spread">
            <div className="slds-col">
              <h2 className="slds-text-heading--medium">
                List Custom Activity
              </h2>
            </div>
            <div className="slds-col">
              <Link to="/ca/create" className="slds-button slds-button_brand">
                <span className="slds-text-not-selected">
                  <svg className="slds-button__icon slds-button__icon_left" aria-hidden="true">
                    <use href="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
                  </svg>
                  Add
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="slds-m-around_small slds-m-top_medium">
        {this.renderTable()}
      </div>
      {/* Modal */}
      <Modal show={this.state.isOpen}
          title="Confirmation"
          button1Text='Cancel'
          button2Text='Delete'
          onCloseClick={this.toggleModal} 
          onButton1Click={this.toggleModal} 
          onButton2Click={this.confirmDelete}>
          Are you sure?
      </Modal>

    </div>
  );
  }
}

// accept state object
function mapStateToProps({ caConfigs }) {
  return { caConfigs };
}

const mapDispatchToProps = {
  fetchCaConfigs, // will be wrapped into a dispatch call
  deleteCaConfig, // will be wrapped into a dispatch call
};

export default connect(mapStateToProps, mapDispatchToProps)(CaList);
