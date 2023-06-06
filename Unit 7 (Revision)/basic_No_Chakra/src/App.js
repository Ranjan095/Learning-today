import logo from './logo.svg';
import './App.css';
import { UseMemo } from './Pages/UseMemo';
import { Form } from './Pages/Form';
import { Call_apply_bind } from './Pages/Call_apply_bind';
import { Promises } from './Pages/Promise';
import { VideoAssesment_6 } from './Pages/VideoAssesment_6';
import { FileUpload } from './Pages/FileUpload';
import { Crousel } from './Pages/Crousel';
import CounterWithCustomHooks from './Pages/CounterWithCustomHooks';
import Debounce from './Pages/Debounce';
import { Throtling } from './Pages/Throtling';




function App() {
  return (
    <div className="App">
     <h1>Basic</h1>
     {/* <UseMemo/> */}
     {/* <Form /> */}
     {/* <Call_apply_bind/> */}
{/* <Promises/> */}
{/* <VideoAssesment_6/> */}
{/* <Crousel/> */}
{/* <FileUpload/> */}
{/* <CounterWithCustomHooks/> */}
{/* <Debounce/> */}
<Throtling/>
     
    </div>
  );
}

export default App;
