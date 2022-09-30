import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Grid1 from './Components/Body1';
import Body1 from './Components/Body1';
import Karnataka from './Components/Karnataka';
import Nation from './Components/Nation';

function App() {
  return (
    <div className="App" >
       <Navbar/>
       <Body1/>
       <Karnataka/>
       <Nation/>
      
    </div>
  );
}

export default App;
