import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  overflow: auto;

  @media (min-width: 768px) {
    & {
      flex-direction: column;
    }
  }
`;

export const ListItem = styled.li`
  flex: 1;
  text-align: center;
  padding: 20px;
  line-height: 20px;

  @media (min-width: 768px) {
    & {
      padding: 10px 20px;
    }

    &:first-of-type {
      padding: 20px 20px 10px;
    }
  }
`;