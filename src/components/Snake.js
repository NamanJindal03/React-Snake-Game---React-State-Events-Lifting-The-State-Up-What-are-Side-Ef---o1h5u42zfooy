import React from 'react';

export default (props) => {
  const ref = React.useRef();
  return (
    <div>
      {props.snakeDots.map((dot, i)=>{
        return(
          <div className="snake-dot" ref={ref} style={{top: `${dot[0]}%`, left: `${dot[1]}%`}} key={i}></div>
        )
      })}
          
    </div>
  )
}