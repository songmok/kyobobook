import React from "react";

const Detail = (props) => {
  const list = props.detail.map((item, index) => {
    return (
      <div className="">
        <h2>소설</h2>
        <img src={item.biImgSeq} alt={item.biTitle} />
        <div className="">
          <p>{item.biTitle}</p>
        </div>
        <div className="">{item.biTitle}</div>
        <div className="">{item.biTitle}</div>
        <h6>{item.biPrice}</h6>
      </div>
    );
  });
  return <div className="mt-32">{list}</div>;
};

export default Detail;
