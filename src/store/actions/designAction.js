import { toastr } from "react-redux-toastr";
import firebase from "../../config/firebase";
import {
  asyncActionStarted,
  asyncActionFinished,
  asyncActionError
} from "./asyncActions";

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
        authorName: profile.displayName,
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

export const updateDesign = (id, updatedDesign) => {
  return async (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .update(`designs/${updatedDesign.id}`, updatedDesign)
      .then(res => {
        dispatch({ type: "UPDATE_SUCCESS", id, updatedDesign });
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
        dispatch({ type: "DELETE_DESIGN_SUCCESS", id });
      })
      .catch(err => {
        dispatch({ type: "DELETE_DESIGN_ERROR", err });
      });
  };
};

export const getDesigns = () => {
  return async (dispatch, getState) => {
    const firestore = firebase.firestore();
    const user = firebase.auth().currentUser;
    const eventsQuery = firestore
      .collection("designs")
      .where("authorId", "==", user.uid);
    try {
      dispatch(asyncActionStarted());
      let querySnap = await eventsQuery.get();
      let designs = [];
      for (let i = 0; i < querySnap.docs.length; i++) {
        let evt = { ...querySnap.docs[i].data(), id: querySnap.docs[i].id };
        designs.push(evt);
      }
      dispatch({ type: "FETCH_DESIGN", designs });
      dispatch(asyncActionFinished());
    } catch (error) {
      console.log(error);
      dispatch(asyncActionError());
    }
  };
};
