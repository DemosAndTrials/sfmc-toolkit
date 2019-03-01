import React from 'react';
import PropTypes from 'prop-types';

class Modal extends React.Component {

  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }

    return (
        <div name="delete-modal">
            <section id="modalDelete" role="dialog" tabIndex="-1" aria-labelledby="modal-heading-01" aria-describedby="modal-content-id-1"
                className="slds-modal slds-fade-in-open">
                <div className="slds-modal__container">
                    <header className="slds-modal__header">
                        <button className="slds-button slds-button_icon slds-modal__close slds-button_icon-inverse" title="Close"
                            onClick={this.props.onCloseClick}>
                            <svg className="slds-button__icon slds-button__icon_large" aria-hidden="true">
                                <use href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
                            </svg>
                            <span className="slds-assistive-text">Close</span>
                        </button>
                        <h2 id="modal-heading-01" className="slds-text-heading_medium slds-hyphenate">{this.props.title}</h2>
                    </header>
                    <div className="slds-modal__content slds-p-around_medium" id="modal-content-id-1">
                        <p>{this.props.children}</p>
                    </div>
                    <footer className="slds-modal__footer">
                        <button className="slds-button slds-button_neutral" onClick={this.props.onButton1Click}>{this.props.button1Text || 'Cancel'}</button>
                        <button className="slds-button slds-button_destructive" onClick={this.props.onButton2Click}>{this.props.button2Text || 'Delete'}</button>
                    </footer>
                </div>
            </section>
            <div id="backdropDelete" className="slds-backdrop slds-backdrop_open"></div>
        </div>
    );
  }
}

Modal.propTypes = {
    onCloseClick: PropTypes.func.isRequired,
    onButton1Click: PropTypes.func.isRequired,
    onButton2Click: PropTypes.func.isRequired,
    show: PropTypes.bool,
    title: PropTypes.string,
    children: PropTypes.node
};

export default Modal;