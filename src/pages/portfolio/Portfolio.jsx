import React from "react";
import "./portfolio.css";
import { portfolio } from "../../data";
import PortfolioItem from "../../component/PortfolioItem";

const Portfolio = () => {
  return (
    <section className="portfolio sect">
      <h2 className="section__title">
        My <span>Portfolio</span>
      </h2>
      <div className="portfolio__container containe grid">
        {portfolio.map((item) => {
          return <PortfolioItem key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default Portfolio;
