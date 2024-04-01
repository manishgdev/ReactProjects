import { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';


/*
<h1>Name : {prediction?.name}</h1> => fetch name from prediction only when the prediction object in not null
*/

function App() {

  // fetch("https://catfact.ninja/fact")
  // .then((res) => res.json())
  // .then((data) => {
  //   console.log(data)
  // })

  const [catFact, setCatFact] = useState("");
  const [name, setName] = useState("");
  const [prediction, setPrediction] = useState(null);
  const [excuse, setExcuse] = useState("");

  const predictAge = () => {
    Axios.get(`https://api.agify.io?name=${name}`)
    .then((res) => {
      setPrediction(res.data)
    });
  }

  // Axios.get will be called infinite times as this will be executed everytime the component updates if not called in useEffect or button onClick

  const fetchCatFact = () => {
    Axios.get("https://catfact.ninja/fact")
    .then((res) => {
      setCatFact(res.data.fact)
    });
  }

  const fetchExcuse = (topic) => {
    console.log("Generate excuse for " + topic);
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${topic}`)
    .then((res) => {
      // console.log(res.data[0].excuse)
      setExcuse(res.data[0].excuse);
    });
  }

  const updateName = (event) => {
    setName(event.target.value)
  }

  useEffect(() => {
    fetchCatFact();
  }, []);

  return (
    <div className="App">
      <button onClick={fetchCatFact}> Generate Cat Fact</button>
      <p>{catFact}</p>

      <input placeholder='Type your name' type='text' onChange={updateName} />
      <button onClick={predictAge}>Predict Age</button>
      {/* {
        prediction && 
        <div>
          <h1>Name : {prediction.name}</h1>
          <h1>Predicted Age : {prediction.age}</h1>
          <h1>Count : {prediction.count}</h1>
        </div>
      } */}
      <h1>Name : {prediction?.name}</h1>
      <h1>Predicted Age : {prediction?.age}</h1>
      <h1>Count : {prediction?.count}</h1>
      
      <p>Generate Excuse for </p>
      <button onClick={() => fetchExcuse("party")}>Party</button>
      <button onClick={() => fetchExcuse("family")}>Family</button>
      <button onClick={() => fetchExcuse("office")}>Office</button>
      
      <p>{excuse}</p>
    </div>
  );
}

export default App;
