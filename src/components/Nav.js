import React from "react";
import axios from "axios";
import { API_URL as url } from "./constants";
import "../styles/nav.css";

const Nav = (props) => {
  const handleClick = (event) => {
    if (event.target.id === "") {
      return;
    } else {
      axios
        .get(
          `${url}${event.target.id}?api_key=2c8c82d35523c6f5e92a4baf4142f364&language=en-US&page=1`
        )
        .then((resp) => props.onSearch(resp.data.results));
    }
  };

  return (
    <div onClick={handleClick} className="nav">
      <span id="top_rated">Top Rated</span>
      <span id="popular">Most Popular</span>
      <span id="now_playing">Playing now</span>
      <span id="upcoming">Latest</span>
    </div>
  );
};
export default Nav;
