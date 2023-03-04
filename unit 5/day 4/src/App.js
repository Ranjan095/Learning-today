import logo from './logo.svg';
import './App.css';
import PinTab from './Components/PinTab';
import Counter from './Components/Counter';

function App() {
  return (
    <div className="App">
      <PinTab length={4} maxChar={1}/>
    </div>
  );
}

export default App;
