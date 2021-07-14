import React from "react";

const Balance = ({ income, expanse }) => {
  const totalBalance = income + expanse;
  return (
    <div className=" mt-5">
      <h4>Your Balance : {totalBalance}</h4>

      <div className="row g-0">
        <div className="col-sm-4 col-md-2">
          <p>INCOME</p>
          <p>{income}</p>
        </div>
        <div className="col-2 col-md-2">
          <p>EXPANSE</p>
          <p>{expanse}</p>
        </div>
      </div>
    </div>
  );
};

export default Balance;
