import { Button } from "@mui/material";
import styled from "styled-components";

export const MusicButton = styled(Button) < { playing: string; image: string; gif: string }>`
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
    background-image: url(${props => props.image});
    font-family: Lora;
    color: black; 

    ${props => props.playing === 'true' && `
        background-image: url(${props.gif});
    `}
`