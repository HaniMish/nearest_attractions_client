import React, { useState } from "react";
import "./AttractionCard.scss";
import favouriteIcon from "../../assets/icons/favorite.svg";

export default function AttractionCard(props) {
  const [favorites, setFavorites] = useState(() =>
    localStorage.getItem("favorites") &&
    localStorage.getItem("favorites").split(",").includes(props.item.id.toString())
      ? false
      : true
  );
  const handleClick = () => {
    let saved = localStorage.getItem("favorites");
    saved = saved ? saved.split(",") : [];
    if (!saved.includes(props.item.id.toString())) {
      saved.push(props.item.id.toString());
    } else {
      let index = saved.indexOf(props.item.id.toString());
      if (index !== -1) {
        saved.splice(index, 1);
      }
    }
    localStorage.setItem("favorites", saved.toString());
    setFavorites(!favorites);
  };

  return (
    <div className="card" key={props.item.id}>
      <div className="card-ribbon">
        <div className="card-ribbon-text">{props.item.type}</div>
      </div>
      <img
        src="https://images.unsplash.com/photo-1504173010664-32509aeebb62?ixlib=rb-1.2.1&auto=format&fit=crop&w=713&q=80"
        alt="img"
      />
      <img
        className={favorites ? "card-favourite blank" : "card-favourite red"}
        onClick={handleClick}
        src={favouriteIcon}
        alt="fuvorite"
      />
      <div className="card-info">
        <div className="card-name">{props.item.name}</div>
        <div className="card-id card-detail-with-title">
          <h3 className="card-info-title">מספר מזהה:</h3>
          <span className="card-info-content">{props.item.id}</span>
        </div>
        <div className="card-address card-detail-with-title">
          <h3 className="card-info-title">כתובת:</h3>
          <span className="card-info-content">{props.item.address}</span>
        </div>
        <div className="card-location card-detail-with-title">
          <h3 className="card-info-title">מרחק ממיקומך:</h3>
          <span className="card-info-content">
            {parseFloat(props.item.dis).toFixed(2)}
          </span>
        </div>
        <div className="card-open-hours">
          <h3 className="card-info-title">שעות פתיחה:</h3>
          <ul className="card-info-content">
            {props.item.openHours
              .replace("</br>", "\n")
              .split(",")
              .map((item, index) => (
                <li key={index}>{item}</li>
              ))}
          </ul>
        </div>
        <a
          className="card-link"
          href={props.item.link}
          target="_blank"
          rel="noreferrer"
        >
          קפצו לבקר באתר שלנו
        </a>
      </div>
    </div>
  );
}
