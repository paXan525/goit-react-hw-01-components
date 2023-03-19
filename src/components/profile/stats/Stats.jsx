import propTypes from 'prop-types';
import {
  StatsList,
  StatsItem,
  StatsLabel,
  StatsQuantity,
} from './Stats.styled';

export const Stats = ({ followers, views, likes }) => {
  return (
    <StatsList>
      <StatsItem>
        <StatsLabel>Followers </StatsLabel>
        <StatsQuantity>{followers}</StatsQuantity>
      </StatsItem>
      <StatsItem>
        <StatsLabel>Views </StatsLabel>
        <StatsQuantity>{views}</StatsQuantity>
      </StatsItem>
      <StatsItem>
        <StatsLabel>Likes </StatsLabel>
        <StatsQuantity>{likes}</StatsQuantity>
      </StatsItem>
    </StatsList>
  );
};

Stats.propTypes = {
  followers: propTypes.number.isRequired,
  views: propTypes.number.isRequired,
  likes: propTypes.number.isRequired,
};
