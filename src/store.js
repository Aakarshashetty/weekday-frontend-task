import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { thunk } from "redux-thunk";
import { jobsListReducer } from "./reducers/jobsReducer";

const reducer = combineReducers({
  listJobs: jobsListReducer,
});
const initialState = {};
const middleware = [thunk];
export const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware)
);
