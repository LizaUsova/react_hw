import React from "react";
// import classNames from 'classnames';

class Progress extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                percentage: props.percentage || 0,
            }
        }

    render() {
        const { percentage } = this.state;
        return (
                <div className="progress mt-3 ms-3">
                    <div className="progress-bar"
                         role="progressbar"
                         style={{ width: `${percentage}%` }}
                         aria-valuenow={this.state.percentage}
                         aria-valuemin="0"
                         aria-valuemax="100"></div>
                </div>
        );
    }
}

export default Progress;