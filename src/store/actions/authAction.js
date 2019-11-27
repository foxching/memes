export const signUp = newUser => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    const firebase = getFirebase()
    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then(res => {
        return firestore
          .collection("users")
          .doc(res.user.uid)
          .set({
            message: newUser.message,
            gender:newUser.gender

      })
      })
      .then(() => {
        dispatch({ type: "SIGNUP_SUCCESS" })
      })
      .catch(err => {
        dispatch({ type: "SIGNUP_ERROR", err })
      })
  }
}
