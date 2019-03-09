import React from "react";

export default ({ input, label, maxLength, placeholder, disabled, meta, error, type }) => {

    const className = `slds-form-element slds-form-element_stacked ${
      (meta.error || error) && meta.touched ? "slds-has-error" : ""
      }`;

      const renderError = () => {
        if (meta.touched && (meta.error || error)) {
          return (
            <div className="slds-form-element__help">
              {meta.error}{error}
            </div>
          );
        }
      };

      return (
        <div className={className}>
          <label className="slds-form-element__label" htmlFor={input.name}>
            {label}
          </label>
          <div className="slds-form-element__control">
            <input
              {...input}
              type={type || "text"}
              id={input.name}
              className="slds-input"
              maxLength={maxLength}
              placeholder={placeholder}
              disabled={disabled}
            />
          </div>
          {renderError()}
        </div>
      );
  };