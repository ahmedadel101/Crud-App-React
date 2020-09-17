import React, { Fragment } from 'react';
import { InputGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import './CoursesList.css';

class CoursesList extends React.Component {
  state = {
    isEdit : false
  }
  // let {courses} = props;
  // let ListItems = courses.map((course , index) => {
  //     return(
  //         <div>
  //             <h1 key={index}>
  //                 {course.name} 

  //             </h1>
  //         </div>
  //     )
  // })

  // render Courses 
  renderCourses = () => {
    return(
      <li className=" CourseName list-unstyled my-3 mx-3">
      <div className="row mb-2">
        <div className="col-lg-8 col-md-6 col-sm-12 ">
          <h3 >{this.props.courseDetails.name}</h3>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-3">
          <Button onClick={() => {this.ToggleState()}} variant="outline-warning" >
            Edit
          </Button>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-3">
          <Button onClick={ () => {this.props.DeleteCourse(this.props.index)}} variant="outline-danger">
            Delete
          </Button>
        </div>
      </div>
    </li>
    )
  }

  // ToggleState = Edit Course
  ToggleState =() => {
    let {isEdit} = this.state;
    this.setState({
      isEdit : !isEdit
    })
  }

  // Edit Update 
  editUpdateCourse = (e) =>{
    e.preventDefault();
    this.props.editCourse(this.props.index , this.input.value);
    this.ToggleState();
  }
  // renderUpdateCourse
  renderUpdateCourse = () =>{
    return(
      <Form onSubmit={this.editUpdateCourse} >
      <InputGroup className="mb-3 p-2">
          <FormControl
              type="text"
              placeholder="Update Course"
              defaultValue={this.props.courseDetails.name}
              ref={(v) => {this.input = v}}
              required
          />
          <InputGroup.Append>
              <Button type="submit" variant="outline-warning">Update Course</Button>
          </InputGroup.Append>
      </InputGroup>
  </Form>
    )
}  

render() {
  let {isEdit} = this.state;
    return (
      <Fragment >
        { isEdit ? this.renderUpdateCourse() :this.renderCourses()}
      </Fragment>
    );
  }
}

export default CoursesList;
