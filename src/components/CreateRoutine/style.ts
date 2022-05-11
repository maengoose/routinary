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