import React from 'react';
 
const SVGLetter = () => {
    return ( 
        <React.Fragment>
        <svg height="100%" width="800px">
        <circle cx="calc(50% - 150px)" cy="50%" r="220px" fill="#fff"/>
        <text x="38%" y="540" fontSize="540" fontFamily="">G</text>
        </svg>
      </React.Fragment>
     );
}
 
export default SVGLetter;