import { Profile } from './Profile/Profile';
import user from '../Json/user.json';

import { Statistics } from './Statistics/Statistics';
import data from '../Json/data.json';

import { FriendsList } from './FriendList/FriendList';
import friends from '../Json/friends.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />

      <FriendsList friends={friends} />
    </div>
  );
};
