
import React from 'react';
import { motion } from 'framer-motion';
import WeatherWidget from './WeatherWidget';
import NewsWidget from './NewsWidget';
import FinanceWidget from './FinanceWidget';

const DashboardGrid: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6"
    >
      <div className="lg:col-span-1">
        <WeatherWidget />
      </div>
      <div className="lg:col-span-1">
        <NewsWidget />
      </div>
      <div className="lg:col-span-1 xl:col-span-1">
        <FinanceWidget />
      </div>
    </motion.div>
  );
};

export default DashboardGrid;
