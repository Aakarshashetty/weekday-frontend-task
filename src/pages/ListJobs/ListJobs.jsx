import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listJobsAction } from "../../actions/jobsActions";
import JobCard from "./JobCard";
import "./ListJobs.css";

const ListJobs = () => {
  const dispatch = useDispatch();
  const { jobs, error, loading } = useSelector((state) => state.listJobs);
  useEffect(() => {
    dispatch(listJobsAction());
  }, []);

  return (
    <div className="jobs-list">
      {loading ? (
        <p>Loading....</p>
      ) : (
        jobs?.data?.jdList.map((job) => <JobCard key={job.jdUid} job={job} />)
      )}
    </div>
  );
};

export default ListJobs;
