import React, { useState } from 'react';

const CourseListRow = ({ isHeader = false, textFirstCell, textSecondCell }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <tr style={isChecked ? { backgroundColor: '#e6e4e4' } : {}}>
      {isHeader ? (
        <>
          <th colSpan="2">{textFirstCell}</th>
        </>
      ) : (
        <>
          <td>
            <input type="checkbox" onChange={handleCheckboxChange} checked={isChecked} />
            {textFirstCell}
          </td>
          <td>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
};

export default CourseListRow;
