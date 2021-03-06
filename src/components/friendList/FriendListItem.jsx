
import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css'


const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
    <li className={styles.item}>
        <span
            className={styles.status}
            style={
            isOnline ? { backgroundColor: 'green' } : { backgroundColor: 'red' }
        }
        ></span>
        <img className={styles.avatar} src={avatar} alt="" width="48" />
        <p className={styles.name}>{name}</p>
    </li>
);

};

FriendListItem.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;


