import logo from './logo.svg';
import './App.css';
import Contact from './pages/Contact';
import Layout from './pages/Layout';
import { BrowserRouter ,Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <h4>hello</h4>
      <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Layout/>}></Route>
        <Route path = "Contact" element = {<Contact/>}/>
      </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
