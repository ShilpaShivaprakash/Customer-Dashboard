import React from "react";

const CustomersTable = (props) => {
  const { uniqdata, showDetails } = props;

  return (
    <table className="table  table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Order Detail</th>
        </tr>
      </thead>
      <tbody>
        {uniqdata.map((cust, i) => {
          return (
            <tr key={cust.Phone}>
              <td>{i + 1}</td>
              <td>{cust.Name}</td>
              <td>{cust.Phone}</td>
              <td>
                <button
                  onClick={() => {
                    showDetails(cust);
                  }}
                  className="btn btn-primary"
                >
                  Show
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default CustomersTable;