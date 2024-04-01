
import './App.css';
import { useState } from 'react'

/*
 useState 

 <button onClick={toggleText}>Show/Hide</button> <br/>
 can also be written using anonymous function as below
 <button onClick={() => {setShowText(!showText)}}>Show/Hide</button> <br/>
*/

function App() {

  let colors = ["red", "blue", "green", "brown"]
  
  const [age, setAge] = useState(0)
  const [inText, setInText] = useState("")
  const [showText, setShowText] = useState(true)
  const [textColor, setTextColor] = useState("")

  const increaseAge = () => {
    setAge(age+1)
  }

  const decreaseAge = () => {
    setAge(age-1)
  }

  const setToZero = () => {
    setAge(0)
  }

  const handleInputChange = (event) => {
    setInText(event.target.value)
  }

  const toggleText = () => {
    setShowText(!showText)
  }

  const changeColor = () => {
    setTextColor(colors[(Math.floor(Math.random() * colors.length))])
  }

  return (
    <div className="App">
      
      <button onClick={increaseAge}>Increase Age</button> {age} <button onClick={decreaseAge}>Decrease Age</button> <br/> <button onClick={setToZero}>Set To Zero</button> <br/><br/>
      <input type="text" onChange={handleInputChange} /><br/>
      {inText} <br/>
      <button onClick={toggleText}>Show/Hide</button> <br/>
      {showText && <p>This text can be made to show.hide by clicking button</p>}
      <button onClick={changeColor}>Change Color</button>
      <p style={{ color: textColor }}>This para can change color on button click</p>
    </div>
  );

}

export default App;
