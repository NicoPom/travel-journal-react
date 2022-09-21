import React from "react";
import Header from "./Components/Header";
import Card from "./Components/Card";
import data from "./data.json";

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
