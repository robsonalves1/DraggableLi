import React from 'react';
import { useDrag } from '@use-gesture/react';
import { useRef } from 'react';
import bikeRn from './img/project-bikeRn.png';
import './App.css';
import './Style.scss';

function App() {
  const slideRef: any = useRef(null);

  const bind = useDrag(({ offset: [x] }) => {
    slideRef.current.style.transform = `translateX(${x}px)`
  });

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
