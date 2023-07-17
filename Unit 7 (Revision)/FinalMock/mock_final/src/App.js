import logo from './logo.svg';
import './App.css';
import Form from './Component/Form';
import ThrotleForm from './Component/Throtling/ThrotleForm';
import CounterDebounce from './Component/Debounce/CounterDebounce';
import Call_Apply_Bind from './Component/CallApplyBind/Call_Apply_Bind';
import Memo from './Component/UseMemo/Memo';

function App() {
  return (
    <div className="App">
     {/* <Form/> */}
     {/* <ThrotleForm/> */}
     {/* <CounterDebounce/> */}
     {/* <Call_Apply_Bind/> */}
     <Memo/>
    </div>
  );
}

export default App;
