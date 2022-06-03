import React from 'react'
import MainContent from './MainContent'
import Sidebar from './Sidebar'
import styled from 'styled-components';

import {
  BrowserRouter as Router,
  Routes,
  Route,Outlet
} from 'react-router-dom';
const CustomerDb = () => {
  return (
    <Container>
     <Sidebar/>
     <Outlet />
     <Routes>
        <Route exact path='/' element={< MainContent />}></Route>
        
      </Routes>
    </Container>
  );
};


const Container = styled.div`
  display: flex;
  height: 100vh;
  margin-top:4%;
  background: white ;
  @media screen and (max-width: 1080px) {
    flex-direction: column;
  }
`;

export default CustomerDb;