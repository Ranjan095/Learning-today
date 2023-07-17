import logo from './logo.svg';
import './App.css';

import PomodoroTimer from './Components/PomodoroTimer';
import { Data } from './Components/forthMock/Data';
import { SignUp } from './Components/Page/SignUp';
import { AllRoute } from './Components/AllRoute';


function App() {
  return (
    <div className="App">
  {/* <PomodoroTimer/> */}
{/* <Data/> */}
<AllRoute/>
    </div>
  );
}

export default App;
