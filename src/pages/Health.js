import React, { useState, useEffect } from "react";
import axios from "axios";
import requests from "./../api/request";
import instance from "./../api/axios";

// import "./Paging.css";
import Pagination from "react-js-pagination";
import { Link } from "react-router-dom";
const Health = (props) => {
  const [health, setHealth] = useState([]);
  const [page, setPage] = useState(1);
  const [items, setItems] = useState(5);
  const getClick = () => {
    axios
      .get("http://192.168.0.183:9988/api/book/category/3")
      .then((res) => setHealth(res.data));
  };
  const fetchData = async () => {
    const resultHealth = await instance.get(requests.fetchHealth);
    setHealth(resultHealth.data.data);
  };
  useEffect(() => {
    fetchData();
    return () => {};
  }, []);
  const itemChange = (e) => {
    setItems(Number(e.target.value));
  };
  // console.log(items * (page - 1), items * (page - 1) + items);
  const handlePageChange = (page) => {
    setPage(page);
  };
  return (
    <div>
      <div className="header-bt">
        <div className="header-txt">건강</div>
      </div>
      <div>
        {getClick}
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
            <div>
              <Link to={`/detail/${v.seq}`}>{v.title}</Link>
              <img
                src={`http://192.168.0.183:9988${v.imageUri}`}
                alt={v.title}
                className="img"
              />
              <div>{price2}원</div>
              <p dangerouslySetInnerHTML={{ __html: v.contentTitle }}></p>
            </div>
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
