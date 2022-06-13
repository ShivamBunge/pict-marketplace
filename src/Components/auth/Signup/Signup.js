import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithRedirect,GoogleAuthProvider,getRedirectResult } from "firebase/auth";
import { auth } from "../../../firebase";
import styles from "./Signup.module.css";
import google from "../../../Assets/google.png";
import InputControl from "../InputControl/InputControl";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
function Signup() {
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });

  const handleEmailSubmission = () => {
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        navigate("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

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

        <InputControl
          label="Name"
          placeholder="Enter your name"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
        />
        <InputControl
          label="Email"
          placeholder="Enter email address"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <InputControl
          label="Password"
          placeholder="Enter password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
        />
        <div className={styles.footer}>
        <b className={styles.error}>{errorMsg}</b>
          <button onClick={handleEmailSubmission} disabled={submitButtonDisabled}>
            Submit
          </button>
         
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
