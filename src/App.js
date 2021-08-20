
import './App.css';
import {useState} from "react";

function App() {

  const [minutes, setMinutes] = useState(2);
  const [seconds, setSeconds] = useState(30);

  function Reset(){
    console.log("Clicked")
    setMinutes(0);
    setSeconds(30);
  }

  function Add30() {
    if (seconds === 0) {
      setSeconds(seconds + 30);
    }
    if(seconds ===30){
      setSeconds(0);
      setMinutes(minutes+1);
    }




    console.log(seconds)
    console.log(minutes)
    }




  return (
    <div className="App">
    <div className="Container">
      <h2 className="Title"> T I M E</h2>
      <h1 className="TimeData">{minutes}:{seconds}</h1>
      <button className="Button" onClick={Reset}>r e s e t</button>
      <button className="Button" onClick={Add30}>a d d 3 0</button>
      {/*<button className="Button" onClick={Add30}>B E A S T M O D E</button>*/}
    </div>

    </div>
  );
}

export default App;
