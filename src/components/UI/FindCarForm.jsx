import React from "react";
import "../../styles/find-car-form.css"; 
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";
import { Link } from "react-router-dom";

const FindCarForm = () => {
  return (
    <Form className="form">
    <div className=" d-flex align-items-center justify-content-between flex-wrap">
        
        {/* 
        <FormGroup className="form__group">
            <input type="date" placeholder="Journey date" required />
        </FormGroup>*/}

        <FormGroup className="select__group">
            <select>
                <option value="pcmo">Pcmo</option>
                <option value="mco">Mco</option>
                <option value="other">Other Product</option>
            </select>
        </FormGroup>

        <FormGroup className="form__group">
            <Link to="/product">
                <button className="btn find__car-btn">Find Oil</button>
            </Link>
        </FormGroup>
    </div>
  </Form>
  );
}; 

export default FindCarForm; 