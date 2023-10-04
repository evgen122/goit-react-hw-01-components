import items from '../../data/transactions.json';
import styles from './TransactionHistory.module.css';

export const TransactionHistory = () => {
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {items.map(idx => (
        <tbody key={idx.id}>
          <tr>
            <td>{idx.type}</td>
            <td>{idx.amount}</td>
            <td>{idx.currency}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};
