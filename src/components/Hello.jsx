import React from "react";
import classNames from "classnames";

class Hello extends React.Component {
    render() {
        return <div>
            <div className="btn-group font-monospace" role="group">
                <button type="button" className="btn btn-outline-success">+</button>
                <button type="button" className="btn btn-outline-danger">-</button>
            </div>
        </div>
    }
}
export default Hello;