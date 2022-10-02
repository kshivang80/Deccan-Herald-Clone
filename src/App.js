import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Grid1 from './Components/Body1';
import Body1 from './Components/Body1';
import Karnataka from './Components/Karnataka';
import Nation from './Components/Nation';
import Metrolife from './Components/Metrolife';
import Footer1 from './Components/Footer1';
import Footer2 from './Components/Footer2';

function App() {
  return (
    <div className="App" >
       <Navbar/>
       <Body1/>
       <Karnataka/>
       <Nation/>
       <Metrolife/>
       <Footer1/>
       <Footer2/>
       
      
    </div>
  );
}

export default App;
