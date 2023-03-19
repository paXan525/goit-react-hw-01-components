import styled from 'styled-components';

export const StatItem = styled.li`
  display: block;
  width: ${props => {
    return props.children[1].props.children[0];
  }}%;
  margin: 0 auto;
  padding: 10px 0;

  text-align: center;

  background-color: ${getRandomHexColor};
`;

export const ItemLabel = styled.span`
  display: block;
  padding-bottom: 10px;

  font-size: 15px;
  font-weight: 400;
`;

export const ItemPercentage = styled.span`
  display: block;
  font-size: 30px;
  font-weight: 600;
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
