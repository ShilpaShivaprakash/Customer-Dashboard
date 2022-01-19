import React from "react";
import uniqCustomers from "./uniqCustomers";
import OrdersTable from "./OrdersTable";
import OrdersChart from "./OrdersChart";
const OrderContainer = (props) => {
  const { data } = props;

  const CustomerFrequency = () => {
    const customerdata = uniqCustomers(data);
    const frequencyObject = { 1: 0, 2: 0, 3: 0, 4: 0, "5+": 0 };

    customerdata.forEach((cust) => {
      const orderdistribution = data.filter((c) => {
        return c.Phone === cust.Phone;
      });
      if (orderdistribution.length >= 5) {
        frequencyObject["5+"]++;
      } else {
        frequencyObject[orderdistribution.length]++;
      }
    });
    return frequencyObject;
  };
  return (
    <div className="row">
      <div className="col-md-12">
        <h2>Order Distribution</h2>
      </div>
      <OrdersTable data={CustomerFrequency()} />
      <OrdersChart data={CustomerFrequency()} />
    </div>
  );
};
export default OrderContainer;