import styles from './Statistics.module.css';

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

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
