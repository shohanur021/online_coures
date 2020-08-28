import React from 'react';
import logo from './myLogo.jpg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import fakeData from './fakeData';
import Header from './Components/Header/Header';
import { useState } from 'react';
import Main from './Components/Main/Main';
import Add from './Components/Add/Add';

const findTotalPrice = (course) => {
  if(course.length === 0){
      return 0.00;
  }
  const total = course.reduce((a, c) => (a+c.cost), 0).toFixed(2);
  return total;
}

function App() {
  const courses = [...fakeData];
  const [course, setCourse] = useState([]);

  const handleCourse = (addedCourse) => {
    const newCourse = [...course, addedCourse];
    let uniq = [];
    let uniqCourse = [];
    for (let i = 0; i < newCourse.length; i++) {
      if(uniq.indexOf(newCourse[i].id)===-1){
        uniq.push(newCourse[i].id);
        uniqCourse.push(newCourse[i]);
      }
    }
    setCourse(uniqCourse);
  }

  const handleRemoveCourse = (removedCourse) => {
    const finalCourses = course.filter(crs => crs.id !== removedCourse.id);
    setCourse(finalCourses);
  }
  return (
    <div className="App bg-dark">
      <Header image={logo}></Header>
      <div className="container course">
        <div className="row course-details">
          {
            courses.map(crs => <Main key={crs.id} handleCourse={handleCourse} course={crs}></Main>)
          }
        </div>
        <div className="course-cart text-center">
          <div id="memo">
          <h5 className="text text-info">Enrolled Courses: {course.length}</h5>
          <h6 className={`text text-dark`}>Total Price: {findTotalPrice(course)} Taka</h6>
          </div>
          <div className="cart">
            {
              course.map(crs => <Add key={crs.id} handleRemoveCourse={handleRemoveCourse} addCourse={crs}></Add>)
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
