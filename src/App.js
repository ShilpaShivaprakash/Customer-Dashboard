import React, { useState } from "react";
import customers from "./Customer-data";
import StatsContainer from "./StatsContainer";
import CustomerContainer from "./CustomersContainer";
import OrderContainer from "./OrderContainer";

const App = (props) => {
  const CustomerData = customers;
  const [customer, setCustomer] = useState(CustomerData);
  return (
    <div className="container">
      <h1 className="display-4 mb-3">Customer Dashboard</h1>
      <StatsContainer data={customer} />
      <CustomerContainer data={customer} />
      <OrderContainer data={customer} />
    </div>
  );
};
export default App;