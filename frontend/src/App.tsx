import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import Routes from "./routes";
import GlobalStyles from "./styles/global";
import { store, persistor } from "./store";

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Routes />
        </PersistGate>
      </Provider>
      <GlobalStyles />
      <ToastContainer style={{ fontSize: 15 }} />
    </>
  );
}

export default App;
