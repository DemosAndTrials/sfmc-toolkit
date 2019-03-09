import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from "redux-form";
import { registerUser } from '../../actions/authActions';
import FieldInput from "../partials/FieldInput";
import Title from "../partials/Title";
import isEmpty from '../../utils/isEmpty';
import Validator from 'validator';

class Register extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      errors: {},
    }
  }

  componentDidMount() {
    const { isAuthenticated } = this.props.auth
    isAuthenticated && this.props.history.push('/')
  }

  componentDidUpdate(prevProps) {
    const { isAuthenticated } = this.props.auth
    isAuthenticated && this.props.history.push('/')
    if (prevProps.errors !== this.props.errors) {
    this.setState({ errors: this.props.errors })
    }
  }

  handleSubmit(values) {
    const newUser = {
      name: values.name,
      email: values.email,
      password: values.password,
      password2: values.password2,
    }
    this.props.registerUser(
      newUser,
      this.props.history
    )
  }

  render() {
    const { errors } = this.state
    return (
      <div>
         <Title text="Register in the application" />
         {/* -- body -- */}
        <div className="slds-form slds-form_stacked slds-grid slds-grid_align-center slds-m-top_medium">
          <div className="slds-card slds-col slds-size_2-of-6">
            <div className='slds-text-align_center slds-m-top_small '>
              <p className="slds-text-heading--medium">
                <a href='/auth/google' className="google">
                  <i className="fab fa-google-plus-g"></i>
                  <span>Sign In with google</span>
                </a>
              </p>
              <p className="slds-text-heading--medium slds-m-around_small ">
                <a href='/auth/facebook' className="facebook">
                  <i className="fab fa-facebook-f"></i>
                  <span >Sign In with facebook</span>
                </a>
              </p>
              <h2 className="slds-text-heading--medium">Or Register here</h2>
            </div>
            <form
              className='slds-m-around_small'
              onSubmit={this.props.handleSubmit(this.handleSubmit.bind(this))}>
              <Field
                name="name"
                component={FieldInput}
                maxLength="100"
                label="Username" error={errors.name}/>
              <Field
                name="email"
                component={FieldInput}
                maxLength="100"
                label="Email" error={errors.email}/>
             <Field
                name="password"
                component={FieldInput}
                maxLength="100" type='password'
                label="Password" error={errors.password}/>
               <Field
                name="password2"
                component={FieldInput}
                maxLength="100" type='password'
                label="Confirm"  error={errors.password2}/>
             
              <div className="slds-form-element">
                <button className="slds-button slds-button_brand" type="Submit">Register</button>
              </div>
              <hr className="slds-m-around_x-small" />

              <span>You already have an account? 
                <Link className="slds-m-left_xx-small" to='/login'>Login</Link>
              </span>

            </form>
          </div>
        </div>
      </div>
    )
  }
}

// validate
function validate(formValues) {
  const errors = {};

  formValues.name = !isEmpty(formValues.name) ? formValues.name : ''
  formValues.email = !isEmpty(formValues.email) ? formValues.email : ''
  formValues.password = !isEmpty(formValues.password) ? formValues.password : ''
  formValues.password2 = !isEmpty(formValues.password2) ? formValues.password2 : ''

  if (!Validator.isLength(formValues.name, { min: 2, max: 30 })) {
    errors.name = 'Name must be between 2 and 30 characters'
  }

  if (!Validator.isEmail(formValues.email)) {
    errors.email = 'Email is invalid'
  }

  if (!Validator.isLength(formValues.password , { min: 6, max: 30 })) {
    errors.password = 'Password must be at least 6 characters'
  }

  if (!Validator.equals(formValues.password, formValues.password2 )) {
    errors.password2 = 'Passwords must match'
  }

  if (Validator.isEmpty(formValues.password2)) {
    errors.password2 = 'Confirm Password field is required'
  }

  if (Validator.isEmpty(formValues.name)) {
    errors.name = 'Name field is required'
  }

  if (Validator.isEmpty(formValues.email)) {
    errors.email = 'Email field is required'
  }

  if (Validator.isEmpty(formValues.password)) {
    errors.password = 'Password field is required'
  }
 
  return errors;
}

const mapDispatchToProps = {
  registerUser, // will be wrapped into a dispatch call
}

function mapStateToProps(state) {
  //console.log("mapStateToProps: " + JSON.stringify(state));
  return ({
      auth: state.auth,
      errors: state.errors,
      registerUser
    });
}

export default reduxForm({
  validate,
  form: 'userRegisterForm'
})(connect(mapStateToProps, mapDispatchToProps)(withRouter(Register)));

