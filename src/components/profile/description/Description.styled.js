import styled from 'styled-components';

export const UserInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  padding: 30px 0;
`;

export const UserImg = styled.img`
  width: 250px;
  padding: 10px;

  border-radius: 50%;
  background-color: aquamarine;
`;

export const UserName = styled.p`
  display: block;
  width: 100%;
  padding: 10px;

  text-align: center;
  font-size: 40px;
  font-weight: 700;
`;

export const UserTag = styled.p`
  width: 100%;
  display: block;
  padding: 10px;

  text-align: center;
  font-size: 25px;
  font-weight: 400;
  color: rgb(133, 131, 131);
`;

export const UserLocation = styled.p`
  width: 100%;
  display: block;
  padding: 10px;

  text-align: center;
  font-size: 30px;
  font-weight: 400;
  color: rgb(133, 131, 131);
`;
