
import './App.css';
import { User } from "./User"

/*
 Using Lists and Components from Other Files
*/
function App() {
  
  const users = [
    {name: "Manish", age : 34},
    {name: "Akash", age : 27}
  ]

  return (
    <div className="App">
      {
        users.map((user, key) => {
          return <User name={user.name} age={user.age} key={key} />
        })
      }
    </div>
  );
}

export default App;
