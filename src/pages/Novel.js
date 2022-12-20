import React from "react";

const Novel = (props) => {
  const novelArr = props.novel.map((item) => {
    return (
      <div>
        <img src={`http://192.168.0.183:9988${item.imageUri}`} alt="sd" />
      </div>
    );
  });
  return (
    <div>
      <div className="header-bt">
        <h2 className="header-txt">소설</h2>
      </div>
      <div>{novelArr}</div>
    </div>
  );
};

export default Novel;
