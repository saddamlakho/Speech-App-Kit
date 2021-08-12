import React, {useState} from 'react'
import { useSpeechSynthesis } from 'react-speech-kit';
import './App.css';


function App() {
const [value, setValue] = useState('')
const {speak} = useSpeechSynthesis();
  return (
    <div className="App">
       <h1>Speech Kit</h1>
       <textarea rows="10" value={value} onChange={(e) => setValue(e.target.value)}  ></textarea>
      <div>
         <button onClick={() => speak({text: value})} >Speech</button>
      </div>
      
    </div>
  );
}

export default App;
