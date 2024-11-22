import React from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from '../../components/pageHeaderContent';
import ImageOne from '../../images/img1.jpg';
import ImageTwo from '../../images/img2.jpg';
import ImageThree from '../../images/img3.jpg';
import ImageFour from '../../images/img4.jpg'; // Fixed typo
import ImageFive from '../../images/img5.jpg';
import ImageSix from '../../images/img6.jpg'; // Make sure this matches the actual file name


const portfolioData = [
    {
        id: 2,
        name: 'Ecommerce',
        image: ImageOne, // Use the variable, not a string
    },
    // Add more portfolio items here if needed
];

const Portfolio = () => {
    return (
        <section id='portfolio' className='portfolio'>
            <PageHeaderContent 
                headerText="My Portfolio"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="portfolio-items">
                {portfolioData.map((item) => (
                    <div key={item.id} className="portfolio-item">
                        <img src={item.image} alt={item.name} />
                        <h3>{item.name}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
