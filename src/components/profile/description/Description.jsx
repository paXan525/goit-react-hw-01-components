import propTypes from 'prop-types';
import {
  UserInfo,
  UserName,
  UserTag,
  UserLocation,
  UserImg,
} from './Description.styled';

export const Description = ({ username, tag, location, avatar }) => {
  return (
    <UserInfo>
      <UserImg src={avatar} alt={username} className="avatar" />
      <UserName>{username}</UserName>
      <UserTag>@{tag}</UserTag>
      <UserLocation>{location}</UserLocation>
    </UserInfo>
  );
};

Description.propTypes = {
  username: propTypes.string.isRequired,
  tag: propTypes.string.isRequired,
  location: propTypes.string.isRequired,
  avatar: propTypes.string.isRequired,
};
