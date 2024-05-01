import {
  JOBS_LIST_FAIL,
  JOBS_LIST_REQUEST,
  JOBS_LIST_SUCCESS,
} from "../constants/jobsConstants";

export const jobsListReducer = (state = { jobs: [] }, { type, payload }) => {
  switch (type) {
    case JOBS_LIST_REQUEST: {
      return {
        loading: true,
      };
    }
    case JOBS_LIST_SUCCESS:
      return {
        loading: false,
        jobs: payload,
      };
    case JOBS_LIST_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
