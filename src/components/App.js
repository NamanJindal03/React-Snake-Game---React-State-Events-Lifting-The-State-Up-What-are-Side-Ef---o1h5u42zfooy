import React, {useEffect, useState} from 'react';
import Snake from './Snake';
import Food from './Food';
import styles from "../styles/index.css";




const App = () =>  {
  const [dotLocation, setDotLocation] = useState([0,0]);
  const [snakeSpeed, setSnakeSpeed] = useState(5000);
  const [direction, setDirection] = useState('right');
  const [snakeDots, setSnakeDots] = useState([[0,0], [0,2]]);
  console.log('main', snakeDots);
  const generateFood = () => {
    //TODO: The food on regeration cannot come under the snake body
    const top = Math.floor(Math.random() *50) *2;
    const left = Math.floor(Math.random() *50) *2;
    setDotLocation([top, left])
  }

  // const moveSnake = () => {
  //   console.log('moveSnake called')
  //   //Note: First index is top posiiton, second is left position
  //   let initialPosition = [...snakeDots];
  //   console.log(initialPosition)
  //   let head = initialPosition[0];
  //   let head2;
  //   switch(direction){
  //     case 'right':
  //       console.log(head)
  //       head2 = [head[0], head[1]+2]
  //       break;
  //     case 'down':
  //       head2 = [head[0]+2, head[1]]
  //       break;
  //     case 'left':
  //       head2 = [head[0], head[1]-2]
  //       break;
  //     case 'up':
  //       head2 = [head[0]-2, head[1]]
  //       break;
  //   }
  //   console.log(head2)
  //   initialPosition.pop();
  //   initialPosition.unshift(head2);
    
  //   console.log(initialPosition);
  //   setSnakeDots([...initialPosition])
  // }
  const moveSnake = () => {
    //debugger;
    console.log(snakeDots);
    let head = snakeDots[snakeDots.length - 1];
    console.log('head', head)
    switch(direction){
      case 'right':
        head = [head[0], head[1]+2]
        break;
      case 'down':
        head = [head[0]+2, head[1]]
        break;
      case 'left':
        head = [head[0], head[1]-2]
        break;
      case 'up':
        head = [head[0]-2, head[1]]
        break;
    }
    console.log('after head', head)
    let dots = [...snakeDots];
    dots.push(head);
    dots.shift();
    console.log(dots)
    setSnakeDots(dots)
  }
  useEffect(()=>{
    generateFood();
    setInterval(()=>{
      //TODO: 
      moveSnake();
    }, snakeSpeed)
  }, [])
  return (
    <div className="game-area">
      <Snake snakeDots={snakeDots}/>
      <Food dot={dotLocation}/>
    </div>
  );
}
/* 
  1 -> 2
  2 -> 4
  3 -> 6
*/
export default App;
