import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Button, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import imgLogo from './../../../../public/logo.PNG';
import { useStyles } from './style';
import { TYPE_MODAL_LOGIN } from '..';
import { Link } from 'react-router-dom';
import { URL_MANGA_MANAGEMENT, URL_CONFIG } from '../../../constants/link';

const ENTER = 'Enter';
interface HeaderProps {
  handleOpenModal: (type: TYPE_MODAL_LOGIN) => void;
  handleSubmitSearch: (value: string) => void;
}

const Header: React.FC<HeaderProps> = ({
  handleOpenModal,
  handleSubmitSearch,
}) => {
  const history = useHistory();
  const classes = useStyles();
  const [value, setValue] = useState<string>('');

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setValue(target.value);
  };

  const handleClickLogo = () => {
    history.push(URL_CONFIG.DASH_BOARD);
  };

  const onKeyPress = (event: any) => {
    if (event.key === ENTER) handleSubmitSearch(value);
  };

  const onSubmit = () => {
    handleSubmitSearch(value);
  };

  return (
    <div className={classes.container}>
      <div className={classes.logo} onClick={handleClickLogo}>
        <img src={imgLogo} alt="" />
      </div>
      <div className={classes.search}>
        <div>
          <input
            type="text"
            placeholder="Bạn cứ nhập từ khóa còn lại để camel lo ..."
            onChange={handleChange}
            value={value}
            onKeyPress={onKeyPress}
          />
          <IconButton color="primary" onClick={onSubmit}>
            <SearchIcon />
          </IconButton>
        </div>
      </div>
      <div className={classes.config}>
        <Link to={URL_MANGA_MANAGEMENT.FOLLOW}>Theo dõi</Link>
        <Link to={URL_MANGA_MANAGEMENT.HISTORY}> Lịch sử </Link>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleOpenModal(TYPE_MODAL_LOGIN.LOGIN)}
        >
          Đăng nhập
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => handleOpenModal(TYPE_MODAL_LOGIN.RESIGN)}
        >
          Đăng kí
        </Button>
        {/* <IconButton>
          <NotificationsIcon />
        </IconButton> */}
      </div>
    </div>
  );
};

export default Header;
