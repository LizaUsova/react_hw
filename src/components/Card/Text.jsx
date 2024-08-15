import React from "react";

const Text = (props) =>
    <div className="card-text">{props.text ||props.children}</div>;

export default Text;
