import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Title from "../partials/Title";

class Login extends React.Component {
  componentDidMount() {
    const { isAuthenticated } = this.props.auth
    isAuthenticated && this.props.history.push('/dashboard')
  }
  componentDidUpdate(prevProps) {
    const { isAuthenticated } = this.props.auth
    isAuthenticated && this.props.history.push('/dashboard')
  }
  render() {
    return (
      <div>
         <Title text="Login in the application" />
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
              <h2 className="slds-text-heading--medium">Or Login here</h2>
            </div>
            <form
              className='slds-m-around_small'
              action="/api/users/login"
              method="post">

              <div className="slds-form-element">
                <label className="slds-form-element__label" htmlFor="email">Username</label>
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
                <button className="slds-button slds-button_brand" type="Submit">Login</button>
              </div>
              <hr className="slds-m-around_x-small" />
              <Link to="/register">Registration</Link>

            </form>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
})

export default withRouter(connect(mapStateToProps)(Login))
