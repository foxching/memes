import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import ReduxToastr from "react-redux-toastr";
import configureStore from "./store/configure";
import App from "./App";
import "react-redux-toastr/lib/css/react-redux-toastr.min.css";

const store = configureStore();

store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <div>
        <ReduxToastr
          position="bottom-right"
          preventDuplicates
          transitionIn="fadeIn"
          transitionOut="fadeOut"
          closeOnToastrClick
        />
        <App />
      </div>
    </Provider>,
    document.getElementById("root")
  );
});
