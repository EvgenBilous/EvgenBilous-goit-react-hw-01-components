import Profile from './userProfile';
import user from '../data/user.json';
import data from '../data/data.json';
export const App = () => {
  return (
    <div>
      <Profile user={user} />
    </div>
  );
};
