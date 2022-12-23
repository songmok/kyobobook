import React, { useState, useEffect } from "react";
import Pagination from "react-js-pagination";
import { Link } from "react-router-dom";
const Health = ({ health }) => {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState(5);
  const itemChange = (e) => {
    setItems(Number(e.target.value));
  };

  const handlePageChange = (page) => {
    setPage(page);
  };
  return (
    <div className="list-wrap">
      <div className="header-bt">
        <div className="header-txt">건강</div>
        <select name="items" onChange={itemChange}>
          <option value="5">5개</option>
          <option value="10">10개</option>
          <option value="15">15개</option>
          <option value="20">20개</option>
        </select>
      </div>
      {health
        .slice(items * (page - 1), items * (page - 1) + items)
        .map((v, i) => {
          const prici = v.price;
          const price2 = prici.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          return (
            <Link to={`/detail/${v.seq}`} key={i}>
              <div className="list">
                <div className="list-left">
                  <img
                    src={`http://192.168.0.183:9988${v.imageUri}`}
                    alt={v.title}
                    className="img"
                  />
                </div>
                <div className="list-right">
                  <h3 className="list-title">{v.title}</h3>
                  <div className="list-txt-wrap">
                    <span className="list-txt">{v.writerName}</span>
                    <span className="list-txt">{v.publisher}</span>
                  </div>
                  <div className="list-price">{price2}원</div>
                </div>
              </div>
            </Link>
          );
        })}
      <Pagination
        activePage={page}
        itemsCountPerPage={items}
        totalItemsCount={health.length - 1}
        pageRangeDisplayed={5}
        onChange={handlePageChange}
      ></Pagination>
    </div>
  );
};
export default Health;
