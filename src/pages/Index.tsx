
import React from 'react';
import StatsOverview from '../components/Dashboard/StatsOverview';
import DashboardGrid from '../components/Dashboard/DashboardGrid';

const Index = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard Overview</h2>
        <p className="text-muted-foreground">
          Welcome to your comprehensive analytics dashboard
        </p>
      </div>
      <StatsOverview />
      <DashboardGrid />
    </div>
  );
};

export default Index;
