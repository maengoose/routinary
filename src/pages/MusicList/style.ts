import { Button } from "@mui/material";
import styled from "styled-components";

import rain from './images/rain.jpg';
import rainy from './images/rainy.gif';

export const RainMusicButton = styled(Button) < { playing: boolean}>`
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: inherit;
    height: 135px;
    width: 500px;
    margin: 20px;
    justifyContent: center;
    backgroundPosition: center;
    backgroundSize: cover;
    background-image: url(${rain});
    font-family: Lora;
    color: black;

    ${props => props.playing && `
        background-image: url(${rainy});
    `}
`