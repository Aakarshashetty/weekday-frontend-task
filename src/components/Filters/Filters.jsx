import React from "react";
import Data from "../../Data/filterData.json";
import DropdownWithCategory from "./DropdownWithCategory";
import DropdownFilter from "./DropdownFilter";
import "./Filters.css";

const Filters = () => {
  return (
    <div className="filters">
      <div>
        <DropdownWithCategory data={Data.filterData.Roles} title="Roles" />
      </div>

      <DropdownFilter data={Data.filterData.Location} title="Location" />
      <DropdownFilter
        data={Data.filterData["Remote/on-site"]}
        title="Remote/on-site"
      />
      <DropdownFilter
        data={Data.filterData["Minimum experience"]}
        title="Minimum experience"
      />
      <DropdownFilter
        data={Data.filterData["Min base pay"]}
        title="Min base pay"
      />
    </div>
  );
};

export default Filters;
