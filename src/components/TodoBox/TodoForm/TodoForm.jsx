import {useState} from "react";
import {Form} from "react-bootstrap";

const TodoForm = ({ addTodo }) => {
    const [formData, setFormData] = useState({
        itemTask: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        if (formData.itemTask.trim()) {
            addTodo(formData.itemTask);
            setFormData({ itemTask: '' })
        }
    }


    const handleChange = ({target}) => {
       const formDataCopy = {...formData}
        formDataCopy[target.name] = target.value;
        setFormData(formDataCopy)
    }

    return (
        <div>
            <div className="mb-3">
                <Form className="d-flex">
                    <div className="me-3">
                        <input
                            type="text"
                            value={formData.itemTask}
                            onChange={handleChange}
                            name='itemTask'
                            className="form-control"
                            placeholder="I am going..." />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={handleSubmit}>
                        add
                    </button>
                </Form>
            </div>
        </div>
    );
}

export default TodoForm;

        