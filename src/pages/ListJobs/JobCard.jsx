import { Button, Chip } from "@mui/material";
import React, { useState } from "react";

const JobCard = ({ job }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const {
    jdLink,
    jobDetailsFromCompany,
    jobRole,
    location,
    maxExp,
    maxJdSalary,
    minExp,
    minJdSalary,
    salaryCurrencyCode,
  } = job;
  console.log(location)
  return (
    <div className="job-card">
      <Chip label="Posted 10 days ago" variant="outlined" className="chip" />
      <div className="company-details">
        <div className="company">
          <a href={jdLink}>Weekday.works</a>
          <p>{jobRole}</p>
          <p>{location}</p>
        </div>
        <h4>Estimated Salary: </h4>
      </div>
      <div className="company-details">
        <h2>About Company:</h2>
        <b>About us:</b>
        <p className={`description ${isExpanded ? "expanded" : ""}`}>
          {jobDetailsFromCompany}
        </p>
        <Button variant="text" onClick={() => setIsExpanded(!isExpanded)} className="button">
          {isExpanded ? "Read less" : "Read more"} 
        </Button>
      </div>
      <div className="job-details">
        <small>Minimum Experience</small>
        <p>{minExp ? minExp : 3}</p>
      </div>
      <Button variant="contained">Easy Apply</Button>
    </div>
  );
};

export default JobCard;
