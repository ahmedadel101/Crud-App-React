import React from 'react';
import './AddCourse.css';
import { InputGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';



const AddCourse = (props) => {

    return (
        <div className="container mt-3 p-2">
            <Form onSubmit={props.addCourse}>
                <InputGroup className="mb-3 p-2">
                    <FormControl
                        type="text"
                        placeholder="Add Course"
                        onChange={props.update}
                        value={props.current}
                        required
                    />
                    <InputGroup.Append>
                        <Button type="submit" variant="outline-warning">Add Course</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Form>

        </div>
    )
}


export default AddCourse;