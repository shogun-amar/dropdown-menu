import React, { useState } from 'react';

function App() {
  const [isHovered, setIsHovered] = useState(false);

  // for handling onMouseEnter
  const handleMouseEnter = () => {
    setIsHovered(true);
  }

  // for handling onMouseLeave
  const handleMouseLeave = () => { 
    setIsHovered(false);
  }

  return (
    <div className="dropdown">
      <h1> Should you use a Dropdown? </h1>
      <button onMouseEnter={handleMouseEnter} className='dropdown-btn' > Select &#9660; </button> {/* &#9660 is unique code for dropdown arrow, got it from google */}
      {/* if isHovered is true, it will show dropdown menu item */}
      {isHovered && (
        <div onClick={handleMouseLeave}>
          <p> Yes </p>
          <p> No </p>
          <p> Maybe </p>
        </div>  
      )}
    </div>
  );
}

export default App;
