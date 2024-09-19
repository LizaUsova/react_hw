const TodoItem = ({ item, onRemove }) => {
    return (
        <div>
            <div className="row">
                <div className="col-auto">
                    <button
                        type="button"
                        className="btn btn-primary btn-sm"
                        onClick={onRemove}>
                        -
                    </button>
                </div>
                <div className="col">{item}</div>
            </div>
            <hr />
        </div>
    );
};

export default TodoItem;
