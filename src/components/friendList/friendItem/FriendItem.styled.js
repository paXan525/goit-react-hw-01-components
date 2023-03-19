import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;

  width: 100%;
  padding: 10px;
  gap: 10px;

  box-shadow: 3px 7px 12px 2px rgba(204, 204, 204, 1);
`;

export const ItemStatus = styled.span`
  width: 20px;
  height: 20px;
  background-color: ${props => {
    return props.children ? 'green' : 'red';
  }};
  border-radius: 50%;
`;

export const ItemAvatar = styled.img`
  width: 70px;
`;

export const ItemName = styled.p`
  font-size: 25px;
  font-weight: 700;
`;
