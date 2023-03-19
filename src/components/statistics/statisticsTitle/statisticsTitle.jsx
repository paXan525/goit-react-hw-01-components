import propTypes from 'prop-types';
import { StatTitle } from './statisticsTitle.styled';

export const StatisticsTitle = ({ text }) => {
  return <StatTitle className="title">{text}</StatTitle>;
};

StatisticsTitle.propTypes = {
  text: propTypes.string.isRequired,
};
