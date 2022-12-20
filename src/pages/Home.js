import React from "react";

const Home = ({ home }) => {
  const list = home.map((item) => {
    return (
      <div>
        {/* <div className="row">
          <div className="header-bt">
            <div className="header-txt"></div>
          </div> */}
        <div className="H-list">
          <div>
            <img src={item.biImgSeq} alt={item.biTitle} />
          </div>
          <div className="H-t m-4">{item.biTitle}</div>
          <div className="H-b m-2">{item.biPublisher}</div>
          <div className="H-p m-3">{item.biPrice}</div>
        </div>
      </div>
      // </div>
    );
  });
  console.log(home);
  return <div>{list}</div>;
};

export default Home;
