import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [nav, setNav] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const toggleMenu = () => {
    setNav((nav) => !nav);
  };
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    document.getElementById("root")?.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
    return () => {
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);
  console.log(scrollPosition);
  return (
    <div className="header">
      <div className="menu">
        <FontAwesomeIcon
          icon={faBars}
          className="menu-icon"
          onClick={() => toggleMenu()}
        ></FontAwesomeIcon>
        <nav className={nav ? "show-menu" : "hide-menu"}>
          <ul className="gnb-top">
            <li className="depth-top">
              <Link className="btn-success-top" to="/novel">
                소설
              </Link>
            </li>
            <li className="depth-top">
              <Link className="btn-success-top" to="/cook">
                요리
              </Link>
            </li>
            <li className="depth-top">
              <Link className="btn-success-top" to="/health">
                건강
              </Link>
            </li>
            <li className="depth-top">
              <Link className="btn-success-top" to="/language">
                외국어
              </Link>
            </li>
            <li className="depth-top">
              <Link className="btn-success-top" to="/computerit">
                컴퓨터/IT
              </Link>
            </li>
          </ul>
        </nav>
        <nav
          className={scrollPosition > 110 ? "original_header" : "change_header"}
          id="main"
        >
          <ul className="gnb">
            <li className="depth">
              <Link className="btn-success" to="/novel">
                소설
              </Link>
            </li>
            <li className="depth">
              <Link className="btn-success" to="/cook">
                요리
              </Link>
            </li>
            <li className="depth">
              <Link className="btn-success" to="/health">
                건강
              </Link>
            </li>
            <li className="depth">
              <Link className="btn-success" to="/language">
                외국어
              </Link>
            </li>
            <li className="depth">
              <Link className="btn-success" to="/computerit">
                컴퓨터/IT
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <Link className="logo" to={"/"}>
        <img
          src={`${process.env.PUBLIC_URL}/img/logo.png`}
          className="logo-img"
          alt="교보문고"
        />
      </Link>
    </div>
  );
};
export default Header;
