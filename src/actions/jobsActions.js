import axios from "axios";
import {
  JOBS_LIST_FAIL,
  JOBS_LIST_REQUEST,
  JOBS_LIST_SUCCESS,
} from "../constants/jobsConstants";

export const listJobsAction = () => async (dispatch) => {
  dispatch({ type: JOBS_LIST_REQUEST });
  try {
    const raw = JSON.stringify({
      limit: 10,
      offset: 0,
    });

    const data = await axios.post(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      { raw }
    );
    data && dispatch({ type: JOBS_LIST_SUCCESS, payload: data });
  } catch (e) {
    dispatch({
      type: JOBS_LIST_FAIL,
      payload:
        e.response && e.response.data.message
          ? e.response.data.message
          : e.message,
    });
  }
};
