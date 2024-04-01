
import './App.css';

function App() {
  return (
    <div className="App">
      <User name="Manish" age={34} />
      <User name="Akash" age={27} />
    </div>
  );
}

const User = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
    </div>
  )
}

export default App;
