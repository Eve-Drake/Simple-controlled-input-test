import { useState } from 'react';
import './App.css';

function App() {
  const [colour, setColour] = useState<string>('')

  //Simple Regex to remove spaces in inputs -- eg. 'light blue' to 'lightblue'
  const colourNoSpaces = colour.replace(/\s/g, '')

  return (
    <div className="App">
      <input 
      placeholder='Enter a Colour to Change the Box'
      value={colour}
      onChange={(e)=>setColour(e.target.value)}
      />

      {/*Area For Styling */}
      <div className='colourDisplay' style={{backgroundColor: `${colourNoSpaces}`}} />
    </div>
  );
}

export default App;
