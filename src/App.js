import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App text-white">
      <CounterBox />
    </div>
  );
}

function CounterBox() {

  const [counter, setCounter] = useState(0);
  const [counterColor, setCounterColor] = useState("grey")

  

  function updateValue(value) {
    // calculo el nuevo valor
    const newValue = counter + +value;
    // actualizo el estado del contador 
    setCounter(newValue);

    const newColor = newValue > 0 ? 'green' : 'red';
    // Actualizo el color que de
    setCounterColor(newColor);
  }
    

  // TODO: Devuelveme el JSX esperado
  return (<div><h1 className="text-uppercase">counter</h1>
    <h1 id="counter" style={{'color': counterColor }}>{counter}</h1>
    <div className="col">
      <Button  text="lower count" value="-1" updateValue={updateValue} />
      <Button  text="add count" value="1" updateValue={updateValue} />
    </div></div>);
}

function Button(props) {

  // gestión del click que me acaban de hacer
  // Mi gestión del click consiste en invocar la función que me ha pasado mi padre diciéndole cuantas unidades debe sumar o restar (me estoy identificando para que sepa cual es el botón que han pulsado)

  function handleClick() {
    props.updateValue(props.value);
    
  
  }

  // TODO: Devuelveme un botón configurado según los requisitos
  return (<button onClick={handleClick} className="btn counterBtn prevBtn text-uppercase m-2">{props.text}</button>);

}

export default App;
