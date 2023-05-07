import { Profile } from './Profile/Profile';
import user from '../json/user.json';

import { Statistics } from './Statistics/Statistics';
import data from '../json/data.json';

import { FriendsList } from './FriendList/FriendList';
import friends from '../json/friends.json';

import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../json/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
};