import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { registerUser } from '../../actions/authActions';
import InputGroup from '../partials/InputGroup';
import Title from "../partials/Title";

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
    this.handleQueryInput = this.handleQueryInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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

  handleSubmit(e) {
    e.preventDefault()
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    }
    this.props.registerUser(
      newUser,
      this.props.history
    )
  }

  handleQueryInput(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    const { name, email, password, password2, errors } = this.state
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
              action="/api/users/login"
              method="post">

              <div className="slds-form-element">
                <label className="slds-form-element__label" htmlFor="email">Username</label>
                <div className="slds-form-element__control">
                  <input type="name" name="name" className="slds-input" placeholder='Your name' />
                </div>
              </div>
              <div className="slds-form-element">
                <label className="slds-form-element__label" htmlFor="email">Email</label>
                <div className="slds-form-element__control">
                  <input type="email" name="email" className="slds-input" placeholder='Your Email'/>
                </div>
              </div>
              <div className="slds-form-element">
                <label className="slds-form-element__label" htmlFor="password">Password</label>
                <div className="slds-form-element__control">
                  <input type="password" name="password" className="slds-input" placeholder='Required Password'/>
                </div>
              </div>
              <div className="slds-form-element">
                <label className="slds-form-element__label" htmlFor="password">Confirm</label>
                <div className="slds-form-element__control">
                  <input type="password" name="password2" className="slds-input" placeholder='Confirm your Password'/>
                </div>
              </div>
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

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
})

export default withRouter(connect(mapStateToProps, { registerUser })(Register))
