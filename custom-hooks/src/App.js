import './App.css';
import { Cat } from './components/Cat';
import { Counter } from './components/Counter';
import { useToggle } from './useToggle';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// the hook name should start with use
// hook has to be in highest level of component
// hooks can access state and lifecycle of a component

// returing array - return [state, toggle] - makes us change the name of the objects as const [isVisible, toggle] = useToggle();
// returing object - return {state, toggle} - won't work with change of name const {isVisible, toggle} = useToggle();, it will have to be renamed as below
// const {state : isVisible, toggle} = useToggle()

function App() {

  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false
      }
    },
  });

  // const [ isVisible, setIsVisible ] = useState(false);
  const [isVisible, toggle] = useToggle();
  const [isVisible2, toggle2] = useToggle();


  return (
    <QueryClientProvider client={client}>
      <div className="App">
        <button onClick={()=> toggle()}>{isVisible? "Hide" : "Show"}</button>
        { isVisible && <p>Show Hidden Text</p>} <br/>
        <button onClick={()=> toggle2()}>{isVisible2? "Hide" : "Show"}</button>
        { isVisible2 && <p>Show Hidden Text with another variable</p>}

        <Cat />
        <br/>
        <Counter />
      </div>
    </QueryClientProvider>
  );
}

export default App;
