import React from "react";

const Detail = (props) => {
  const list = props.detail.map((item, index) => {
    return (
      <div key={index}>
        <div className="d-flexbox">
          <img
            src={`http://192.168.0.183:9988${item.imageUri}`}
            className="img-1"
            alt={item.title}
          />
        </div>
        <p className="d-title">{item.title}</p>
        <span className="d-WiSeq">{item.wiSeq}</span>
        <div className="d-txtbox">
          <span className="d-publisher">{item.publisher}</span>
          <span className="d-publishDt">{item.publishDt}</span>
        </div>
        <span className="d-price">{item.price}</span>
        <div className="d-gray-box">
          <span className="d-info">책소개</span>
          <p>
            <p dangerouslySetInnerHTML={{ __html: item.contentTitle }}></p>
          </p>
          <p dangerouslySetInnerHTML={{ __html: item.contentText }}></p>
        </div>
      </div>
    );
  });
  return (
    <div>
      <div>{list}</div>
    </div>
  );
};

export default Detail;
