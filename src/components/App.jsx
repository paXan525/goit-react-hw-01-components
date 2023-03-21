import { Profile } from 'components/profile/Profile';
import { Statistics } from 'components/statistics/Statistics';
import { FriendList } from 'components/friendList/FriendList';
import { TransactionHistory } from 'components/transactionHistory/TransactionHistory';
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

export const App = () => {
  const { username, tag, location, avatar, stats } = user;
  return (
    <div
      style={{
        width: '1200px',
        margin: '0 auto',
        backgroundColor: 'white',
      }}
    >
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics stats={data} title={'Upload stats'} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
