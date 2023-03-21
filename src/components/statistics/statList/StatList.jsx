import propTypes from 'prop-types';
import { Item } from '../item/Item';
import { List } from './StatList.styled';

export const StatList = ({ stats }) => {
  return (
    <List>
      {stats.map(data => (
        <Item key={data.id} label={data.label} percentage={data.percentage} />
      ))}
    </List>
  );
};

StatList.propTypes = {
  stats: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      label: propTypes.string.isRequired,
      percentage: propTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
