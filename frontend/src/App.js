import 'bootstrap/dist/css/bootstrap.min.css'
import {Routes, Route} from 'react-router-dom';
import './App.css';
import WorkerPanel from './components/WorkerPanel'
import Front from './components/Front';
import Panel1 from './components/Panel1';
import Panel2 from './components/Panel2';
import Panel3 from './components/Panel3';
import Panel4 from './components/Panel4';
import Check from './components/Check';
function App() {
  return (
    <div className="App">
      
      <Front></Front>
      <Routes>
          <Route path="/" element={<WorkerPanel/>} />
          
          <Route path="/worker1" element={<Panel1/>} />
          <Route path="/worker2"  element={<Panel2 />} />
          <Route path="/worker3"  element={<Panel3 />}  />
          <Route path="/worker4"  element={<Panel4 />}  />
          
        
        </Routes>
      {/* <WorkerPanel></WorkerPanel> */}
      {/* <Check></Check> */}
    </div>
  );
}

export default App;
