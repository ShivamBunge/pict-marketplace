import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithRedirect,GoogleAuthProvider,getRedirectResult } from "firebase/auth";
import { auth } from "../../../firebase";
import styles from "./Signup.module.css";
import google from "../../../Assets/google.png";
function Signup() {
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
      const provider=new GoogleAuthProvider();
      signInWithRedirect(auth,provider);
      getRedirectResult(auth)
      .then((res)=>{        
        setSubmitButtonDisabled(false);
        navigate("/");
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
         
          <button className="btn btn-light" onClick={handleSubmission} disabled={submitButtonDisabled}>
            <img src={google} height="40px" width="40px"/>continue with Google</button>
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
