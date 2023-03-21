import propTypes from 'prop-types';
import { TableHead } from './tableHead/TableHead';
import { TableBody } from './tableBody/TableBody';
import { Table } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <TableHead type="Type" amount="Amount" currency="Currency" />
      <TableBody items={items} />
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      type: propTypes.string.isRequired,
      amount: propTypes.string.isRequired,
      currency: propTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
