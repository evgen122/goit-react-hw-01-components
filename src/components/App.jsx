import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transaction from '../data/transactions.json';

import { Profile } from './profile/Profile.js';
import { Statistics } from './statistics/Statistics.js';
import { FriendList } from './friendList/FriendList.js';
import { TransactionHistory } from './transactionHistory/TransactionHistory.js';

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics stats={data} title="Upload stats" />
      <FriendList friends={friends} />
      <TransactionHistory transaction={transaction} />
    </div>
  );
};
