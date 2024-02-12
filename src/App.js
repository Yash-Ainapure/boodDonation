import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Feedback from './components/Feedback';
import {BrowserRouter,Link,Route,Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Routes>
          <Route path='/' element={<Home/>}>home</Route>
          <Route path='/feedback' element={<Feedback/>}>Feedback</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
