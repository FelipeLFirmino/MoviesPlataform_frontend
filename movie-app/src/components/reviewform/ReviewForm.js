import React from "react";
import { Form, Button } from "react-bootstrap";

const ReviewForm = ({handleSubmit,reviewText,label,defaultvalue}) => {
    return(
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>{label}</Form.Label>
              <Form.Control ref={reviewText} as ={"textarea"} rows = {3} defaultValue={defaultvalue} ></Form.Control>
            </Form.Group>
            <Button variant="outline-info" onClick={handleSubmit} >Submit</Button>
        </Form>
    )
}

export default ReviewForm;