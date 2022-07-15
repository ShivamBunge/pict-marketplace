import { auth, db } from "../../firebase"
import styled from "styled-components";
import "./dashboard.css";
import { doc, updateDoc, getDoc, where, collection, query, getDocs, setDoc, Firestore } from "firebase/firestore";
import { React, useState,useEffect } from "react";



function MainContent() {
  const [data, setData] = useState({});  //user data is stored here
  const [txt, setText] = useState("");
  const [expData,setexpData]=useState({
    phone:"",
    domain:"",
    subdomain:"",
    avg_time:"",
    avg_fee:"",
  });
  const user = auth.currentUser;

  const updateField = e => {
    setexpData({
      ...expData,
      [e.target.name]: e.target.value
    });
  }

  useEffect(() => {
    getInfo();
    console.log("data changed")
  },[]);

  
  function getInfo() {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setData(docSnap.data())
        }
        // console.log("the data is", docSnap.data())
        const expRef = doc(db, 'experts', user.uid);
        const expSnap = await getDoc(expRef);
        setexpData({
          ...expData,
          phone:expSnap.data().phone,
          domain:expSnap.data().domain,
          subdomain:expSnap.data().subdomain,
          avg_time:expSnap.data().avg_time,
          avg_fee:expSnap.data().avg_fee
        })
      }
    });
  }

  
const addExpertData=async()=>{
  try{
    const expRef = doc(db, 'experts', user.uid);
    const expSnap = await getDoc(expRef);
    if(expSnap.exists()){
      updateDoc(doc(db, "experts", user.uid), {
        phone:expData.phone,
        domain:expData.domain,
        subdomain:expData.subdomain,
        avg_time:expData.avg_time,
        avg_fee:expData.avg_fee
      });
    }
    else{
      await setDoc(expRef, { name: user.displayName , mail: user.email,phone:expData.phone,domain:expData.domain,subdomain:expData.subdomain,avg_time:expData.avg_time,avg_fee:expData.avg_fee });
    }
    
    }
  catch(e){
    console.log(e);
  }


  getInfo();
}  

  const textEdited = (event) => {
    setText(event.target.value);
  }
  const save = () => {  //this is actually update data operation
    updateDoc(doc(db, "users", user.uid), {
      about: txt
    });
    addExpertData();
    getInfo();
  }

  return (
    <Container>
      <div className="info">
        <h3 className="text-center">Profile</h3>
        <div className="wrapper">
          <div className="one" id="Uname"><p>Username</p></div>
          <div className="two"><p contentEditable="true">{user.displayName}</p></div>
          <div className="three"><p>Email</p></div>
          <div className="four"><p> {user.email}(cant be changd)</p></div>
          <div className="five"><p contentEditable="true">Phone  </p></div>
          
          <div className="six"><p><input classNameName="p-info" name="phone" value={expData.phone} onChange={updateField} type={"text"} placeholder="+91" required /></p></div>
          
       
        
        </div>
      </div>

    </Container>
  );
}
export default MainContent;




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
