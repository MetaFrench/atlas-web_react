import React from 'react'
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import CourseListRow from './CourseListRow';
import { CourseShape } from './CourseShape';

function CourseList({ listCourses = [] }) {
  return (
    <>
      <table className={css(styles.courseList)} id='CourseList'>
        <thead>
          <CourseListRow  isHeader={true} textFirstCell='Available courses' />
          <CourseListRow  isHeader={true} textFirstCell='Course Name' textSecondCell='Credit' />
        </thead>
        <tbody>
          {listCourses.length === 0 ? (
            <tr>
              <td className={css(styles.td)} colSpan="2">No course available yet</td>
            </tr>
          ) : (
            listCourses.map((course) => (
              <CourseListRow key={course.id} isHeader={false} textFirstCell={course.name} textSecondCell={course.credit.toString()} />
            ))
          )}
        </tbody>
      </table>
    </>
  );
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape)
};

const styles = StyleSheet.create({
  courseList: {
    marginTop: '2rem',
    border: '1px solid lightgray',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '90%',
    borderCollapse: 'collapse'
  },
  
  // topHeader: {
  //   textAlign: 'center'
  // },
  
  // table: {
  //   marginLeft: 'auto',
  //   marginRight: 'auto',
  //   width: '90%',
  //   borderCollapse: 'collapse'
  // },
  
  // th: {
  //   borderBottom: '2px solid lightgray'
  // },
  
  td: {
    padding: '3px',
    textAlign: 'left'
  }
});

export default CourseList;