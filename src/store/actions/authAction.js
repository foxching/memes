export const signUp = newUser => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const firebase = getFirebase();
    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then(res => {
        const user = firebase.auth().currentUser;
        user.updateProfile({
          displayName: newUser.username
        });
        return firestore
          .collection("users")
          .doc(res.user.uid)
          .set({
            username: newUser.username,
            createdAt: firestore.FieldValue.serverTimestamp()
          });
      })
      .then(() => {
        dispatch({ type: "SIGNUP_SUCCESS" });
      })
      .catch(err => {
        console.log(err.code);
        let error;
        if (err.code === "auth/weak-password") {
          error = "Password must be at least 6 characters";
        } else if (err.code === "auth/email-already-in-use") {
          error = "Email is already in used";
        }
        dispatch({ type: "SIGNUP_ERROR", error });
      });
  };
};

export const signIn = credentials => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: "LOGIN_SUCCESS" });
      })
      .catch(err => {
        console.log(err.code);
        let error;
        if (err.code === "auth/user-not-found") {
          error = "User no record";
        } else if (err.code === "auth/wrong-password") {
          error = "Invalid password";
        }
        dispatch({ type: "LOGIN_ERROR", error });
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "SIGNOUT_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "SIGNOUT_ERROR", err });
      });
  };
};
