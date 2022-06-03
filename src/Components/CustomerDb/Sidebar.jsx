import React from "react";
import styled from "styled-components";
import { RiHomeLine, RiFileCopyLine } from "react-icons/ri";
import { FaWallet } from "react-icons/fa";
import AvatarImage from "../../Assets/avatarImage.jpeg";
import { darkThemeColor } from "./Utils";

import { BrowserRouter as Router, Link, Outlet } from 'react-router-dom';

function Sidebar() {
  return (

    <Container>
      <ProfileContainer>
        <Avatar src={AvatarImage} />
        <Name>Kishan Sheth</Name>
        <button className="btn btn-secondary btn-sm">Change</button>
      </ProfileContainer>
      <ItemsContainer>
        <Items>
          <Item>
            <RiHomeLine />
            <Link className="links" to="/profile"><h5>Profile</h5></Link>
          </Item>
          <Item>
            <RiFileCopyLine />
            <Link className="links" to="/profile/appointments"><h5>Appointments</h5></Link>
          </Item>
          <Item>
            <FaWallet />
            <Link className="links" to="/profile/support"><h5>Support</h5></Link>
          </Item>
       
        </Items>
        

      </ItemsContainer>

    </Container>


  );
}

const Container = styled.div`
  width: 20%;
  height: 100% !important;
  border-radius: 0rem;
  background-color: #091322;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  @media screen and (max-width: 1080px) {
    width: 100%;
    height: max-content !important;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Avatar = styled.img`
  height: 30vh;
  border-radius: 6rem;
  margin-top: 30%;
`;

const Name = styled.h1`
  color: white;
  font-size: 1rem;
  font-weight: 400;
  margin: 0.8rem 0 0.5rem 0;
`;

const ItemsContainer = styled.div`
  background-color: ${darkThemeColor};
  height: 100%;
  width: 100%;
  border-radius: 0rem;
`;

const Items = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  height: 60%;
`;

const Item = styled.li`
  margin-left: 2%;
  margin-bottom: 1rem;
  display: flex;
  gap: 1rem;
  color: #e4e4e4;
  cursor: pointer;
  
  svg {
    font-size: 1rem;
    margin-top: 3%;
  }
`;

const ContactContainer = styled.div`
  width: 60%;
  background-color: #091322;
  color: #c4c4c4;
  height: 15%;
  margin: auto auto;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  a {
    color: white;
    text-decoration: none;
  }

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-bottom: 2rem;
  }
`;

export default Sidebar;