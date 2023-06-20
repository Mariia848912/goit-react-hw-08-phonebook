import styled from 'styled-components';

export const ItemContact = styled.li`
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;

export const ContactData = styled.p`
  margin-right: auto;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 6px;
  min-width: 336px;
  max-width: 336px;
  background-color: #f5f4fa;
  border-radius: 4px;
`;
