import React from 'react'
import styled from 'styled-components'
import AvatarImage from "../../Assets/avatarImage.jpeg";

const Appointment = (props) => {
    return (
        <>
            <Box>
                <details>
                    <summary>
                        <img src={props.prof_pic} alt="..." class="rounded-circle" />
                        <div><p>{props.name}</p></div>
                        <div><p>Appointment status: {props.status}</p></div>
                    </summary>
                    <p>
                        <div>Email: <p>{props.mail}</p></div>
                        <div>Contact no: <p>{props.contact}</p></div>
                        <div>Appointment date: <p>{props.date}</p></div>
                        <div className='meetlink'>Meet link: <a href='..'>{props.url}</a></div>
                    </p>
                </details>
            </Box>

        </>);
}

const Stats = (props) => {
    return (
        <>
            <div className="card-group">
                <div className="card text-white mb-3" style={{backgroundColor: "#00BFFF"}}>
                    <div className="card-body">
                        <h1 className="card-title">{props.rank}</h1>
                        <p className="card-text">your rank on the leaderboard</p>
                    </div>
                </div>

                <div className="card text-white mb-3" style={{backgroundColor: "#1E90FF"}}>
                    <div className="card-body">
                        <h1 className="card-title">$ {props.earnings}</h1>
                        <p className="card-text">total revenue earned this month</p>
                    </div>
                </div>

                <div className="card bg-primary text-white mb-3" style={{backgroundColor: "#9370DB"}}>
                    {/* <div className="card-header">Total no of consultation </div> */}
                    <div className="card-body">
                        <h1 className="card-title">{props.meet_cnt}</h1>
                        <p className="card-text">total number of consultations completed this month</p>
                    </div>
                </div>

            </div>
        </>


    )
}

const Appointments = () => {
    return (
        <Container>
            <h5>Stats</h5>
            <Stats rank="12" earnings="12,345" meet_cnt="12" />
            <h5>Appointments History</h5>
            <Appointment prof_pic="https://as2.ftcdn.net/v2/jpg/03/64/21/11/1000_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" name="Shivam" date="11 Jan 2022" mail="usermail@gmail.com" contact="+91 123 456 0088" url="google meet link" status="Done" />
            <Appointment prof_pic="https://image.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600w-1714666150.jpg" name="Atharva" date="11 Jan 2022" mail="usermail@gmail.com" contact="+91 123 456 0099" url="google meet link" status="Pending" />
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
