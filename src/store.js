import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { thunk } from "redux-thunk";
import { jobsListReducer } from "./reducers/jobsReducer";
import { filterReducer } from "./reducers/filtersReducer";

const reducer = combineReducers({
  listJobs: jobsListReducer,
  filters: filterReducer,
});
const initialState = {
  filters: { role: "", location: "", mode: "", experience: "", basePay: "" }
};
const middleware = [thunk];
export const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware)
);
