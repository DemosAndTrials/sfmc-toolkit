import React from 'react'

export default () => {
  return (
    // <div className='spinner'>
    //   <img
    //     alt="Loading"
    //     src='/assets/images/spinners/slds_spinner_brand.gif'
    //   />
    // </div>
  <div className="slds-align_absolute-center" style={{height: '6rem', verticalAlign:'middle'}}>
  <div role="status" className="slds-spinner slds-spinner_medium slds-spinner_brand">
    <span className="slds-assistive-text">Loading</span>
    <div className="slds-spinner__dot-a"></div>
    <div className="slds-spinner__dot-b"></div>
  </div>
</div>
  )
}
