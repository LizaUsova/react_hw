import React from "react";
import {useState} from "react";
import classNames from "classnames";

const BtnGroup = ({ buttonLeftText, buttonMiddleText, buttonRightText }) => {
    const [buttonState, setButtonState] = useState({
        left: 'hidden',
        middle: 'hidden',
        right: 'hidden'
    });

    const handleButtonClick = (button) => {
        setButtonState((prevState) => {
            if (prevState[button] === 'shown') {
                return {
                    ...prevState,
                    [button]: 'hidden'
                };
            }
            else {
                return {
                    left: 'hidden',
                    middle: 'hidden',
                    right: 'hidden',
                    [button]: 'shown'
                };
            }
        });
    };

    return (
        <div>
            <div className="btn-group mt-3 ms-3" role="group" aria-label="Basic example">
                <button
                    type="button"
                    className={classNames("btn btn-primary border border-white", {
                        active: buttonState.left === 'shown'
                    })}
                    onClick={() => handleButtonClick('left')}
                >
                    {buttonLeftText}
                    {buttonState.left === 'shown'}
                </button>
                <button
                    type="button"
                    className={classNames("btn btn-primary border border-white", {
                        active: buttonState.middle === 'shown'
                    })}
                    onClick={() => handleButtonClick('middle')}
                >
                    {buttonMiddleText}
                    {buttonState.middle === 'shown'}
                </button>
                <button
                    type="button"
                    className={classNames("btn btn-primary border border-white", {
                        active: buttonState.right === 'shown'
                    })}
                    onClick={() => handleButtonClick('right')}
                >
                    {buttonRightText}
                    {buttonState.right === 'shown'}
                </button>
            </div>
        </div>
    );
};
export default BtnGroup;