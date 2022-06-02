import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithRedirect,GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../../firebase";
import GoogleButton from 'react-google-button'
import styles from "./Signup.module.css";

function Signup() {
  const navigate = useNavigate();
  
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
      const provider=new GoogleAuthProvider();
      signInWithRedirect(auth,provider)
      .then((res)=>{
        navigate("/");
        setSubmitButtonDisabled(false);
      })
      .catch((err)=>{
        console.log(err);
      })

  };
 



  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Signup</h1>

      
        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
         
          <GoogleButton className="button" onClick={handleSubmission} disabled={submitButtonDisabled}/>
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/login">Sign In</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
