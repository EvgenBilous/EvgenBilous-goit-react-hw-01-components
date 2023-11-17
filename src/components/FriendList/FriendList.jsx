import React from 'react';
import FriendListItem from './FriendListItem';
function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(item => {
        return (
          <FriendListItem
            key={item.id}
            avatar={item.avatar}
            name={item.name}
            isOnline={item.isOnline}
          />
        );
      })}
    </ul>
  );
}
export default FriendList;
