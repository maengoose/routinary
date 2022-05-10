import styled from 'styled-components';
import { Box } from '@mui/system';
import Button from '@mui/material/Button';
import natureyoga from './images/natureyoga.jpg';

export const BackgroundBox = styled(Box)`
  background-image: url(${natureyoga});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
`;

export const RoutineButton = styled(Button)`
  background-color: #D0C9C0;
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: inherit;
  &:hover {
    background-color: #EFEAD8;
    color: #6D8B74;
  }
  font-family: Lora;
`;

