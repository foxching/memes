import { toastr } from "react-redux-toastr";

export const fetchDesigns = designs => {
  return (dispatch, getState) => {
    dispatch({ type: "FETCH_DESIGN", designs });
  };
};

export const createDesign = design => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
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

export const updateDesign = updatedDesign => {
  return async (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .update(`designs/${updatedDesign.id}`, updatedDesign)
      .then(res => {
        toastr.success("Success", "Your design has been updated!");
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

    firestore
      .collection("designs")
      .doc(id)
      .delete()
      .then(() => {
        console.log("deleted");
        dispatch({ type: "DELETE_DESIGN_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "DELETE_DESIGN_ERROR", err });
      });
  };
};
