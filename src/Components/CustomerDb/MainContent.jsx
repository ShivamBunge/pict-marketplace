import { React, useState } from "react";
import styled from "styled-components";
import "./dashboard.css"
import { auth, db } from "../../firebase"
import { doc, updateDoc, getDoc, where, collection, query, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { getAdditionalUserInfo } from "firebase/auth";

function MainContent() {
  const [data, setData] = useState({});
  const [txt, setText] = useState("");
  const user = auth.currentUser;

  useEffect(() => {
    getInfo()
  }, [])
  useEffect(() => {
    console.log(data)
  }, [data])
  function getInfo() {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setData(docSnap.data())
        }
        // console.log("the data is", docSnap.data())
      }
    });
  }
  const textEdited = (event) => {
    setText(event.target.value);
  }
  const save = () => {  //this is actually update data operation
    updateDoc(doc(db, "users", user.uid), {
      about: txt
    });
  }
  return (
    <Container>
      <div className="info">
        <div className="wrapper">
          <div className="one"><p>Username</p></div>
          <div className="two"><p>{user.displayName}</p></div>
          <div className="three"><p>Email</p></div>
          <div className="four"><p>{user.email}</p></div>
          <div className="five"><p>Phone  </p></div>
          <div className="six"><p>
            <input className="p-info" type={"text"} />
            {/* <button type="button" class="btn btn-primary btn-sm">Save</button> */}
          </p>
          </div>

        </div>
        <div className="txt-ar-box">
          <div className="seven"><p>About me</p></div>
          <div className="p-info-tx">
            <p>
              <textarea rows="30" cols="30" wrap="soft" maxLength="400" onChange={textEdited} value={txt} className="text-ar" />
              {data.about}
            </p>
            <button type="button" onClick={save} value={txt} class="btn btn-primary btn-sm">Save</button>
          </div>
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
