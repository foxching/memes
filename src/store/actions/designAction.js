import { toastr } from "react-redux-toastr";

export const saveDesign = design => {
  return (dispatch, getState) => {
    dispatch({ type: "SAVE_DESIGN", design });
  };
};

export const createDesign = design => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //async call to database
    // const firebase = getFirebase();
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authId = getState().firebase.auth.uid;
    firestore
      .collection("designs")
      .add({
        ...design,
        authorName: profile.username,
        authorId: authId,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT", design });
        toastr.success("Success", "Your design has been saved!");
      })
      .catch(err => {
        dispatch({ type: "CREATE_ERROR" }, err);
        toastr.error("Ops", "There is an error occured");
      });
  };
};

export const deleteDesign = id => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    
      firestore.collection('designs').doc(id).delete()
      .then(() => {
        console.log('deleted')
        dispatch({ type: "DELETE_DESIGN_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "DELETE_DESIGN_ERROR", err });
      });
  };
};
