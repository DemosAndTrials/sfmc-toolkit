import React, { Component } from "react";
import { Field, FieldArray, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import FieldInput from "../partials/FieldInput";
import FieldSelect from "../partials/FieldSelect";

class CaCreateForm extends Component {
    state = { showSchemaArgs: false };

    renderInput = ({ input, maxLength, placeholder, disabled, meta: { touched, error } }) => {
        //console.log("renderInput " + touched);
        const className = `slds-form-element slds-form-element_stacked ${
            error && touched ? "slds-has-error" : ""
            }`;
        return (
            <div className={className}>
                <input
                    {...input}
                    type="input"
                    id={input.name}
                    className="slds-input"
                    maxLength={maxLength}
                    placeholder={placeholder}
                    disabled={disabled}
                />
                {touched && error && <span className="slds-form-element__help">{error}</span>}

            </div>
        )
    }

    // Splits
    renderSplits = ({ fields, meta: { error } }) => {
        //console.log("renderSplits " + error);
        if (fields.length === 0) {
            fields.push({ 'label': 'label path 1', 'value': 'key_path_1' });
            fields.push({ 'label': 'label path 2', 'value': 'key_path_2' });
        }

        return (

            <div id="splitsGroup">

                <div className="slds-grid slds-gutters">
                    <div className="slds-col slds-size_1-of-2">
                        <label className="slds-form-element__label">Label - text that is displayed in the Journey Builder UI</label>
                    </div>
                    <div className="slds-col slds-size_1-of-2">
                        <label className="slds-form-element__label">Value(Key) - the result of activity outcome</label>
                    </div>
                </div>

                {fields.map((split, index) => (
                    <div key={index} >
                        <div className="slds-grid slds-gutters slds-m-bottom_xx-small">
                            <div className="slds-col slds-size_1-of-2">
                                <Field name={`${split}.label`} component={this.renderInput} placeholder="label" />
                            </div>
                            <div className="slds-col slds-size_1-of-2">
                                <Field name={`${split}.value`} component={this.renderInput} placeholder="value" />
                            </div>
                        </div>

                        {/* {error && <li className="error">{error}</li>} */}
                        <div className="slds-text-color_error">
                            {error}
                        </div>
                    </div>
                ))}

                {/* Split Actions Buttons */}
                <button className="slds-button slds-button_neutral slds-m-bottom_medium"
                    onClick={() => fields.length < 5 && fields.push({ 'label': `label path ${fields.length + 1}`, 'value': `key_path_${fields.length + 1}` })}
                    type="button" disabled={fields.length >= 5} aria-live="assertive" id="addSplitBtn">
                    <svg className="slds-button__icon slds-button__icon_left" aria-hidden="true">
                        <use href="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
                    </svg>Add
        </button>
                <button className="slds-button slds-button_neutral slds-m-bottom_medium" onClick={() => fields.length > 1 && fields.splice(-1, 1)} type="button"
                    disabled={fields.length <= 2} aria-live="assertive" id="removeSplitBtn">
                    <svg className="slds-button__icon slds-button__icon_left" aria-hidden="true">
                        <use href="/assets/icons/action-sprite/svg/symbols.svg#remove"></use>
                    </svg>Remove
        </button>

            </div>
        );
    };

    // Steps
    renderSteps = ({ fields, meta: { error } }) => {
        //console.log("error " + error);
        if (fields.length === 0) {
            fields.push({ 'label': 'Step 1', 'value': 'step_1' });
            fields.push({ 'label': 'Step 2', 'value': 'step_2' });
        }

        return (

            <div id="splitsGroup">

                <div className="slds-grid slds-gutters">
                    <div className="slds-col slds-size_1-of-2">
                        <label className="slds-form-element__label">Label - the text displayed in the steps wizard</label>
                    </div>
                    <div className="slds-col slds-size_1-of-2">
                        <label className="slds-form-element__label">Key - a unique identifier for the step</label>
                    </div>
                </div>

                {fields.map((step, index) => (
                    <div key={index} >
                        <div className="slds-grid slds-gutters slds-m-bottom_xx-small">
                            <div className="slds-col slds-size_1-of-2">
                                <Field name={`${step}.label`} component={this.renderInput} placeholder="label" />
                            </div>
                            <div className="slds-col slds-size_1-of-2">
                                <Field name={`${step}.value`} component={this.renderInput} placeholder="value" />
                            </div>
                        </div>

                        {/* {error && <li className="error">{error}</li>} */}
                        <div className="slds-text-color_error">
                            {error}
                        </div>
                    </div>
                ))}

                {/* Split Actions Buttons */}
                <button className="slds-button slds-button_neutral slds-m-bottom_medium"
                    onClick={() => fields.length < 5 && fields.push({ 'label': `Step ${fields.length + 1}`, 'value': `step_${fields.length + 1}` })}
                    type="button" disabled={fields.length >= 5} aria-live="assertive" id="addStepBtn">
                    <svg className="slds-button__icon slds-button__icon_left" aria-hidden="true">
                        <use href="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
                    </svg>Add
        </button>
                <button className="slds-button slds-button_neutral slds-m-bottom_medium" onClick={() => fields.length > 1 && fields.splice(-1, 1)} type="button"
                    disabled={fields.length <= 1} aria-live="assertive" id="removeStepBtn">
                    <svg className="slds-button__icon slds-button__icon_left" aria-hidden="true">
                        <use href="/assets/icons/action-sprite/svg/symbols.svg#remove"></use>
                    </svg>Remove
        </button>

            </div>
        );
    };

    // SchemaArgs
    renderSchemaArgs = ({ fields, meta: { error } }) => {
        //console.log("error " + error);
        return (

            <div>

                {fields.map((arg, index) => (
                    <div key={index}>
                        <div className="slds-grid slds-gutters slds-grid_vertical slds-border_top slds-m-top_xx-small">
                            <div className="slds-col slds-size_1-of-2 slds-m-bottom_xx-small">
                                <Field
                                    name={`${arg}.name`}
                                    component={FieldInput}
                                    maxLength="50"
                                    label="Name" />
                            </div>
                            <div className="slds-col slds-grid slds-p-around_none slds-m-bottom_xx-small">
                                <div className="slds-col slds-size_1-of-2">
                                    <Field
                                        name={`${arg}.dataType`}
                                        component={FieldSelect}
                                        label="DataType">
                                        <option value="Text">Text</option>
                                        <option value="Number">Number</option>
                                        <option value="Date">Date</option>
                                        <option value="Boolean">Boolean</option>
                                        <option value="Decimal">Decimal</option>
                                    </Field>
                                </div>
                                <div className="slds-col slds-size_1-of-2">
                                    <Field
                                        name={`${arg}.isNullable`}
                                        component={FieldSelect}
                                        label="IsNullable">
                                        <option value="false">FALSE</option>
                                        <option value="true">TRUE</option>
                                    </Field>
                                </div>
                            </div>
                            <div className="slds-col slds-grid slds-p-around_none slds-m-bottom_xx-small">
                                <div className="slds-col slds-size_1-of-2">
                                    <Field
                                        name={`${arg}.direction`}
                                        component={FieldSelect}
                                        label="Direction">
                                        <option value="in">In</option>
                                        <option value="out">Out</option>
                                    </Field>
                                </div>
                                <div className="slds-col slds-size_1-of-2">
                                    <Field
                                        name={`${arg}.access`}
                                        component={FieldSelect}
                                        label="Access">
                                        <option value="visible">Visible</option>
                                        <option value="hidden">Hidden</option>
                                    </Field>
                                </div>
                            </div>
                        </div>

                        {/* {error && <div className="slds-text-color_error">{error}</div>} */}
                    </div>
                ))}

                {/* Schema Actions Buttons */}
                <button className="slds-button slds-button_neutral slds-m-bottom_medium"
                    onClick={() => fields.length < 5 && fields.push({ 'label': `Step ${fields.length + 1}`, 'value': `step_${fields.length + 1}` })}
                    type="button" disabled={fields.length >= 5} aria-live="assertive" id="addStepBtn">
                    <svg className="slds-button__icon slds-button__icon_left" aria-hidden="true">
                        <use href="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
                    </svg>Add
        </button>
                <button className="slds-button slds-button_neutral slds-m-bottom_medium" onClick={() => fields.length > 1 && fields.splice(-1, 1)} type="button"
                    disabled={fields.length <= 0} aria-live="assertive" id="removeStepBtn">
                    <svg className="slds-button__icon slds-button__icon_left" aria-hidden="true">
                        <use href="/assets/icons/action-sprite/svg/symbols.svg#remove"></use>
                    </svg>Remove
        </button>

            </div>
        );
    };

    //
    onTypeChange(event) {
        console.log("onChange: " + event.target.value);
        console.log("state " + JSON.stringify(this.state));
        this.setState({ showSchemaArgs: event.target.value === 'RESTDECISION' ? true : false });
    }

    render() {
        console.log("render: " + JSON.stringify(this.state));
        const { reset } = this.props; // handleSubmit, pristine, submitting
        return (
            <div>
                {/* Title */}
                <div className="slds-shrink-none">
                    <div className="slds-page-header">
                        <div className="slds-grid slds-grid_vertical-align-center slds-grid_align-spread">
                            <div className="slds-col">
                                <h2 className="slds-text-heading--medium">
                                    Create configuration
                                </h2>
                            </div>
                            <div className="slds-col">
                                <Link to="/ca/list" className="slds-button slds-button_brand">
                                    <span className="slds-text-not-selected">
                                        <svg
                                            className="slds-button__icon slds-button__icon_left"
                                            aria-hidden="true">
                                            <use
                                                link="http://www.w3.org/1999/xlink"
                                                href="/assets/icons/utility-sprite/svg/symbols.svg#list"
                                            />
                                        </svg>
                                        List
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Body */}
                <div className="slds-grid slds-grid_align-center">
                    <div className="slds-size_3-of-4">
                        {/* Form */}
                        <form
                            onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}
                            className="slds-m-vertical_medium">
                            <div className="slds-form">
                                {/* General */}
                                <fieldset className="slds-form-element">
                                    <Field
                                        name="configKey"
                                        component={FieldInput}
                                        label="Key - Must match your activity key as defined when created in App Center." />

                                    <Field
                                        name="configEndpointUrl"
                                        component={FieldInput}
                                        placeholder="https://"
                                        disabled={true}
                                        label="EndpointUrl - Endpoint used to execute the journey. (Populated automatically)" />

                                    <Field
                                        name="configType" onChange={this.onTypeChange.bind(this)}
                                        component={FieldSelect}
                                        label="Type - String property representing the type of activity. This value must include one of the Marketing Cloud-provided types.">
                                        <option value="REST">REST</option>
                                        <option value="RESTDECISION">RESTDECISION</option>
                                    </Field>

                                    <Field
                                        name="configUseJwt"
                                        component={FieldSelect}
                                        label="Encode Custom Activities Using a JWT.">
                                        <option value="false">FALSE</option>
                                        <option value="true">TRUE</option>
                                    </Field>
                                </fieldset>

                                {/* General */}
                                <fieldset className="slds-form-element slds-form-element_stacked">
                                    <legend className="slds-form-element__label slds-text-title_caps slds-badge">
                                        General
                                </legend>
                                    <Field
                                        name="configName"
                                        component={FieldInput}
                                        maxLength="100"
                                        label="Name - Type of activity (i.e.'Send Email', 'SMS', 'Create Salesforce Lead'), as shown in the activity list." />
                                    <Field
                                        name="configDescription"
                                        component={FieldInput}
                                        maxLength="255"
                                        label="Description - Description of what the activity does and what purpose it fulfills." />
                                    <Field
                                        name="configSmallImageUrl"
                                        component={FieldInput}
                                        maxLength="255"
                                        label="Small Icon(15px) - String representing the small display icon for this activity." />
                                    <Field
                                        name="configBigImageUrl"
                                        component={FieldInput}
                                        maxLength="255"
                                        label="Icon(40px) - String representing the icon for this activity." />
                                    <Field
                                        name="configIsConfigured"
                                        component={FieldSelect}
                                        label="IsConfigured - If true, the activity is marked as configured when it is dropped on the canvas (required for activation)">
                                        <option value="false">FALSE</option>
                                        <option value="true">TRUE</option>
                                    </Field>
                                    <Field
                                        name="configConfigOnDrop"
                                        component={FieldSelect}
                                        label="ConfigOnDrop - If true, the activity configuration opens when the activity is dropped on the canvas.">
                                        <option value="false">FALSE</option>
                                        <option value="true">TRUE</option>
                                    </Field>
                                </fieldset>

                                {/* Split Configuration */}
                                {this.state.showSchemaArgs &&
                                    <fieldset
                                        id="splitPanel"
                                        className="slds-form-element slds-form-element_stacked">
                                        {" "}
                                        {/*slds-hide*/}
                                        <legend className="slds-form-element__label slds-text-title_caps slds-badge">
                                            Custom Split Setup
                                        </legend>
                                        <FieldArray name="configSplits" component={this.renderSplits} />
                                    </fieldset>
                                }
                                {/* User Interface */}
                                <fieldset
                                    id="splitPanel"
                                    className="slds-form-element slds-form-element_stacked">
                                    <legend className="slds-form-element__label slds-text-title_caps slds-badge">
                                        User Interface
                                    </legend>

                                    <Field
                                        name="configEditUrl"
                                        component={FieldInput}
                                        placeholder="https://"
                                        label="EditUrl - Endpoint for the UI displayed to marketers while configuring this activity." />

                                    <FieldArray name="configSteps" component={this.renderSteps} />

                                    <div className="slds-grid slds-gutters">
                                        <div className="slds-col slds-size_1-of-2">
                                            <Field
                                                name="configEditHeight"
                                                component={FieldInput}
                                                maxLength="5"
                                                label="Height - Property that defines the height of the iframe containing the configuration UI." />
                                        </div>
                                        <div className="slds-col slds-size_1-of-2">
                                            <Field
                                                name="configEditWidth"
                                                component={FieldInput}
                                                maxLength="5"
                                                label="Width - Property that defines the width of the iframe containing the configuration UI." />
                                        </div>
                                    </div>

                                </fieldset>

                                {/* Schema */}

                                <fieldset
                                    id="splitPanel"
                                    className="slds-form-element slds-form-element_stacked">
                                    <legend className="slds-form-element__label slds-text-title_caps slds-badge">
                                        Schema
                                    </legend>

                                    <div className="slds-form-element__group">
                                        <label className="slds-form-element__label">Object mirrors the activity configuration from
                                                        the top level of the config.json file and specifies schema information about in and
                                  out arguments.</label>

                                        <FieldArray name="SchemaArgs" component={this.renderSchemaArgs} />
                                    </div>

                                </fieldset>
                                {/* Action buttons */}
                                <div className="slds-form-element slds-m-vertical_medium">
                                    <div className="slds-button-group" role="group">
                                        <button id="saveBtn" className="slds-button slds-button_brand" value="save">
                                            Submit
                                        </button>
                                        <button className="slds-button slds-button_destructive" type="button" value="cancel" onClick={reset}>
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>

                        {/* Links */}
                        <div className="slds-box">
                            <h2 className="slds-text-heading--label">Notes:</h2>
                            <p>
                                <Link to="/ca/setup">How to setup custom activity</Link>
                            </p>
                            <p>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://developer.salesforce.com/docs/atlas.en-us.noversion.mc-app-development.meta/mc-app-development/creating-activities.htm">
                                    Marketing Cloud App Development - Create Custom Activities
                                </a>
                            </p>
                            <p>
                                <Link to="/ca/list">Browse existing configurations</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function validate(formValues) {
    //console.log("formValues: " + JSON.stringify(formValues));
    const errors = {};
    if (!formValues.configKey) {
        errors.configKey = "Key is required";
    }
    if (!formValues.configName) {
        errors.configName = "Name is required";
    }

    //console.log("splits: " + JSON.stringify(formValues.configSplits));
    // splits validation
    if (formValues.configSplits && formValues.configSplits.length) {
        const configSplitsErrors = [];
        formValues.configSplits.forEach((split, splitIndex) => {
            //console.log("split: " + JSON.stringify(split));
            if (split) {
                const splitErrors = {};
                if (!split.label) splitErrors.label = "Required";
                if (!split.value) splitErrors.value = "Required";
                configSplitsErrors[splitIndex] = splitErrors;
                //configSplitsErrors[splitIndex] = {'value':'Required'};
            }
        });
        if (configSplitsErrors.length) {
            errors.configSplits = configSplitsErrors;
            //configSplitsErrors[memberIndex] = memberErrors
        }
    }
    //errors.configSplits ="12234234";
    //console.log("Errors: " + JSON.stringify(errors));
    return errors;
}

export default reduxForm({
    validate,
    form: 'caCreateForm',
    destroyOnUnmount: false
})(CaCreateForm);
