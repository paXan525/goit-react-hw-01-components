import propTypes from 'prop-types';
import { Item, ItemStatus, ItemAvatar, ItemName } from './FriendItem.styled';

export const FriendItem = ({ name, avatar, isOnline }) => {
  return (
    <Item>
      <ItemStatus isOnline={isOnline} />
      <ItemAvatar
        className="avatar"
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <ItemName>{name}</ItemName>
    </Item>
  );
};

FriendItem.propTypes = {
  avatar: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  isOnline: propTypes.bool.isRequired,
};
