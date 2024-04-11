import React, { useState } from 'react';
import './App.css';
import { Country, Person } from './components/Person';

// prop-types doesn't break the app, it just complaints about the errors in console
// using typescript and defining types strictly will break the app

/*
interface Props {
    name: string;
    email: string;
    age: number;
    isMarried: boolean;
    friends: string[];
    country?: string; // the question mark will make the country parameter an optional argument
}
*/
function App() {

  const [name, setName] = useState<string>("");
  return (
    <div className="App">
      <input type="text" onChange={(event) => {setName(event.target.value)}} />
      <Person 
        name={name}
        email="manishkmsh29@gmail.com"
        age={34}
        isMarried={true}
        friends={["Sushil", "Pritesh", "Twinkle", "Rahul"]}
        country={Country.India}
      />
    </div>
  );
}

export default App;
