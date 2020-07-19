import React from "react";
import PropTypes from "prop-types";

class Modal extends React.Component {
  render() {
    // Render nothing if the "show" prop is false
    if (!this.props.show) {
      return null;
    }

    return (
      <div className="modal-backdrop-style">
        <div className="modal">
          <div className="showcontent">{this.props.children}</div>

          <div className="footer">
            <button onClick={this.props.onClose} className="modal-close-btn">
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node,
};

export default Modal;
