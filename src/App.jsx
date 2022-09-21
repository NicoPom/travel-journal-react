import React from "react";
import Header from "./Components/header.jsx";
import Card from "./Components/Card.jsx";
import data from "./data.js";

export default function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <div className="container">
      <Header />
      <section className="main">{cards}</section>
    </div>
  );
}
