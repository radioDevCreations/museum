import React from 'react';
 
const SVGLetter = () => {
    return ( 
        <React.Fragment>
        <svg height="100%" width="800px">
          
        <text x="34%" y="500" fontSize="560" fontFamily="">G</text>
        <circle cx="calc(50% - 150px)" cy="50%" r="220px" fill="#fff"/>
        </svg>
      </React.Fragment>
     );
}
 
export default SVGLetter;