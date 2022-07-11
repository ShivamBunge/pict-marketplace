// import Explore_trending_services from "./Components/Landing_Page/Explore_trending_services/Explore_trending_services";
import Hero from "./Components/Landing_Page/Hero/Hero";
// import TopServices from "./Components/Landing_Page/TopServices/TopServices";
import Whyus from "./Components/Landing_Page/Whyus/Whyus";
import { React, useEffect } from "react";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "./firebase";
const Layer = () => {
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (!docSnap.exists()) {
          setDoc(doc(db, "users", user.uid), {
            user_id: user.uid,
            name: user.displayName,
            email: user.email,
            about: "",
            img_url: user.photoURL
          });
  
        }
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        // ...
      
      }
    });
  });
  return (
    <div>
      <Hero />
      {/* <Explore_trending_services /> */}
      <Whyus />
      {/* <TopServices /> */}
    </div>
  );
};

export default Layer;
