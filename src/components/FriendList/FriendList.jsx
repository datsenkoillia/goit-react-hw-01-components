import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendsList = ({ friends }) => {
  return (
    <ul className={css.friend_list}>
      {friends.map(({ id, name, avatar, isOnline }) => (
        <FriendListItem
          key={id}
          name={name}
          avatar={avatar}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
};

const FriendListItem = ({ name, avatar, isOnline }) => {
  return (
    <li className={css.item}>
      <span className={`${css.status} ${css[isOnline]}`}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
