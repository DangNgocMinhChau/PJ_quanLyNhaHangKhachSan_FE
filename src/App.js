import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home';
import Aboute from './components/Aboute';

function App()
{
  return (
    <div className="App">
      <Router>
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" exact={true} component={Aboute} />
      </Router>

    </div>
  );
}

export default App;
