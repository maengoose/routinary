import Modal from '@mui/material/Modal';

type Props = {
  open: boolean;
  onClose: () => void;
};

const CreateRoutine: React.VFC<Props> = (props) => {
  const { open, onClose } = props;
  return (
    <Modal
      open={open}
      onClose={onClose}
    >
      <div>화면에 보여줄 모달!</div>
    </Modal>
  )
}

export default CreateRoutine;
