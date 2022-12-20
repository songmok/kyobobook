import React from "react";

const Cook = (props) => {
  const list = props.cook.map((item, index) => {
    return (
      <div>
        <p>{item.biTitle}</p>
        <p>{item.biPrice}</p>
        <p>{item.biPublisher}</p>
        <p>{item.biPublishDt}</p>
      </div>
    );
  });
  return (
    <div className="cook-box">
      <div>
        <div className="header-bt">
          <h2 className="header-txt">요리</h2>
        </div>
      </div>
      <div>{list}</div>
    </div>
  );
};

export default Cook;
