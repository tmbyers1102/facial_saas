import React from 'react';
import {
  Image,
  Divider
} from 'semantic-ui-react'
import Board from "../components/Board";
import Card from "../components/Card";
import CBrown1 from '../assets/images/cecily_brown_1.jpg'
import CBrown2 from '../assets/images/cecily_brown_2.jpg'
import Rem1 from '../assets/images/rembrandt_1.jpg'
import Rem2 from '../assets/images/rembrandt_2.jpg'
import Train from '../assets/images/train.jpg'
import '../App.css';

function App() {
  return (
    <div className="App">
      <Divider horizontal>Drag and Drop</Divider>
      <main className="flexbox">
        <Board id="board-1" className="board">
          <Card id="card-1" className="card" draggable="true">
            <div className="crop">
              <Image
                src={CBrown1}
              />
              <p className="text">Card One</p>
            </div>
          </Card>
          <Card id="card-1" className="card" draggable="true">
            <div className="crop">
              <Image
                src={CBrown1}
              />
              <p className="text">Card Two</p>
            </div>
          </Card>
          <Card id="card-1" className="card" draggable="true">
            <div className="crop">
              <Image
                src={Rem2}
              />
              <p className="text">Card Three</p>
            </div>
          </Card>
          
        </Board>
      </main>
    </div>
  );
}

export default App;
