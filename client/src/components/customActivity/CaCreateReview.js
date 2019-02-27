import React from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions'

const CaCreateReview = ({ onCancel, formValues, createCaConfig, history }) => {

    const reviewFields = () => {
        return (
            <div>
                Config:  {JSON.stringify(formValues)}
            </div>
        )
    }

  return (
      <div>
          <h5>Please confirm your entries</h5>
          <div>34324</div>
          {reviewFields()}


          {/* Action buttons */}
          <div className="slds-form-element slds-m-vertical_medium">
              <div className="slds-button-group" role="group">
                  <button className="slds-button slds-button_brand" value="save" onClick={() => createCaConfig(formValues, history)}>
                      Confirm
                </button>
                  <button className="slds-button slds-button_destructive" type="button" value="cancel" onClick={onCancel}>
                      Cancel
                </button>
              </div>
          </div>

      </div>
  );
};

function mapStateToProps(state) {
    console.log(state);
    return { formValues: state.form.caCreateForm.values };
  }
  
  export default connect(mapStateToProps, actions)(withRouter(CaCreateReview));