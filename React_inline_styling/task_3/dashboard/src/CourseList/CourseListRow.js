import React from 'react'
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const colorOne = { backgroundColor: '#deb5b545' };
const colorTwo = { backgroundColor: '#f5f5f5ab' };

function CourseListRow({ isHeader = false, textFirstCell, textSecondCell = null }) {
  if (isHeader === true) {
    if (textSecondCell === null) {
      return (
        <tr>
          <th style={colorOne} className={css(styles.topHeader)} colSpan="2">{textFirstCell}</th>
        </tr>
      );
    } else {
      return (
        <tr>
          <th className={css(styles.th)}>{textFirstCell}</th>
          <th className={css(styles.th)}>{textSecondCell}</th>
        </tr>
      );
    }
  } else {
    return (
      <tr style={colorTwo}>
        <td className={css(styles.td)}>{textFirstCell}</td>
        <td className={css(styles.td)}>{textSecondCell}</td>
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

const styles = StyleSheet.create({
  topHeader: {
    textAlign: 'center'
  },
  
  th: {
    textAlign: 'left',
    borderBottom: '2px solid lightgray'
  },
  
  td: {
    padding: '3px',
    textAlign: 'left'
  }
});

// CourseListRow.defaultProps = {
//   isHeader: false,
//   textSecondCell: null,
// };

export default CourseListRow;