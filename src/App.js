import './App.css';
import Form from './Components/Form/Form';
import { Home } from './Components/home-component/Home';
import { Nav } from './Components/nav-component/Nav';
import {data} from './data'
import {useEffect , useState} from 'react';
import {Routes , Route} from 'react-router-dom';
import {Result} from './Components/Result/Result';
import {useNavigate} from 'react-router-dom';



function App() {
  const navigate = useNavigate();
  const [ans, setAns] = useState({});

  function getAns(val)
  {
    setAns({...ans , ...val});
    navigate("/result");
  }
  return (

    <div className="main-container">
      <div className="app-body relative">
        
        <Routes>
          <Route path="/" element={<> <Nav/> <Home/> </>}/>
          <Route path="/form" element={<Form data={data} getAns={getAns}/>}/>
          <Route path="/result" element={<Result ans={ans}/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
