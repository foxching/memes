import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import { reduxFirestore, getFirestore } from "redux-firestore";
import { mainReducer } from "../store/reducers/mainReducer";
import firebase from "../config/firebase";

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
  attachAuthIsReady: true, // attaches auth is ready promise to store
  updateProfileOnLogin: false
};

const configureStore = preloadedState => {
  const middleWare = [thunk.withExtraArgument({ getFirebase, getFirestore })];
  const middlewareEnhancers = applyMiddleware(...middleWare);
  const storeEnhancers = [middlewareEnhancers];
  const composeEnhancers = composeWithDevTools(
    ...storeEnhancers,
    reactReduxFirebase(firebase, rrfConfig),
    reduxFirestore(firebase)
  );
  const store = createStore(mainReducer, preloadedState, composeEnhancers);

  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("../reducers/rootReducer", () =>
      store.replaceReducer(mainReducer)
    );
  }
  return store;
};

export default configureStore;
