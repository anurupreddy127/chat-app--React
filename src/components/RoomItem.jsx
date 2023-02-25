import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import TimeAgo from 'timeago-react';

const RoomItem = ({ room }) => {
  const { createdAt, name } = room;

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <h3 className="text-disapper">{name}</h3>
        <TimeAgo
          datetime={new Date(createdAt)}
          className="font-formal text-black-45"
        />
      </div>

      <div className="d-flex align-items-center text-black-70">
        <span>No messages yet...</span>
      </div>
    </div>
  );
};

export default RoomItem;
