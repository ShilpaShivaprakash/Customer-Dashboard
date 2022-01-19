import React, { useState } from "react";
import uniqCustomers from "./uniqCustomers";
import TotalAmount from "./TotalAmount";
import SearchCustomer from "./SearchCustomer";
import CustomersTable from "./CustomersTable";

const CustomerContainer = (props) => {
  const { data } = props;
  const [term, setTerm] = useState("");
  const uniqdata = uniqCustomers(data);

  const searchHandle = (e) => {
    const term = e.target.value;
    setTerm(term);
  };
  const filteredData = () => {
    const searchedData = uniqdata.filter((ele) => {
      return (
        ele.Name.toLowerCase().includes(term) ||
        ele.Phone.toString().includes(term)
      );
    });
    return searchedData;
  };

  const showDetails = (cust) => {
    const OrderDetails = data.filter((ele) => ele.Phone === cust.Phone);
    const OrderAmount = OrderDetails.map((ele) => ele.Amount);

    alert(`
                Name - ${cust.Name}
                Order Count - ${OrderDetails.length}
                Every Order Amount - ${OrderAmount.join()}
                TotalOrder Amount - ${TotalAmount(OrderDetails)}
            `);
  };
  return (
    <div className="mb-3">
      <div className="row">
        <div class="col-md-8">
          <h2>Listing Customers-{uniqdata.length}</h2>
        </div>
        <div class="col-md-4">
          <SearchCustomer term={term} searchHandle={searchHandle} />
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <CustomersTable uniqdata={filteredData()} showDetails={showDetails} />
        </div>
      </div>
    </div>
  );
};
export default CustomerContainer;