import React from "react";
import { Field } from "redux-form";


export default ({ input, children, label, meta }) => {

    //console.log(input);
    // const onChange = (event) => {
    //     console.log("onChange: " + event.target.value);
    //   };
    
    
 //console.log(children);
 return (
    <div className="slds-form-element slds-form-element_stacked">
      <label className="slds-form-element__label" htmlFor={input.name}>
        {label}
      </label>
      <div className="slds-form-element__control">
        <div className="slds-select_container">
        <Field name={input.name} className="slds-select" component="select" onChange={input.onChange}>
            {children.map(c => (
              <option value={c.props.value} key={c.props.value}>
                {" "}
                {c.props.children}{" "}
              </option>
            ))}
          </Field>
        </div>
      </div>
    </div>
  );

};