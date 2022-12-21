import React, { useState, useEffect } from "react";
import axios from "axios";
import requests from "./../api/request";
import instance from "./../api/axios";

// import "./Paging.css";
import Pagination from "react-js-pagination";
const Language = (props) => {
  const [language, setlanguage] = useState([]);
  const [page, setPage] = useState(1);
  const [items, setItems] = useState(5);
  const getClick = () => {
    axios
      .get("http://192.168.0.183:9988/api/book/category/4")
      .then((res) => setlanguage(res.data));
  };
  const fetchData = async () => {
    // 멤버목록 가져오기
    const params = {
      start: 1,
      count: 5,
    };
    const resultlanguage = await instance.get(requests.fetchLanguage);
    setlanguage(resultlanguage.data.data);
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
  // const languageArr = props.language.map((item) => {
  //   return (
  //     <div>
  //       <img
  //         src={`http://192.168.0.183:9988${item.imageUri}`}
  //         alt={item.title}
  //         className="img"
  //       />
  //     </div>
  //   );
  // });

  return (
    <div>
      <div className="header-bt">
        <div className="header-txt">외국어</div>
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
      {language
        .slice(items * (page - 1), items * (page - 1) + items)
        .map((v, i) => {
          const prici = v.price;
          const price2 = prici.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          return (
            <div>
              <h3>{v.title}</h3>
              <img
                src={`http://192.168.0.183:9988${v.imageUri}`}
                alt={v.title}
                className="img"
              />
              <div>{price2}원</div>
              <div>{v.contentTitle}</div>
            </div>
          );
        })}
      <Pagination
        activePage={page}
        itemsCountPerPage={items}
        totalItemsCount={language.length - 1}
        pageRangeDisplayed={5}
        onChange={handlePageChange}
      ></Pagination>
    </div>
  );
};
export default Language;
