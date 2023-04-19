import React from "react";
import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";
import Footer from "./Footer";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const Welcome = () => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  return (
    <main className="welcome">
      <h2>Connection Synching...</h2>
      <img src="/logo513.jpg" alt="ReactJs logo" width={80} height={80}/>
      <p>Let's Rech out to discuss everything, Prost!</p>
      <button className="sign-in">
        <img
          onClick={googleSignIn}
          src={GoogleSignin}
          alt="sign in with google"
          type="button"
        />
      </button>
      <Footer />
    </main>
  );
};

export default Welcome;
