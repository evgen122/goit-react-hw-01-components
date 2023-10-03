import { Profile } from './profile/Profile.js';
import { Statistics } from './statistics/Statistics.js';
import { FriendList } from './friendList/FriendList.js';
import { TransactionHistory } from './transactionHistory/TransactionHistory.js';
export const App = () => {
  return (
    // <div
    //   style={{
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     color: '#010101',
    //   }}
    // >
    //   React homework template

    // </div>
    <div>
      <Profile />
      <Statistics />
      <FriendList />
      <TransactionHistory />
    </div>
  );
};
