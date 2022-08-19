import { auth, db } from "../../firebase"
import styled from "styled-components";
import "./dashboard.css";
import { doc, updateDoc, getDoc, where, collection, query, getDocs, setDoc, Firestore } from "firebase/firestore";
import { React, useState,useEffect } from "react";
import { createWorker } from "tesseract.js";


function MainContent() {
  const [selectedImg,setSelectedImg]=useState(null);
  const [textResult,settextResult]=useState("");
  const handleChangeImg = e =>{

    setSelectedImg(e.target.files[0])
  }

  const worker = createWorker();

  const convertImgToText= async ()=>{
    await worker.load();
    await worker.loadLanguage("eng");
    await worker.initialize("eng");
    const { data }=await worker.recognize(selectedImg);

    const clg_id = data.text.search("2K");
    // console.log(data.text.slice(clg_id+12,clg_id+24));
    settextResult(data.text.slice(clg_id-1,clg_id+10));

  }

  useEffect(()=>{
    convertImgToText();
  },[selectedImg])

  const [data, setData] = useState({});  //user data is stored here
  const [txt, setText] = useState("");
  const [expData,setexpData]=useState({
    phone:"",
    clgID:"",
  });
  const [verifyStatus,setVerify]=useState(false)


  const user = auth.currentUser;

  const verifyAct=(e)=>{
    console.log("verification in progress....")
    var enteredID=expData.clgID;
    console.log("a=",enteredID);
    console.log("b=",textResult);

    if(textResult.localeCompare(enteredID)==0){
      console.log("verified");
      document.getElementById("verify-id").innerHTML= "Account verified";

      setVerify(true);

      setexpData({
        ...expData,
        [e.target.clgID]: e.target.value
      });
    }
    else{
      console.log("not verified");
      document.getElementById("verify-id").innerHTML= "Not verified";

    }
  }

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
        const expRef = doc(db, 'users', user.uid);
        const expSnap = await getDoc(expRef);
        setexpData({
          ...expData,
          phone:expSnap.data().phone,
          clgID:expSnap.data().clgID
        })
      }
    });
  }

  
const addExpertData=async()=>{
  try{
    const expRef = doc(db, 'users', user.uid);
    const expSnap = await getDoc(expRef);
    if(expSnap.exists()){
      updateDoc(doc(db, "users", user.uid), {
        phone:expData.phone,
        clgID:expData.clgID,
        verifyStatus:verifyStatus
      });
    }
    else{
      await setDoc(expRef, { name: user.displayName , mail: user.email,phone:expData.phone,clgID:expData.clgID,verifyStatus:verifyStatus});
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
          
          <div className="seven"><p >College Reg. ID. </p></div>
          <div className="eigth"><p><input classNameName="clgID" name="clgID" onChange={updateField} type={"text"} required /></p></div>
          
          <label htmlFor="clgID-img">Upload College ID image: </label>
          <input type="file" name="clgId-img" id="clgID-img" accept="image/*" onChange={handleChangeImg}/>
          <div className="result" style={{"display":"grid"}}>
            {selectedImg && (
              <div className="box-image">
                <img style={{"width":300}} src={URL.createObjectURL(selectedImg)} alt="thumb" />
              </div>
            )}
            {textResult && (
              <div>
                  <div className="box-p" style={{"backgroundColor":"white"}}>
                    <p>{textResult}</p>
                  </div>
                  
                  <div className="verify-btn">
                    <button type="submit" onClick={verifyAct}>Verify account</button>
                  </div>
              </div>
            )}
          </div>
          <label htmlFor="clgID-img">(wait for few minutes after uploading image for image processing)</label>

          <label htmlFor="verifyStatus">Account Verification Status: </label>
          <div className="verifyStatus" id ="verify-id" >
            not verified!
          </div>
        </div>
      </div>
      <button type="button" onClick={save} value={txt} class="btn btn-primary btn-sm">Save</button>

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
