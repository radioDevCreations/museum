import './App.sass';
import Wrapper from '../Wrapper/Wrapper';
import Liner from '../Liner/Liner';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">
        <Wrapper/>
        <Liner/>
      </div>
    </Router>
  );
}

export default App;
