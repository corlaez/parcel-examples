import { createStore } from "redux";
import rootReducer from "./root-reducer";

function configureStore() {
  if (window.store == null) {
    window.store = createStore(rootReducer);
    return window.store;
  }
  if (process.env.NODE_ENV == "production") {
    return window.store;
  }
  window.store.replaceReducer(rootReducer);
  return window.store;
}

const store = configureStore();

//Optional action logs INIT (You uncomment to see redux logs)
/*if (window.rawDispatch == null) {
  window.rawDispatch = store.dispatch;
}

store.dispatch = action => {
  console.group(action.type);
  console.log(store.getState());
  window.rawDispatch(action);
  console.log(action);
  console.log(store.getState());
  console.groupEnd(action.type);
};*/
//Optional action logs END

export default store;
