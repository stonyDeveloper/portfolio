import React, { useState, useEffect, useRef } from 'react';
import './CustomCursor.css'; // Create a CSS file for styling

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [click, setClick] = useState(false);

  const onMouseMove = (e) => {
    if (cursorRef.current) {
      const { clientX, clientY } = e;
      cursorRef.current.style.left = clientX + 'px';
      cursorRef.current.style.top = clientY + 'px';
    }
  };

  const handleClick = () => {
    setClick(true);
    setTimeout(() => {
      setClick(false);
    }, 500);
  };

  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove);
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div className='h-0 w-0'>
      <div
        ref={cursorRef}
        className={`cursor ${click ? 'click' : ''}`}
      />
      <div className="content" onClick={handleClick}>
        {/* Your main content here */}
      </div>
    </div>
  );
};

export default CustomCursor;
