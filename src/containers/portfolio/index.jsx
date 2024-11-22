import React, { useState } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import ImageOne from "../../images/img1.jpg";
import ImageTwo from "../../images/img2.jpg";
import ImageThree from "../../images/img3.jpg";
import ImageFour from "../../images/img4.jpg";
import ImageFive from "../../images/img5.jpg";
import ImageSix from "../../images/img6.jpg";
import "./styles.scss";

const portfolioData = [
  { id: 1, categoryId: 1, name: "Web Development", image: ImageOne },
  { id: 2, categoryId: 1, name: "Mobile App", image: ImageTwo },
  { id: 3, categoryId: 2, name: "Ecommerce", image: ImageThree },
  { id: 4, categoryId: 2, name: "Digital Marketing", image: ImageFour },
  { id: 5, categoryId: 2, name: "UI/UX Design", image: ImageFive },
  { id: 6, categoryId: 1, name: "Art & Design", image: ImageSix },
];

const filterData = [
  { filterId: 0, label: "All" },
  { filterId: 1, label: "Development" },
  { filterId: 2, label: "Design" },
];

const Portfolio = () => {
  const [filterValue, setFilterValue] = useState(0);

  const handleFilter = (currentId) => {
    setFilterValue(currentId);
  };

  const filteredItems =
    filterValue === 0
      ? portfolioData
      : portfolioData.filter((item) => item.categoryId === filterValue);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
              className={filterValue === item.filterId ? "active" : ""}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item) => (
            <div key={item.id} className="portfolio__content__cards__item">
              <div className="portfolio__content__cards__item__img-wrapper">
                <a href={item.link}>
                  <img src={item.image} alt={item.name} />
                  <div className="overlay">
                    <div>
                      <p>{item.name}</p>
                      <button>Visit</button>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
