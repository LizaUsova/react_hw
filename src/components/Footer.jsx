import React from "react";

function Footer({ toggle }) {
    return (
        <div className="modal-footer">
            <button onClick={toggle} type="button" className="modal-close-button btn btn-secondary">
                Cancel
            </button>
        </div>
    );
}

export default Footer;
