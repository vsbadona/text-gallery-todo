import './App.css';
import Alert from './MyComponents/Alert';
import TextForm from './MyComponents/cwhBtn';
import About from './MyComponents/About';
import React, { useState } from 'react';
import Card from './MyComponents/card';
import Todo from './MyComponents/Todo';
import Header from './MyComponents/Header'
import Imgsr from './MyComponents/imgsr'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

 
function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 2000);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
    <Router>
    <Header title="TextUtils" mode={mode} toggleMode={toggleMode} key={new Date()} />
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
    {/* /users --> Component 1
        /users/home --> Component 2 */}
          <Route exact path="/images" element={ <Imgsr />}></Route>
          <Route exact path="/card" element={ <Card />}></Route>
          <Route exact path="/about" element={ <About mode={mode}/>}></Route>
          <Route exact path="/Todo" element={ <Todo />}></Route>
          <Route exact path="/" element={  <TextForm showAlert={showAlert} heading="Try This!" mode={mode}/>}>
          </Route>
    </Routes>
    </div>
    </Router>
    </> 
  );
}

export default App;