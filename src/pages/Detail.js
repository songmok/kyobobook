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
      <div class="d-grid gap-2 col-6 mx-auto">
        <button class="d-bt btn btn-primary" type="button " onClick={goHome}>
          Home
        </button>
      </div>
      <div className="d-box">
        <img
          src={`http://192.168.0.183:9988${bookObj.imageUri}`}
          className="img-1 shadow p-3 mb-5 bg-body rounded "
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

      <div class="d-bt-2 d-grid gap-2 col-6 mx-auto">
        <button class="d-bt-2 btn btn-primary" type="button ">
          책정보
        </button>
      </div>
      <div className="d-text-box">
        <p
          className="d-contentTitle"
          dangerouslySetInnerHTML={{ __html: bookObj.contentTitle }}
        ></p>
        <p dangerouslySetInnerHTML={{ __html: bookObj.contentText }}></p>
        <img
          src={`http://192.168.0.183:9988${bookObj.detailImageUri}`}
          className="img-2"
          alt={bookObj.title}
        />
      </div>
    </div>
  );
};

export default Detail;
