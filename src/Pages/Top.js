import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Top.css';

const Top = () => {
    const navigate = useNavigate();

  const handleClick = () => {
    navigate('/community');
  };

  return (
    <div className= "toppage">
        <div className = "topcontent">
            <img src="top.jpg" alt="Top page banner" />
            <button onClick={handleClick}>Start</button>
        </div>
    </div>
  );
};

export default Top;
