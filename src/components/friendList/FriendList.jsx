
import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import styles from './FriendList.module.css'

const FriendList = ({ friends }) => {
    return (
    <div className={styles.friends}>
        <ul className={styles.friendList}>
        {friends.map(friend => (
            <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
        />
        ))}
        </ul>
    </div>
);
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    }),
).isRequired,
};

export default FriendList;