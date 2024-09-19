import React from 'react';

const TodoItem = ({ item, onRemove }) => {
    return (
        <div>
            <div className="row">
                <div className="col-auto">
                    <button
                        type="button"
                        className="btn btn-primary btn-sm"
                        onClick={() => onRemove(item.id)}
                    >
                        -
                    </button>
                </div>
                <div className="col">{item.text}</div>
            </div>
            <hr />
        </div>
    );
};

export default TodoItem;
