import React from 'react';

export default (props) => {

 

  return (
    <div className="snake-food" style={{top: `${props.dot[0]}%`, left: `${props.dot[1]}%`}}></div>
  )
}