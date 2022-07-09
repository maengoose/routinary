import styled from 'styled-components';
import { Box } from '@mui/system';
import Button from '@mui/material/Button';
import natureyoga from './images/natureyoga.jpg';
import Clock from 'react-live-clock';

export const BackgroundBox = styled(Box)`
  background-image: url(${natureyoga});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
`;

export const RoutineButton = styled(Button)`
  background-color: #D0C9C0;
  color: black;
  position: absolute;
  top: 70%;
  left: 40%;
  transform: translate(-50%, -50%);
  border-radius: inherit;
  &:hover {
    background-color: #EFEAD8;
    color: #6D8B74;
  }
  font-family: Lora;
`;

export const MeditationButton = styled(Button)`
  background-color: #D0C9C0;
  color: black;
  position: absolute;
  top: 70%;
  left: 60%;
  transform: translate(-50%, -50%);
  border-radius: inherit;
  &:hover {
    background-color: #EFEAD8;
    color: #6D8B74;
  }
  font-family: Lora;
`

export const LiveClock = styled(Clock)`
  color: white;
  font-size: 130px;
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: lighter;
`
