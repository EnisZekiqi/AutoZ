import React, { useState, useEffect } from 'react';
import { motion,AnimatePresence } from 'framer-motion';


const Carousel = () => {

  const icons = [
    <svg
      key="icon1"
      className='merc mt-6'
      viewBox="0 0 24 24"
      fill="#DDDBFF"
      height="150px"
      width="150px"
    >
      <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12S0 18.623 0 12 5.377 0 12 0zM3.245 17.539A10.357 10.357 0 0012 22.36c3.681 0 6.917-1.924 8.755-4.821L12 14.203zm10.663-6.641l7.267 5.915A10.306 10.306 0 0022.36 12c0-5.577-4.417-10.131-9.94-10.352zm-2.328-9.25C6.057 1.869 1.64 6.423 1.64 12c0 1.737.428 3.374 1.185 4.813l7.267-5.915z" />
    </svg>,
    <svg
    className='bmw'
      key="icon2"
      fill="none"
      viewBox="0 0 24 24"
      height="180px"
      width="180px"
    >
      <path
        fill="#DDDBFF"
        fillRule="evenodd"
        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zM5 12a7 7 0 007 7v-7h7a7 7 0 00-7-7v7H5z"
        clipRule="evenodd"
      />
    </svg>
  ];
  const [currentIconIndex, setCurrentIconIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIconIndex((prevIndex) => (prevIndex + 1) % icons.length);
    }, 3000); // Change the delay here if needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='brendet'>
        <AnimatePresence>
        <motion.div
          key={currentIconIndex}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 ,transition: { duration: 0.3 }}}
          transition={{ duration: 0.5 }}
          className="icon-container"
        >
          {icons[currentIconIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Carousel;
