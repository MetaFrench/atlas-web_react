import React from 'react'
import PropTypes from 'prop-types';
import './CourseList.css'

const colorOne = { backgroundColor: '#deb5b545' };
const colorTwo = { backgroundColor: '#f5f5f5ab' };

function CourseListRow({ isHeader = false, textFirstCell, textSecondCell = null }) {
  if (isHeader === true) {
    if (textSecondCell === null) {
      return (
        <tr>
          <th style={colorOne} className='topHeader' colSpan="2">{textFirstCell}</th>
        </tr>
      );
    } else {
      return (
        <tr>
          <th >{textFirstCell}</th>
          <th >{textSecondCell}</th>
        </tr>
      );
    }
  } else {
    return (
      <tr style={colorTwo}>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
      </tr>
    );
  }
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
};

// CourseListRow.defaultProps = {
//   isHeader: false,
//   textSecondCell: null,
// };

export default CourseListRow;