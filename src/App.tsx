import React from 'react';
import { useDrag } from '@use-gesture/react'; /* import use-gesture/react to enable draggable items */
import { useRef } from 'react'; /* import useRef to handle with mutable elements */
import bikeRn from './img/project-bikeRn.png';
import './Style.scss';

function App() {
  const slideRef: any = useRef(null); /* create a constant to useRef */

  const bind = useDrag(({ offset: [x] }) => {
    slideRef.current.style.transform = `translateX(${x}px)` /* change the x coordinate of current element */
  }); /* create a const to useDrag*/

  return (
    <div
      className="slide-container"
      ref={slideRef} {...bind()}
    > 
      <h1>This an Example of draggable li horizontally</h1>

      <ul>
        <li>
          Item 1
          <img src={bikeRn} alt="" />
        </li>
        <li>
          Item 2
          <img src={bikeRn} alt="" />
        </li>
        <li>
          Item 3
          <img src={bikeRn} alt="" />
        </li>
        <li>
          Item 5
          <img src={bikeRn} alt="" />
        </li>
        <li>
          Item 6
          <img src={bikeRn} alt="" />
        </li>
      </ul>
    </div>
  );
}

export default App;
