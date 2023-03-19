import propTypes from 'prop-types';
import { Head } from './TableHead.styled';

export const TableHead = ({ type, amount, currency }) => {
  return (
    <Head>
      <tr>
        <th>{type}</th>
        <th>{amount}</th>
        <th>{currency}</th>
      </tr>
    </Head>
  );
};

TableHead.propTypes = {
  type: propTypes.string.isRequired,
  amount: propTypes.string.isRequired,
  currency: propTypes.string.isRequired,
};
