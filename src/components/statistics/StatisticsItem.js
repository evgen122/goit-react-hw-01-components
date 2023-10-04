import styles from './Statistics.module.css';
import { getRandomHexColor } from './getRandomHexColor';

const styleItem = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  border: '1px gray',
};

export const StatisticsItem = ({ label, percentage }) => {
  return (
    <li style={{ ...styleItem, backgroundColor: getRandomHexColor() }}>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </li>
  );
};
