import React from 'react';
import CreateRoomBtnModel from './CreateRoomBtnModel';
import DashboardToogle from './dashboard/DashboardToogle';

const Sidebar = () => {
  return (
    <div className="h-100 pt-2">
      <div>
        <DashboardToogle />
        <CreateRoomBtnModel />
      </div>
      bottom
    </div>
  );
};

export default Sidebar;
