import stats from '../data/data.json';
import { StatisticsItem } from './StatisticsItem.js';
import styles from './Statistics.module.css';

export const Statistics = () => {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>Upload stats</h2>
      <ul className={styles.statList}>
        {stats.map(category => (
          <StatisticsItem
            key={category.id}
            label={category.label}
            percentage={category.percentage}
          />
        ))}
      </ul>
    </section>
  );
};
