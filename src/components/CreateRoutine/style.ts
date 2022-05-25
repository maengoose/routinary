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

export const TimeInput = styled.input`
  border: none;
  border-radius: 5px;
  color: #001D6E;
  background-color: #FEFBE7;
  margin: 5px;
  width: 200px;
  height: 30px;
  text-align: center;
`

export const TextInput = styled.input`
  border: none;
  border-radius: 5px;
  color: #001D6E;
  background-color: #FEFBE7;
  padding-left: 10px;
  margin: 5px;
  width: 200px;
  height: 30px;
  text-align: center;
`

export const RangeInput = styled.input`
  background: #F9EBC8;
  -webkit-appearance: none;
  margin: 5px;
  width: 180px;

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 10px;
    cursor: pointer;
    animate: 0.2s;
    background-color: #FEFBE7;
    border: none;
    border-radius: 5px;
    margin: 5px;
  }

  &::-webkit-slider-thumb {
  border: #FEFBE7;
  height: 30px;
  width: 10px;
  border-radius: 5px;
  background: #9AD0EC;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -11px;
  }
`

export const CreateRoutineForm = styled.form`
  text-align: center;
`

export const AddButton = styled.input`
  border: solid;
  border-radius: 5px;
  color: #5F7161;
  background-color: #FEFBE7;
  margin: 5px;
  width: 50px;
  height: 20px;
  text-align: center;
`

export const DurationTimeFont = styled.label`
  font-family: Lora;
`