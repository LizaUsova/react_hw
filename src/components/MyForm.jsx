import React, { useState } from "react";

function MyForm() {
    const [data, setData] = useState({
        email: '', password: '', address: '', city: '', country: '', rules: false
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    function handleFormSubmit(event) {
        event.preventDefault();
        setIsSubmitted(true);
    }

    function handleInputChange(event, name) {
        const value = name === 'rules' ? event.target.checked : event.target.value;
        setData({ ...data, [name]: value });
    }

    function handleBack() {
        setIsSubmitted(false);
    }

    // Сортировка ключей объекта data
    const sortedData = Object.entries(data).sort(([a], [b]) => a.localeCompare(b));

    return (
        <div className="mt-3 ms-3">
            {isSubmitted ? (
                <div>
                    <button type="button" className="btn btn-primary" onClick={handleBack}>
                        Back
                    </button>
                    <table className="table mt-3">
                        <tbody>
                        {sortedData.map(([key, value]) => (
                            <tr key={key}>
                                <td>{key}</td>
                                <td>{String(value)}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <form onSubmit={handleFormSubmit} name="myForm">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="email" className="col-form-label">Email</label>
                        <input
                            value={data.email}
                            onChange={(e) => handleInputChange(e, 'email')}
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Email"
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="password" className="col-form-label">Password</label>
                        <input
                            value={data.password}
                            onChange={(e) => handleInputChange(e, 'password')}
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Password"
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="address" className="col-form-label">Address</label>
                        <textarea
                            value={data.address}
                            onChange={(e) => handleInputChange(e, 'address')}
                            className="form-control"
                            id="address"
                            placeholder="1234 Main St"
                        ></textarea>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="city" className="col-form-label">City</label>
                        <input
                            value={data.city}
                            onChange={(e) => handleInputChange(e, 'city')}
                            type="text"
                            className="form-control"
                            id="city"
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="country" className="col-form-label">Country</label>
                        <select
                            id="country"
                            className="form-control"
                            value={data.country}
                            onChange={(e) => handleInputChange(e, 'country')}
                        >
                            <option>Choose</option>
                            <option value="argentina">Argentina</option>
                            <option value="russia">Russia</option>
                            <option value="china">China</option>
                        </select>
                    </div>
                    <div className="col-md-6 mb-3">
                        <div className="form-check">
                            <input
                                checked={data.rules}
                                onChange={(e) => handleInputChange(e, 'rules')}
                                id="rules"
                                type="checkbox"
                                className="form-check-input"
                            />
                            <label className="form-check-label" htmlFor="rules">
                                Accept Rules
                            </label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Sign in</button>
                </form>
            )}
        </div>
    );
}

export default MyForm;
