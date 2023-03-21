import propTypes from 'prop-types';
import { StatItem, ItemLabel, ItemPercentage } from './Item.styled';

export const Item = ({ label, percentage }) => {
  return (
    <StatItem value={percentage}>
      <ItemLabel>{label}</ItemLabel>
      <ItemPercentage>{percentage}%</ItemPercentage>
    </StatItem>
  );
};

Item.prototype = {
  label: propTypes.string.isRequired,
  percentage: propTypes.number.isRequired,
};
