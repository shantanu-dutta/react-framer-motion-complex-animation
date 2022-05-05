import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import './styles.css';

import cardData from './data';

import ExpandedContent from './ExpandedContent';
import CardContent from './CardContent';
import { cardVariants } from './variants';

const RentalCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <motion.div
      className={`card ${isExpanded ? 'expanded' : 'initial'}`}
      variants={cardVariants}
      animate={isExpanded ? 'active' : 'inactive'}
      initial="inactive"
    >
      <div className="content">
        <AnimatePresence initial={false} exitBeforeEnter>
          {isExpanded ? (
            <ExpandedContent
              key="contentExpanded"
              data={cardData}
              onClick={setIsExpanded}
            />
          ) : (
            <CardContent
              key="content"
              data={cardData}
              onClick={setIsExpanded}
            />
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default RentalCard;
