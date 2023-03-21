import propTypes from 'prop-types';
import { TableItem } from '../tableItem/TableItem';

export const TableBody = ({ items }) => {
  return (
    <tbody>
      {items.map(item => (
        <TableItem
          key={item.id}
          type={item.type}
          amount={item.amount}
          currency={item.currency}
        />
      ))}
    </tbody>
  );
};

TableBody.propTypes = {
  items: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      type: propTypes.string.isRequired,
      amount: propTypes.string.isRequired,
      currency: propTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
