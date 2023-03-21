import propTypes from 'prop-types';
import { Description } from '../profile/description/Description';
import { Stats } from '../profile/stats/Stats';
import { Wrapper } from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <Wrapper>
      <Description
        key={username}
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
      />
      <Stats followers={followers} views={views} likes={likes} />
    </Wrapper>
  );
};

Profile.propTypes = {
  username: propTypes.string.isRequired,
  tag: propTypes.string.isRequired,
  location: propTypes.string.isRequired,
  avatar: propTypes.string.isRequired,
  stats: propTypes.exact({
    followers: propTypes.number.isRequired,
    views: propTypes.number.isRequired,
    likes: propTypes.number.isRequired,
  }).isRequired,
};
