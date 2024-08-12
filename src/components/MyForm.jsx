import React from "react";
import classNames from "classnames";

function MyForm() {

        return (
            <form name="myForm" className="mt-3 ms-3">
            <div className="col-md-6 mb-3">
                <label htmlFor="email" className="col-form-label">Email</label>
                <input type="email" name="email" className="form-control" id="email" placeholder="Email" />
            </div>
            <div className="form-group col-md-6">
                <label htmlFor="password" className="col-form-label">Password</label>
                <input type="password" name="password" className="form-control" id="password" placeholder="Password" />
            </div>
            <div className="col-md-6 mb-3">
                <label htmlFor="address" className="col-form-label">Address</label>
                <textarea type="text" className="form-control" name="address" id="address" placeholder="1234 Main St"></textarea>
            </div>
            <div className="col-md-6 mb-3">
                <label htmlFor="city" className="col-form-label">City</label>
                <input type="text" className="form-control" name="city" id="city" />
            </div>
            <div className="col-md-6 mb-3">
                <label htmlFor="country" className="col-form-label">Country</label>
                <select id="country" name="country" className="form-control">
                    <option>Choose</option>
                    <option value="argentina">Argentina</option>
                    <option value="russia">Russia</option>
                    <option value="china">China</option>
                </select>
            </div>
            <div className="col-md-6 mb-3">
                <div class="form-check">
                    <label class="form-check-label" for="rules">
                        <input id="rules" type="checkbox" name="acceptRules" class="form-check-input" />
                            Accept Rules
                    </label>
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Sign in</button>
        </form>
)}

export default MyForm;