import styled from 'styled-components';

export const Item = styled.tr`
  padding: 10px;

  :nth-child(2n) {
    background-color: rgb(218, 217, 217);
  }

  td {
    padding: 10px 0;

    text-transform: capitalize;
  }
`;
