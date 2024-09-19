import React from 'react';
import TodoItem from './../TodoItem';

const TodoList = ({ items, removeTodo, removeAll }) => {
    const handleRemoveAll = (e) => {
        e.preventDefault();
        removeAll();
    };

    return (
        <div>
            <div className="mb-3">
                <form className="d-flex">
                    <button
                        type="submit"
                        className="btn btn-danger"
                        onClick={handleRemoveAll}>
                        Remove All
                    </button>
                </form>
            </div>
            <div>
                {items.map((item, index) => (
                    <TodoItem
                        key={index}
                        item={item}
                        onRemove={() => removeTodo(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default TodoList;
