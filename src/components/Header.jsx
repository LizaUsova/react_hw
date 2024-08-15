import React from "react";

function Header({ toggle }) {
    return (
        <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button onClick={toggle} type="button" className="btn-close" aria-label="Close"></button>
        </div>
    );
}

export default Header;
