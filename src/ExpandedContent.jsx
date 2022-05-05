import React from 'react';
import { motion } from 'framer-motion';
import { ReactComponent as Close } from './assets/close.svg';
import {
  contentBlockVariants,
  expandedVariants,
  mainImageVariants,
} from './variants';

const AnimatedContentBlock = ({ children }) => (
  <motion.div variants={contentBlockVariants}>{children}</motion.div>
);

const ExpandedContent = ({ data, onClick }) => (
  <motion.div
    variants={expandedVariants}
    animate="active"
    initial="inactive"
    exit="exit"
  >
    <button className="close" onClick={() => onClick(false)}>
      <Close />
    </button>
    <motion.div className="flex">
      <motion.div className="image-container" variants={mainImageVariants}>
        <img src={data.imgSrc} alt={data.imgAlt} className="main-image" />
      </motion.div>
      <motion.div className="expanded-content">
        <AnimatedContentBlock>
          <h2 className="title-large">{data.title}</h2>
          <h3 className="location">{data.location}</h3>
          <h5 className="price">{data.price}</h5>
          <p>{data.longDescription}</p>
        </AnimatedContentBlock>
        <AnimatedContentBlock>
          <ul className="amenities-list flex">
            {data.amenities.map((amenity) => (
              <li key={amenity.name}>
                <amenity.icon />
                <span>{amenity.name}</span>
              </li>
            ))}
          </ul>
        </AnimatedContentBlock>
        <AnimatedContentBlock>
          <iframe
            className="map"
            title="Rental Map"
            src={data.mapUrl}
            loading="lazy"
          ></iframe>
        </AnimatedContentBlock>
        <AnimatedContentBlock>
          <button className="reserve-btn">Reserve</button>
        </AnimatedContentBlock>
      </motion.div>
    </motion.div>
  </motion.div>
);

export default ExpandedContent;
