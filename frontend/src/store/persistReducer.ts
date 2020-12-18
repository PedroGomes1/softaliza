import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import rootReducer from "./modules/rootReducer";

export default () => {
  const persistedReducer = persistReducer(
    {
      key: "eventsystem",
      storage,
    },
    rootReducer
  );

  return persistedReducer;
};
