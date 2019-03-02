import React, { Component } from "react";
import { reduxForm } from "redux-form";
import CaCreateReview from './CaCreateReview';
import CaCreateForm from './CaCreateForm';


class CaCreate extends Component {
  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview) {
      return (
        <CaCreateReview
          onCancel={() => this.setState({ showFormReview: false })}
        />
      );
    }

    return (
      <CaCreateForm
        onSurveySubmit={() => this.setState({ showFormReview: true })}
      />
    );
  }

  render() {
    return (
    <div>
    {this.renderContent()}
    </div>
    );
  }
}

export default reduxForm({
  form: "caCreateForm"
})(CaCreate);
