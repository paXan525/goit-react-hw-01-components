import propTypes from 'prop-types';
import { Item } from './TableItem.styled';

export const TableItem = ({ type, amount, currency }) => {
  return (
    <Item>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </Item>
  );
};

TableItem.propTypes = {
  type: propTypes.string.isRequired,
  amount: propTypes.string.isRequired,
  currency: propTypes.string.isRequired,
};
