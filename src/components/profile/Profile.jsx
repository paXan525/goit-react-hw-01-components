import propTypes from 'prop-types';
import { Description } from '../profile/description/Description';
import { Stats } from '../profile/stats/Stats';
import { Wrapper } from './Profile.styled';

export const Profile = ({ userData }) => {
  return (
    <Wrapper>
      <Description
        key={userData.username}
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
      />
      <Stats
        followers={userData.stats.followers}
        views={userData.stats.views}
        likes={userData.stats.likes}
      />
    </Wrapper>
  );
};

Profile.propTypes = {
  userData: propTypes.exact({
    username: propTypes.string.isRequired,
    tag: propTypes.string.isRequired,
    location: propTypes.string.isRequired,
    avatar: propTypes.string.isRequired,
    stats: propTypes.exact({
      followers: propTypes.number.isRequired,
      views: propTypes.number.isRequired,
      likes: propTypes.number.isRequired,
    }),
  }),
};
