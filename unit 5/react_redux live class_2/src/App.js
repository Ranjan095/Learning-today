import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter/Counter';
import Todo from './Components/todo/Todo'
import Login from './Components/Login/Login';
import AllRoute from './AllRoute/AllRoute';
import NavBar from './Components/NavBar';
import PrivetRoute from './Components/Pages/PrivetRoute';

function App() {
  return (
    <div className="App">
      {/* <Counter/> */}
      {/* <Todo/> */}
      {/* <Login/> */}
      {/* <PrivetRoute/> */}
      <NavBar/>
      <AllRoute/>
    </div>
  );
}

export default App;
