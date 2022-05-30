import React from 'react'
import styled from 'styled-components'

const Appointment = (props) => {
    return (
        <>
            <Box>
                <img src="" alt="..." class="rounded-circle" />
                <div><p>{props.name}</p></div>
                <div><p>{props.date}</p></div>
                <div><p>{props.service}</p></div>
            </Box>

        </>);
}
const Appointments = () => {
    return (
        <Container>
            <h5>Appointments History</h5>
            <Appointment name="Shivam" date="11 Jan 2022" service="Consultant" />
            <Appointment name="Atharva" date="11 Jan 2022" service="Finance" />
        </Container>
    )
}

export default Appointments

const Container = styled.div`
  width: 50%;
  background:  transparent ;
  margin: 1rem 8rem 1rem 4rem;
  @media screen and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 1rem 0 0 0;
  }
`;
const Box = styled.div`
 display:flex;
 background : #00B8A2;
 justify-content: space-between;
 padding: 0.5rem 2rem;
 border-radius: 7px;
margin: 2rem;
@media screen and (max-width:600px){
    margin: 1rem 0.5rem;
    padding: 1rem 1rem;
}
`
