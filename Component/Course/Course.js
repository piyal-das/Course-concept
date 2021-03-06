import React, { useState } from 'react';
import fakeData from '../../fakeData/fakeData';
import CourseList from '../CourseList/CourseList';
import Cart from '../Cart/Cart';
import './Course.css'

    
const Course = () => {
    const [courses, setCourse] = useState(fakeData);

    const [cart, setCart] = useState([]);
const handleAddEvent = (courses) => {

    const newCourses = [...cart, courses];
    setCart(newCourses);
    console.log(cart);
  };
    return (
        <div className='courseContainer'>
           <div className="courseList">
                {
                    courses.map(course => <CourseList course = {course} handleAddEvent= {handleAddEvent} key= {course.key}>  </CourseList>)
                }
           </div>
           <div className="courseReview">
                <Cart cart = {cart} ></Cart>
           </div>
        </div>
    );
};

export default Course;