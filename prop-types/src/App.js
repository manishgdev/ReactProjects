import './App.css';
import { Person } from './components/Person';

// npm install prop-types
// Passing invalid propType for name as name={56} will give warning as below in console
// Failed prop type: Invalid prop `name` of type `number` supplied to `Person`, expected `string`.

function App() {
  return (
    <div className="App">
      <Person name="Manish"
        email="manishkmsh29@gmail.com"
        age={34}
        isMarried={true}
        friends={["Sushil", "Pritesh", "Twinkle", "Rahul"]}
      />
    </div>
  );
}

export default App;
