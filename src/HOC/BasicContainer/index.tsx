import React, { useState } from 'react';
import Header from './Header';
import { useStyles } from './style';
import FormModal from './FormModal/index';
import Login from './Login';
import Resign from './Resign/index';
import { useHistory } from 'react-router';
import { URL_MANGA_MANAGEMENT } from '../../constants/link';

export enum TYPE_MODAL_LOGIN {
  LOGIN = 'LOGIN',
  RESIGN = 'RESIGN',
}

const BasicContainer: React.FC = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const [openModal, setOpenModal] = useState(false);
  const [typeModal, setTypeModal] = useState(TYPE_MODAL_LOGIN.LOGIN);

  const closeModal = () => {
    setOpenModal(false);
  };
  const handleOpenModal = (type: TYPE_MODAL_LOGIN) => {
    setTypeModal(type);
    setOpenModal(true);
  };

  const handleSubmitSearch = (value: string) => {
    history.push(URL_MANGA_MANAGEMENT.LIST);
    console.log(history.location, { value });
  };

  return (
    <div className={classes.containerFull}>
      <div className={classes.container}>
        <Header
          handleOpenModal={handleOpenModal}
          handleSubmitSearch={handleSubmitSearch}
        />
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
