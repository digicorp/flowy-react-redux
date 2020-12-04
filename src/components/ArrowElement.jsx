import React from 'react';

const ArrowElement = (props) => {
    console.log("ArrowElement propsssssssss", props)  
  const noSelectBlockStyle = {
      Left : '236px',
      Top: '148px'
  }
  return (
      <React.Fragment>      
          <div class="arrowblock" style={{left: 139+'px', top: 120+'px'}}>
              <input type="hidden" class="arrowid" value="1" />
                <svg preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 0L20 40L20 40L20 80" stroke="#C5CCD0" stroke-width="2px"></path>
                    <path d="M15 75H25L20 80L15 75Z" fill="#C5CCD0"></path>
                </svg>
            </div>      
    </React.Fragment>
  );
};

export default ArrowElement;