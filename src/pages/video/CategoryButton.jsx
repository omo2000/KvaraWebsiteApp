import React from 'react';

const CategoryButton = ({ onClick, buttonText }) => {
  return (
    <button onClick={onClick} style={{ marginRight: '10px' }}>
      {buttonText}
    </button>
  );
};

export default CategoryButton;