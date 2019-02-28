import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { fetchCaConfigs } from '../../actions';

class CaList extends Component {
  componentDidMount() {
    this.props.fetchCaConfigs();
  }

  // TODO temporary example
  renderConfigs() {
    //console.log('renderConfigs');
    //console.log(this.props);
    //console.log('renderConfigs');
    const config = {"_id": '23','name':'test'};
    //return this.props.caConfigs.reverse().map(config => {
      return (
        <div className="card darken-1" key={config._id}>
          <div className="card-content">
            <span className="card-title">{config.name}</span>
            <p>
              {JSON.stringify(config)}
            </p>
          </div>
        </div>
      );
    //});
  }

  // Render configs table
  renderTable() {
    //console.log('renderTable');
    console.log(this.props);
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
        {this.props.caConfigs.map((config, index) => (
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
                aria-pressed="false" title="Delete">
                <svg className="slds-button__icon" aria-hidden="true">
                  <use href="/assets/icons/utility-sprite/svg/symbols.svg#delete"></use>
                </svg>
                <span className="slds-assistive-text">Delete</span>
              </button>
            </td>
          </tr>


                    // <div key={index} >
                    //     <div className="slds-grid slds-gutters slds-m-bottom_xx-small">
                    //         <div className="slds-col slds-size_1-of-2">
                    //             <Field name={`${step}.label`} component={this.renderInput} placeholder="label" />
                    //         </div>
                    //         <div className="slds-col slds-size_1-of-2">
                    //             <Field name={`${step}.value`} component={this.renderInput} placeholder="value" />
                    //         </div>
                    //     </div>

                    //     {/* {error && <li className="error">{error}</li>} */}
                    //     <div className="slds-text-color_error">
                    //         {error}
                    //     </div>
                    // </div>
        ))}

      </tbody>
      </table>
    );
  }

  render() {
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
        {/* {this.renderConfigs()} */}
        {this.renderTable()}
      </div>
    </div>
  );
  }
}

// accept state object
function mapStateToProps({ caConfigs }) {
  //console.log("configs");
  //console.log(caConfigs);
  return { caConfigs };
}

export default connect(mapStateToProps, {fetchCaConfigs})(CaList);
