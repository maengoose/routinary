import styled from "styled-components";
import Modal from '@mui/material/Modal';
import { Button } from "@mui/material";

export const ModalStyle = styled(Modal)`
  position: absolute;
  width: 50%;
  height: 50%;

  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;

  transform: translate(-50%, -50%);
`

export const CloseButton = styled(Button)`
  color: black;
`

export const PopUp = styled.div`
  background-color: #F9EBC8;
  position: absolute;
  width: 100%;
  height: 100%;

  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  transform: translate(-50%, -50%);
  border-radius: 10px;
`
