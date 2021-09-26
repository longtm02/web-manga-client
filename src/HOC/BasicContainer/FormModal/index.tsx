import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';

interface FormModalProps {
  open: boolean;
  close: () => void;
  title: string;
}

const FormModal: React.FC<FormModalProps> = (props) => {
  const { open, close, title } = props;
  return (
    <div>
      <Dialog
        open={open}
        onClose={close}
        aria-labelledby="responsive-dialog-title"
      >
        <>
          <DialogTitle id="responsive-dialog-title">{title}</DialogTitle>
          {props.children}
        </>
      </Dialog>
    </div>
  );
};

export default FormModal;
