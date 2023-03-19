import styled from 'styled-components';

export const StatsList = styled.ul`
  width: 500px;
  display: flex;

  margin: 0 auto;

  background-color: rgb(223, 245, 245);
`;

export const StatsItem = styled.li`
  width: 100%;
  border: 1px solid rgb(191, 209, 209);
`;

export const StatsLabel = styled.span`
  display: block;
  padding-top: 20px;
  padding-bottom: 5px;

  text-align: center;
  font-size: 15px;
  font-weight: 400;
`;

export const StatsQuantity = styled.span`
  display: block;
  padding-bottom: 20px;

  text-align: center;
  font-size: 20px;
  font-weight: 700;
`;
