import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import './App.css';
import Login from './Pages/Login/Login';
import { sha256 } from 'js-sha256';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import UserManagement from './Pages/UserManagement/UserManagement';
import Sidebar from './Components/Sidebar';

const cookies = new Cookies();

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(false);


  const [selected, setSelected] = useState(0);

  useEffect(() => {
    let cookieAuth = cookies.get('dd_uuid');
    console.log("...", cookieAuth);
    if (cookieAuth) {
      console.log('cookie auth');
      setIsAuth(true);
    }
  });

  const auth = async (username, password) => {
    console.log(username, password);
    axios('http://localhost:3003/auth', { method: 'POST', data: { username: username, password: sha256(password) }, withCredentials: true, useCredentials: true })
      .then(e => {
        console.log('Authentication succeed.');
      }).then(r => {
        setIsAuth(true);
      });
  }
  const handleDisconnect = () => {
    setIsAuth(false);
    cookies.remove('dd_uuid');
  }

  return (
    <div>

      {!isAuth ?
        <Login auth={auth}></Login>
        :
        <div>
          <Sidebar />
          <div style={{position: 'absolute', top: '0', left: '15vw', height: '100vh', width: '85vw', minHeight: '100vh !important', background: '#131517', color: 'white', padding: '2%'}}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<UserManagement />} />
              </Routes>
            </BrowserRouter>
          </div>


        </div>
      }
    </div>
  );

}

export default App;
