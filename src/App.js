import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route  path="/" element={<Login />}/>  
          <Route path="/Signup" element={<Signup/>}/>
        </Routes>
      </Router> 
    </div>
  );
}
export default App;
