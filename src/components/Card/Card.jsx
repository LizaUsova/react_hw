import React from "react";
import Body from "./Body";  // Ensure the correct import
import Title from "./Title";
import Text from "./Text";

class Card extends React.Component {
    static Body = Body;
    static Title = Title;
    static Text = Text;

    render() {
        return <div className="card card-block">{this.props.children}</div>;
    }
}

export default Card;