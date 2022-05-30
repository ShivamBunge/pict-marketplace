import React from 'react'
import MainContent from './MainContent'
import Sidebar from './Sidebar'
import styled from 'styled-components';
import Appointments from './Appointments';
import Support from './Support';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
const CustomerDb = () => {
  return (
    <Container>
     <Sidebar/>
     <Routes>
        <Route exact path='/' element={< MainContent />}></Route>
        <Route exact path='/appointments' element={< Appointments />}></Route>
        <Route exact path='/support' element={< Support />}></Route>
      </Routes>
    </Container>
  );
};


const Container = styled.div`
  display: flex;
  height: 100vh;
  background: white ;
  @media screen and (max-width: 1080px) {
    flex-direction: column;
  }
`;

export default CustomerDb;