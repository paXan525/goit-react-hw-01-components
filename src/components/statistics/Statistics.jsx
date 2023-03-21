import propTypes from 'prop-types';
import { StatisticsTitle } from '../statistics/statisticsTitle/statisticsTitle';
import { StatList } from '../statistics/statList/StatList';
import { Wrapper } from './Statistics.styled';

export const Statistics = ({ stats, title }) => {
  return (
    <Wrapper>
      {title && <StatisticsTitle text={title} />}
      <StatList stats={stats} />
    </Wrapper>
  );
};

Statistics.propTypes = {
  title: propTypes.string.isRequired,
  stats: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      label: propTypes.string.isRequired,
      percentage: propTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
