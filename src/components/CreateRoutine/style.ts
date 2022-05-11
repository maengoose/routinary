import styled from "styled-components";
import { IconButton } from "@mui/material";
import Modal from '@mui/material/Modal';

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

// export const BoxStyle = styled.div`
//   opacity: ;
// `

export const CloseButton = styled(IconButton)`
  color: black;
`