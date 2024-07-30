import React from "react";

class Card extends React.Component {
    render() {
        return <div className="card mt-3 ms-3" style={{width: '18rem'}}>
            <div className="card-body">
                <h5 className="card-title">Homework 77</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="https://github.com/junjun-it-courses/react-hw/blob/master/task-1.html" className="btn btn-primary">junjun-it-courses</a>
            </div>
        </div>;
    }
}

export default Card;