import _ from "lodash";
const uniqCustomers = (data) => {
  const uniqData = _.uniqBy(data, "Phone");
  return uniqData;
};
export default uniqCustomers;