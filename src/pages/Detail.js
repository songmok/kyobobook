import React from "react";
import { useParams } from "react-router";

const Detail = (props) => {
  const { id } = useParams();

  const bookObj = props.detail.find((item) => {
    if (item.seq === parseInt(id)) {
      return item;
    }
  });
  // console.log(item);
  // const list = props.detail.find((item, index) => {
  //   return (
  //     <div key={index}>
  //       <div className="d-flexbox">
  //         <img
  //           src={`http://192.168.0.183:9988${item.imageUri}`}
  //           className="img-1"
  //           alt={item.title}
  //         />
  //       </div>
  //       <p className="d-title">{item.title}</p>
  //       <div className="d-txtbox">
  //         <span className="d-publisher">{item.publisher}</span>
  //         <span className="d-publishDt">{item.publishDt}</span>
  //       </div>
  //       <span className="d-price">{item.price}</span>
  //       <div className="d-gray-box">
  //         <span className="d-info">책소개</span>
  //         <p>
  //           <p dangerouslySetInnerHTML={{ __html: item.contentTitle }}></p>
  //         </p>
  //         <p dangerouslySetInnerHTML={{ __html: item.contentText }}></p>
  //       </div>
  //     </div>
  //   );
  // });
  return (
    <div>
      <div>
        <div>
          <div className="d-flexbox">
            <img
              src={`http://192.168.0.183:9988${bookObj.imageUri}`}
              className="img-1"
              alt={bookObj.title}
            />
          </div>
          <p className="d-title">{bookObj.title}</p>
          <div className="d-txtbox">
            <span className="d-publisher">{bookObj.publisher}</span>
            <span className="d-publishDt">{bookObj.publishDt}</span>
          </div>
          <span className="d-price">{bookObj.price}</span>
          <div className="d-gray-box">
            <span className="d-info">책소개</span>
            <p dangerouslySetInnerHTML={{ __html: bookObj.contentTitle }}></p>
            <p dangerouslySetInnerHTML={{ __html: bookObj.contentText }}></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
