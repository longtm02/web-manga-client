import React, { useState } from 'react';
import Header from './Header';
import { useStyles } from './style';
import FormModal from './FormModal/index';
import Login from './Login';
import Resign from './Resign/index';

export enum TYPE_MODAL_LOGIN {
  LOGIN = 'LOGIN',
  RESIGN = 'RESIGN',
}

const BasicContainer: React.FC = (props) => {
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false);
  const [typeModal, setTypeModal] = useState(TYPE_MODAL_LOGIN.LOGIN);

  const closeModal = () => {
    setOpenModal(false);
  };
  const handleOpenModal = (type: TYPE_MODAL_LOGIN) => {
    setTypeModal(type);
    setOpenModal(true);
  };

  return (
    <div className={classes.containerFull}>
      <div className={classes.container}>
        <Header handleOpenModal={handleOpenModal} />
        {props.children}
        <FormModal close={closeModal} open={openModal} title={typeModal}>
          {typeModal === TYPE_MODAL_LOGIN.LOGIN ? (
            <Login submit={() => {}} />
          ) : (
            <Resign submit={() => {}} />
          )}
        </FormModal>
      </div>
    </div>
  );
};

export default BasicContainer;
