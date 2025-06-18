import React from 'react';
import Dashboard_Layout from '../components/dashboard_layout';
import { auth } from '../firebase/firebase';

function Dashboard() {
  const user = auth.currentUser;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-brand text-brand">
      <div className="flex flex-col items-center justify-center text-center">
        <div className="text-xlg font-bold">
          {user ? `Welcome, ${user.email}` : 'No user logged in'}
        </div>
        <Dashboard_Layout />
      </div>
    </div>
  );
}

export default Dashboard;
