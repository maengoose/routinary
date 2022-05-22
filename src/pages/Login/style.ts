import styled from "styled-components";
import { Button } from "@mui/material";
import kakao from './images/kakao.png';

export const LoginButton = styled(Button)`
  background-image: url${kakao};
  width: 280px;
  height: 50px;
  background-size: 'contain';
`