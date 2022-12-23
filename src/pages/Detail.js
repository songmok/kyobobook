import React from "react";
import { useNavigate, useParams } from "react-router";

const Detail = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const goHome = () => {
    if (window) {
      navigate("/", { state: { from: "/detail" } });
    }
  };

  const bookObj = props.detail.find((item) => {
    if (item.seq === parseInt(id)) {
      return item;
    }
  });
  return (
    <div>
      <div className="d-bt-box">
        <button className="d-bt" type="button " onClick={goHome}>
          HOME
        </button>
      </div>
      <div className="d-box">
        <img
          src={`http://192.168.0.183:9988${bookObj.imageUri}`}
          className="img-1 shadow-lg p-3 mb-5 bg-body rounded"
          alt={bookObj.title}
        />
        <p className="d-title">{bookObj.title}</p>
        <div className="d-txtbox">
          <span>{bookObj.writerName}</span>
          <span>{bookObj.publisher}</span>
          <span>{bookObj.publishDt}</span>
        </div>
        <div className="d-price">{bookObj.price}원</div>
      </div>

      <div className="d-text-box">
        <div className="d-line"></div>
        <p
          className="d-contentTitle"
          dangerouslySetInnerHTML={{ __html: bookObj.contentTitle }}
        ></p>
        {/* <div className="d-line"></div> */}
        <div>
          <img
            src={`http://192.168.0.183:9988${bookObj.detailImageUri}`}
            className="img-2"
            alt={bookObj.title}
          />
          <div className="d-line"></div>
        </div>
        <p
          className="d-contentText"
          dangerouslySetInnerHTML={{ __html: bookObj.contentText }}
        ></p>
      </div>
    </div>
  );
};

export default Detail;
