import propTypes from 'prop-types';
import { StatisticsTitle } from '../statistics/statisticsTitle/statisticsTitle';
import { StatList } from '../statistics/statList/StatList';
import { Wrapper } from './Statistics.styled';

export const Statistics = ({ stats }) => {
  const text = 'Upload stats';
  return (
    <Wrapper>
      {text && <StatisticsTitle text={text} />}
      <StatList stats={stats} />
    </Wrapper>
  );
};

Statistics.propTypes = {
  stats: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      label: propTypes.string.isRequired,
      percentage: propTypes.number.isRequired,
    })
  ),
};
