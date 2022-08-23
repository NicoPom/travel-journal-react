import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <div
        className="card--img--placeholder"
        style={{ backgroundImage: `url(${props.imageUrl})` }}
        alt={props.alt}
      />
      <div className="card--info">
        <img className="card--pin--logo" src="../images/pin.svg"></img>
        <span className="card--location">{props.location}</span>
        <a className="card--googlemap--link" href={props.googleMapsUrl}>
          View on Google Maps
        </a>
        <h2 className="card--title">{props.title}</h2>
        <p className="card--travel-dates">
          {props.startDate} - {props.endDate}
        </p>
        <p className="card--description">{props.description}</p>
      </div>
    </div>
  );
}
