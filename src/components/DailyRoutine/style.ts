import styled, { css } from "styled-components";
import Button from '@mui/material/Button';

export const RoutineItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const RoutineInfo = styled.p<{ isChecked?: boolean; }>`
  display: flex;
  margin: 0;
  width: 400px;
  justify-content: space-between;

  ${props => props.isChecked && css`
    text-decoration-line: line-through;
  `}
`;

export const DeleteButton = styled(Button)`
  height: 30px;
  width: 30px;
  color: black;
`

export const EditButton = styled(Button)`
  height: 30px;
  width: 30px;
  color: black;
  left: 4%;
`
