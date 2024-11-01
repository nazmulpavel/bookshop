import {
  createUserWithEmailAndPassword, updateProfile, getAuth, signInWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithPopup,
  signOut
} from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import app from '../../public/firebase/firebase.config';
import { Await } from 'react-router-dom';


export const AuthContext = createContext(null);

export default function Authprovider({ children }) {
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth(app);
  const [user, SetUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState([]);

  const createUser = async (email, password, name, photo, isAdmin, isBlocked) => {
    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // console.log(userCredential.user);
      const newUSer = userCredential.user;
      const response = await fetch("https://bookshopbackend-kk5q.onrender.com/userList", {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(
          {
            email: newUSer.email,
            displayName: name,
            photoUrl: photo,
            uid: newUSer.uid,
            isAdmin: isAdmin,
            isBlocked: isBlocked,
          }
        )
      })
      // console.log(response);
      return userCredential;
    } catch (error) {
      console.error(error);
    }
    // return userCredential;

  }

  const loginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  }
  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };
  const loadCategories = () => {
    setLoading(true);
    return loadCategories(auth);
  };
  const updateUserProfile = (profile) => {
    setLoading(true);
    return updateProfile(auth.currentUser, profile);
  };
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
        if (currentUser) {
          try {
            const res = await fetch(
              `https://bookshopbackend-kk5q.onrender.com/userlist/${currentUser.uid}`
            );

            if (!res.ok) {
              throw new Error("Failed to fetch user data.");
            }

            const data = await res.json();
            console.log("the data",data);
            SetUser(data);
          } catch (error) {
            console.error("Error fetching user data:", error.message);
          }
        } else {
          currentUser = null
          SetUser(currentUser);

        }

      // SetUser(currentUser);
      // console.log(currentUser);
      setLoading(false);

    })
    return () => {
      unsubscribe();
    }
  }, [auth]);
 

  return (
    <>
      <AuthContext.Provider value={{ loginWithGoogle, user, signIn, loading, createUser, updateUserProfile, logOutUser }}>{children}</AuthContext.Provider>

    </>
  )
}
