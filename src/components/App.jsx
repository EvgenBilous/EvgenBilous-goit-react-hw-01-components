import Profile from './userProfile';
import user from '../data/user.json';
import data from '../data/data.json';
import Statistics from './statistics';
import FriendList from './FriendList';
export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics />
      <FriendList />
    </div>
  );
};
