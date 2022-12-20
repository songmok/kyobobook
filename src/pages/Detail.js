// import React from "react";

// const Detail = () => {
//   <div className="detail-box">
//     <div>
//       <div className="header-bt">
//         <h2 className="header-txt"></h2>
//       </div>
//     </div>
//   </div>;

// };

// export default Detail;
import React from "react";

const Detail = (props) => {
  const list = props.detail.map((item, index) => {
    return (
      <div className="">
        <h2>소설</h2>
        <img
          src={`http://192.168.0.183:9988/${item.imageUri}`}
          alt={item.biTitle}
        />
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
