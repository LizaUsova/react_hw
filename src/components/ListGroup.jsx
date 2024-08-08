import React from "react";

const ListGroup = ({children}) => {
    return (
         <ul className="list-group">
            {React.Children.map(children, (child, item) => (
                <li key={item.id} className="list-group-item">
                    {child}
                </li>
            ))}
        </ul>
    );
}
export default ListGroup;