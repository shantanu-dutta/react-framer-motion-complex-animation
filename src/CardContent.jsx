import React from 'react';
import { motion } from 'framer-motion';
import {
  cardContentVariants,
  contentVariants,
  thumbnailVariants,
} from './variants';

const CardContent = ({ data, onClick }) => {
  return (
    <motion.div
      className="flex"
      variants={cardContentVariants}
      exit="inactive"
      animate="active"
      initial="inactive"
    >
      <motion.div className="thumbnail-container" variants={thumbnailVariants}>
        <img src={data.imgSrc} alt={data.imgAlt} className="thumbnail" />
      </motion.div>
      <motion.div className="initial-content" variants={contentVariants}>
        <h2 className="title">{data.title}</h2>
        <h3 className="location">{data.location}</h3>
        <h5 className="price">{data.price}</h5>
        <p>{data.shortDescription}</p>
        <button className="info-btn" onClick={() => onClick(true)}>
          More info
        </button>
      </motion.div>
    </motion.div>
  );
};

export default CardContent;
