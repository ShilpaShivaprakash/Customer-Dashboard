const TotalAmount = (data) => {
    let sum = 0;
    data.forEach((ele) => {
      sum += ele.Amount;
    });
    return sum;
  };
  export default TotalAmount;