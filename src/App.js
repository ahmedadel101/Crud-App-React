import React from 'react';
import './App.css';
import CoursesList from './components/CoursesList/CoursesList'
import AddCourse from './components/AddCours/AddCourse.js';

class App extends React.Component {

  state = {
    Courses: [
      { name: "Html" },
      { name: "Css" },
      { name: "JavaScript" }
    ],

    current: ''
  }

  //updateCourse
  updateCourse = (e) => {
    this.setState({
      current: e.target.value
    })

  }

  //addCourse
  addCourse = (e) => {
    e.preventDefault();
    console.log("Course Added")
    let current = this.state.current;
    let Courses = this.state.Courses;
    Courses.push({ name: current })
    this.setState({
      Courses,
      current: ''
    })
  }

  // Delete 

  DeleteCourse = (index) => {
    let Courses = this.state.Courses;
    Courses.splice(index, 1);
    this.setState({
      Courses
    })
  }

  // editCourse 

  editCourse = ( index , value) =>{
    let Courses = this.state.Courses;
    let course = Courses[index];
    course['name']= value;
    this.setState({Courses});
  }



  render() {
    const { Courses } = this.state;
    const coursesList = Courses.map((course, index) => {
      return <CoursesList courseDetails={course} key={index} index={index} DeleteCourse={this.DeleteCourse} editCourse={this.editCourse}/>
    })
    return (
      <div className="App p-0 ">
        <AddCourse current={this.state.current} update={this.updateCourse} addCourse={this.addCourse} />

        <div className="layout">

          <ul>{coursesList}</ul>
        </div>
      </div>
    );
  }
}

export default App;
