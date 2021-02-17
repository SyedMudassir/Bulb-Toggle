import {useState} from 'react';
import './App.css';

function App() {
  const [bulbOnOff,setBulbOnOff] = useState(false)
  return (
    <div className="App">
    {bulbOnOff?<img src='images/bulb-off.png' alt='bulb on'/>:<img src='images/bulb-on.png' alt='bulb off' />}
    <br/>
    <button onClick={()=>setBulbOnOff(!bulbOnOff)}>{bulbOnOff?'Turn On':'Turn Off'}</button>  
    </div>
  );
}

export default App;
