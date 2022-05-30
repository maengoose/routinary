import styled, { keyframes } from "styled-components";
import Button from '@mui/material/Button';
// @import url('https://fonts.googleapis.com/css2?family=Nanum+Myeongjo&display=swap');

export const typewriter = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`

export const blinkTextCursor = keyframes`
  from {
    border-color: transparent;
  }
  to {
    widborder-colorth: transparent;
  }
  50% {
    border-color: black;
  }
`

export const TextAnime = styled.div`
  position: absolute;
  top: 10%;
  left: 50%;
  right: auto;
  bottom: auto;
  transform: translate(-50%, -50%);

  padding: 1em;
  font-family: 'Nanum Myeongjo', serif;
  margin: 0 auto; 
  font-size: 2em;
  text-align: center; 
  overflow: hidden; 
  white-space: nowrap; 
  animation: 
    ${typewriter} 3.5s steps(40, end), 
    ${blinkTextCursor} .75s step-end;
`

export const CreateDailyRoutine = styled(Button)`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: inherit;
  &:hover {
    color: #6D8B74;
  }
  font-family: Lora;
`

export const EmptyText = styled.p`
  position: absolute;
  top: 30%;
  left: 50%;
  right: auto;
  bottom: auto;
  transform: translate(-50%, -50%);
  font-family: Lora;
`

export const RoutineList = styled.ul`
  position: absolute;
  top: 30%;
  left: 50%;
  right: auto;
  bottom: auto;
  transform: translate(-50%, -50%);
  font-family: Noto;
`