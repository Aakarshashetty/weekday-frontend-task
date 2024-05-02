import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listJobsAction } from "../../actions/jobsActions";
import JobCard from "./JobCard";
import "./ListJobs.css";

const ListJobs = () => {
  const dispatch = useDispatch();
  const { jobs, loading } = useSelector((state) => state.listJobs);
  const filters = useSelector((state) => state.filters);
  useEffect(() => {
    dispatch(listJobsAction());
    // eslint-disable-next-line
  }, []);
  const jobsWithBasePayInINR = jobs?.data?.jdList.map((job) => ({
    ...job,
    maxJdSalary: (job.maxJdSalary * 75) / 100,
    salaryCurrencyCode: "INR",
  }));
  const getFilteredData = () => {
    let filteredJobsData = jobs?.data?.jdList;
    if (filters.role !== "") {
      filteredJobsData = jobs?.data?.jdList.filter(
        ({ jobRole }) => jobRole in filters.role
      );
    } else if (filters.location !== "") {
      filteredJobsData = jobs?.data?.jdList.filter(
        ({ location }) => location in filters.location
      );
    } else if (filters.mode !== "") {
      filteredJobsData = jobs?.data?.jdList.filter(
        ({ location }) => location in filters.mode
      );
    } else if (filters.experience !== "") {
      filteredJobsData = jobs?.data?.jdList.filter(
        ({ minExp }) => minExp in filters.experience
      );
    } else if (filters.basePay !== "") {
      filteredJobsData = jobsWithBasePayInINR.filter(({ maxJdSalary }) => {
        for (let i = 0; i < filters.basePay.length; i++) {
          if (maxJdSalary <= filters.basePay[i]) {
            return true;
          } else return false;
        }
      });
    }
    return filteredJobsData;
  };
  return (
    <div className="jobs-list">
      {loading ? (
        <p>Loading....</p>
      ) : (
        getFilteredData()?.map((job) => <JobCard key={job.jdUid} job={job} />)
      )}
    </div>
  );
};

export default ListJobs;
