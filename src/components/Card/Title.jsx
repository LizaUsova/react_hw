import React from "react";

const Title = (props) =>
    <div className="card-title">{props.title || props.children}</div>;

export default Title;
