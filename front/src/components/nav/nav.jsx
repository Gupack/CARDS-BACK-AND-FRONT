import React from "react";
import SearchBar from "../search/SearchBar";
import { Link } from "react-router-dom";
import style from "./nav.module.css";

class Nav extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={style.header}>
        <img
          className={style.logo}
          src="https://i.redd.it/256hsem2rkry.jpg"
          alt="img"
        />
        <SearchBar onSearch={this.props.onSearch} />
        <div className={style.navegation}>
          <Link to="/about">
            <h3>ABOUT </h3>
          </Link>
        </div>
        <div className={style.navegation}>
          <Link to="/home">
            <h3> HOME</h3>
          </Link>
        </div>
      </div>
    );
  }
}
export default Nav;
