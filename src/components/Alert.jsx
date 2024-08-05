import React from "react";
// import classNames from "classnames";

class Alert extends React.Component {
    render() {
        const {text, type} = this.props;
        return <div className={`alert alert-${type}`} role="alert">
            {this.props.text}
        </div>
    }
}


export default Alert;