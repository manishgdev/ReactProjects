
import styles from "./App.module.css";

/*
// Using CSS Modules in React
import styles from "./App.module.css"

<div className={styles.App}>
*/
function App() {
  return (
    <div className={styles.App}>
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
