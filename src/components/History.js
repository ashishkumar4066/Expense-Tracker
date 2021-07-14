import React from "react";

const History = ({ balance }) => {
  return (
    <div className="mt-3">
      <h4>History</h4>
      {balance.map((bal) => (
        <div
          className={`task ${+bal.amount >= 0 ? "positive" : "negative"}`}
          key={bal.id}
        >
          <div className="row">
            <div className="col col-md-8">
              <p>{bal.text}</p>
            </div>
            <div className="col col-md-4">
              <p>{bal.amount}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default History;
