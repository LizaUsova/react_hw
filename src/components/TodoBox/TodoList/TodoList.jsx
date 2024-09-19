import React from 'react';
import TodoItem from './../TodoItem';

const TodoList = ({ items, onRemove, removeAll }) => {
    return (
        <div>
            <div className="mb-3">
                <form className="d-flex">
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={removeAll}
                    >
                        Remove All
                    </button>
                </form>
            </div>
            <div>
                {items.map((item) => (
                    <TodoItem
                        key={item.id}
                        item={item}
                        onRemove={onRemove}
                    />
                ))}
            </div>
        </div>
    );
};

export default TodoList;
