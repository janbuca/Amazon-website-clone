import React, { useState, useContext } from "react";
import classes from "./SignUp.module.css";
import { Link } from "react-router-dom";
import { auth } from "../../Utility/firebase";
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";
import { DataContext } from "../../Componets/DataProvider/DataProvider";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");


  const [{ user }, dispatch] = useContext(DataContext);

    // console.log(user);

    const authHandler = async (e) => {
      e.preventDefault();
      console.log(e.target.name);
      if (e.target.name == "signin") {
        // firebase auth
        setLoading({ ...loading, signIn: true });
        signInWithEmailAndPassword(auth, email, password)
          .then((userInfo) => {
            dispatch({
              type: Type.SET_USER,
              user: userInfo.user,
            });
            setLoading({ ...loading, signIn: false });
            navigate(navStateData?.state?.redirect || "/");
          })
          .catch((err) => {
            setError(err.message);
            setLoading({ ...loading, signIn: false });
          });
      } else {
        setLoading({ ...loading, signUP: true });
        createUserWithEmailAndPassword(auth, email, password)
          .then((userInfo) => {
            dispatch({
              type: Type.SET_USER,
              user: userInfo.user,
            });
            setLoading({ ...loading, signUP: false });
            navigate(navStateData?.state?.redirect || "/");
          })
          .catch((err) => {
            setError(err.message);
            setLoading({ ...loading, signUP: false });
          });
      }
    };

  return (
    <section className={classes.login}>
      {/* logo */}
      <Link to={"/"}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      {/* form */}
      <div className={classes.login__container}>
        <h1>Sign In</h1>

        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>
          <button
            type="submit"
            onClick={authHandler}
            name="signin"
            className={classes.login__signInButton}
          >
            Sign In
          </button>
        </form>
        {/* agreement */}
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        {/* create account btn */}
        <button
          type="submit"
          name="signup"
          onClick={authHandler}
          className={classes.login__registerButton}
        >
          Create your Amazon Account
        </button>
      </div>
    </section>
  );
}

export default Auth;
