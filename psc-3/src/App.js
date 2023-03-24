import logo from './logo.svg';
import './App.css';
import AllRoutes from './Conponents/AllRoutes/AllRoutes';
import NavBar from './Conponents/NavBar';

function App() {
  return (
    <div className="App">
      <h1>Let's Start...React</h1>
      <NavBar/>

      <AllRoutes/>
    </div>
  );
}

export default App;
