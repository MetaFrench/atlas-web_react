import React from 'react'
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';
import { CourseShape } from './CourseShape';
import './CourseList.css'

function CourseList({ listCourses = [] }) {
  return (
    <>
      <table id='CourseList'>
        <thead>
          <CourseListRow  isHeader={true} textFirstCell='Available courses' />
          <CourseListRow  isHeader={true} textFirstCell='Course Name' textSecondCell='Credit' />
        </thead>
        <tbody>
          {listCourses.length === 0 ? (
            <tr>
              <td colSpan="2">No course available yet</td>
            </tr>
          ) : (
            listCourses.map((course) => (
              <CourseListRow key={course.id} isHeader={false} textFirstCell={course.name} textSecondCell={course.credit.toString()} />
            ))
          )}
          {/* <CourseListRow  isHeader={false} textFirstCell='ES6' textSecondCell='60' />
          <CourseListRow  isHeader={false} textFirstCell='Webpack' textSecondCell='20' />
          <CourseListRow  isHeader={false} textFirstCell='React' textSecondCell='40' /> */}
        </tbody>
      </table>
    </>
  );
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape)
};

export default CourseList;