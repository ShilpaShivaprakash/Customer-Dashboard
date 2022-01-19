import React from "react";
import StatsItem from "./StatsItem";
import uniqCustomers from "./uniqCustomers";
import TotalAmount from "./TotalAmount";
const StatsContainer = (props) => {
  const { data } = props;
  //   console.log(data);
  return (
    <div className="row mb-3">
      <StatsItem data={data.length} text="Orders" />
      <StatsItem data={TotalAmount(data)} text="Amount" />
      <StatsItem data={uniqCustomers(data).length} text="Customers" />
    </div>
  );
};
export default StatsContainer;