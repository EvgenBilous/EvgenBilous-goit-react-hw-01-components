import css from '../FriendList.module.css';
function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className="item">
      <span className={`${css.status} ${isOnline ? css.online : css.offline}`}>
        {isOnline}
      </span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
}
export default FriendListItem;
