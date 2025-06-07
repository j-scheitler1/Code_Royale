import React from 'react';
import Dashboard_Layout from './components/dashboard_layout';

function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-brand text-brand">
      <div>
        <Dashboard_Layout />
      </div>
    </div>
  );
}

export default Dashboard;