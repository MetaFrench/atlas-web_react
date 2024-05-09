import React from 'react'
import CourseListRow from './CourseListRow';
import './CourseList.css'

function CourseList() {
  return (
    <>
      <table id='CourseList'>
        <thead>
          <CourseListRow  isHeader={true} textFirstCell='Available courses' />
          <CourseListRow  isHeader={true} textFirstCell='Course Name' textSecondCell='Credit' />
        </thead>
        <tbody>
          <CourseListRow  isHeader={false} textFirstCell='ES6' textSecondCell='60' />
          <CourseListRow  isHeader={false} textFirstCell='Webpack' textSecondCell='20' />
          <CourseListRow  isHeader={false} textFirstCell='React' textSecondCell='40' />
        </tbody>
      </table>
      <hr></hr>
    </>
  );
}

export default CourseList;