import styles from './FriendList.module.css';
import { FriendListItem } from './FriendListItem.js';
import friends from '../../data/friends.json';

export const FriendList = () => {
  return (
    <ul className={styles.friendList}>
      {friends.map(card => (
        <FriendListItem
          key={card.id}
          avatar={card.avatar}
          name={card.name}
          isOnline={card.isOnline}
        />
      ))}
    </ul>
  );
};
