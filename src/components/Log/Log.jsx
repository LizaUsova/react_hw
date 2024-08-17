import React, { useState } from "react";
import styles from './style.module.scss';
import classNames from "classnames";

function Log() {
    const [data, setData] = useState([]);

    const addPositiveLog = () => {
        addLog(1);
    };

    const addNegativeLog = () => {
        addLog(-1);
    };

    const removeLog = (index) => {
        const updatedLog = data.filter((_, i) => i !== index);
        setData(updatedLog);
    };

    const addLog = (delta) => {
        const newValue = data.length > 0 ? data[0] + delta : delta;
        setData([newValue, ...data]);
    };

    return (
        <div>
            <div className={classNames("btn-group", "font-monospace", styles.wrapper)} role="group">
                <button onClick={addPositiveLog} type="button" className={classNames("btn", "btn-outline-success", styles.mybtn, styles.mybtn_plus)}>+</button>
                <button onClick={addNegativeLog} type="button" className={classNames("btn", "btn-outline-danger", styles.mybtn, styles.mybtn_minus)}>-</button>
            </div>

            <div className="list-group">
                {data.map((value, index) => (
                    <button
                        key={index}
                        type="button"
                        className="list-group-item list-group-item-action"
                        onClick={() => removeLog(index)}
                    >
                        {value}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Log;
