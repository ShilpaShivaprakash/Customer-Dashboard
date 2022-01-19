import React from "react";

const StatsItem = (props) => {
  const { data, text } = props;
  return (
    <div className="col-md-4">
      <div className="card bg-light">
        <div className="card-header">
          <h1>{data}</h1>
        </div>
        <div className="card-body">
          <div className="card-title">
            <h3>{text}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StatsItem;