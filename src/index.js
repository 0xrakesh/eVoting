import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './pages/Login';
import Voting from './pages/Voting';
import PartiesAdd from './pages/PartiesAdd';
import Detail from './pages/Detail';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {RecoilRoot} from 'recoil';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <Router>
        <Routes>
          <Route path="" element={<Login/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/voting' element={<Voting/>} />
          <Route path='/addparty' element={<PartiesAdd/>} />
          <Route path='/election' element={<Detail/>} />
        </Routes>
      </Router>
    </RecoilRoot>
  </React.StrictMode>
);

