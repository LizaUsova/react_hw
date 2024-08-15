import React from 'react';
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

function Modal({ isOpen, toggle }) {
    const modalClass = isOpen ? "modal fade show" : "modal fade";
    const displayStyle = isOpen ? { display: 'block' } : { display: 'none' };

    return (
        <div className={modalClass} style={displayStyle} role="dialog">
            <div className="modal-dialog">
                <div className="modal-content">
                    <Header toggle={toggle} />
                    <Body />
                    <Footer toggle={toggle} />
                </div>
            </div>
        </div>
    );
}

export default Modal;