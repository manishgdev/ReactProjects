
import './App.css';


/*
  Conditional Rendering
  In Ternary Operators 
  ?: - acts as if else
  && - acts as if true
*/

function App() {
  const age = 17
  const isGreen = false
  return (
    <div className="App">
      {age >= 18? <h1>Over Age</h1> : <h1>Under Age</h1>}
      <h1 style={{ color : isGreen? "green" : "red" }}>Check Color</h1>
      
      {isGreen && <button>Show Button</button>}
    </div>
  );
}



export default App;
