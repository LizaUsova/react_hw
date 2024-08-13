import React, { useState } from "react";

function Collapse({ text, opened = true }) {
        const [isActive, setOpen] = useState(opened);

        const handleClick = () => {
                setOpen(!isActive);
        };

        return (
            <div className="m-5">
                    <p>
                            <a onClick={handleClick} className="btn btn-primary" href="#" role="button"
                                aria-expanded={isActive}
                            >
                                    {isActive ? "Hide" : "Show"}
                            </a>
                    </p>
                    <div className={`collapse ${isActive ? "show" : ""}`}>
                            <div className="card card-body">{text}</div>
                    </div>
            </div>
        );
}

export default Collapse;