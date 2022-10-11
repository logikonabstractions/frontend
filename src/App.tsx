import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import {Foo} from "./components/Foo";
import {Home} from "./components/Home";

function App() {
    const onCreateForm = async (form: any) => {
        if (process.env.REACT_APP_NO_SERVER === 'true') {
            alert('No server')
            return form
        } else {
            const resp = await fetch(process.env.REACT_APP_ROOT_URL + ':' + process.env.REACT_APP_ROOT_PORT + '/foo/create/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...form })
            })
            const data = await resp.json()
        }
    }


    return (
    <Router>
      <div className="App">
          <Link to='/foo'/>
        <Routes>
            {/* @ts-ignore */}
          <Route exact path='/' element={
              <Home/>
          }></Route>
            {/* @ts-ignore */}
          <Route exact path='/foo' element={
              <Foo onCreateForm={onCreateForm}/>
          }>

          </Route>
        </Routes>
      </div>

    </Router>

  );
}

export default App;
