import userInfo from '../data/user.json';
// import clsx from 'clsx';
import styles from './Profile.module.css';
// console.log(userInfo);
// console.log(styles);

export const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img
          src={userInfo.avatar}
          alt="User avatar"
          className={styles.avatar}
        />
        <p className={styles.name}>{userInfo.username}</p>
        <p className={styles.tag}>{userInfo.tag}</p>
        <p className={styles.location}>{userInfo.location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.statsList}>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>{userInfo.stats.followers}</span>
        </li>
        <li className={styles.statsList}>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>{userInfo.stats.views}</span>
        </li>
        <li className={styles.statsList}>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}>{userInfo.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
