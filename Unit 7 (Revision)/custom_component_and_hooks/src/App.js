import logo from './logo.svg';
import './App.css';
import CounterUsingCustomHooks from './Pages/CounterUsingCustomHooks';
import Debounce from './Pages/Debounce';
import Throtling from './Pages/Throtling';

function App() {
  return (
    <div className="App">
<h1>Custom Component and Hooks</h1>
{/* <CounterUsingCustomHooks/> */}
{/* <Debounce/> */}
<Throtling/>
    </div>
  );
}

export default App;
