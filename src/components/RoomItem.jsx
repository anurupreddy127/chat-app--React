import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import TimeAgo from 'timeago-react';

const RoomItem = () => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <h3 className="text-disapper">Room Name</h3>
        <TimeAgo datetime={new Date()} className="font-formal text-black-45" />
      </div>

      <div className="d-flex align-items-center text-black-70">
        <span>No messages yet...</span>
      </div>
    </div>
  );
};

export default RoomItem;
