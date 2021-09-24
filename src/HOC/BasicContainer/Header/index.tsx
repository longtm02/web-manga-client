import React from 'react';
import { Button, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import imgLogo from './../../../../public/logo.PNG';
import { useStyles } from './style';

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.logo}>
        <img src={imgLogo} alt="" />
      </div>
      <div className={classes.search}>
        <div>
          <input
            type="text"
            placeholder="Bạn cứ nhập từ khóa còn lại để camel lo ..."
          />
          <IconButton color="primary">
            <SearchIcon />
          </IconButton>
        </div>
      </div>
      <div className={classes.config}>
        <a href=""> Theo dõi </a>
        <a href=""> Lịch sử </a>
        <Button variant="contained" color="primary">
          Đăng nhập
        </Button>
        <Button variant="contained" color="secondary">
          Đăng kí
        </Button>
        {/* <IconButton>
          <NotificationsIcon />
        </IconButton> */}
      </div>
    </div>
  );
}
