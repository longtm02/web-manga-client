import { Button, Grid, Pagination } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import BasicContainer from '../../../HOC/BasicContainer';
import { useStyles } from './style';
import ItemDepartment from './components/ItemDepartment';
import ICON_STORY_IMG from './../../../../public/img/story-list-icon.png';
import { useState } from 'react';
import TableChapter from './components/ListChapter';

const Detail = () => {
  const classes = useStyles();
  const [content, setContent] = useState(false);
  const handleToggleHiddenContent = () => {
    setContent(!content);
  };
  return (
    <BasicContainer>
      <Grid
        marginTop="12px"
        container
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <Grid
          item
          sm={12}
          md={3}
          justifyContent="center"
          alignItems="center"
          display="flex"
        >
          <img
            src="https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/yhk_thumb_640x960-37c71ffe7fad-1630296307305-pcdEVEUU.jpg?v=0&maxW=260&format=webp"
            alt=""
          />
        </Grid>
        <Grid alignItems="flex-start" item sm={12} md={9}>
          <h1 className={classes.title}> Đảo Hải Tặc</h1>
          <ItemDepartment
            title="Tên Khác"
            value="Vua Hải Tặc; One Piece; OnePiece"
          />
          <ItemDepartment title="Tác giả" value=" Eiichiro Oda" />
          <ItemDepartment title="Trạng thái" value="Đang Cập Nhật" />
          <Grid container justifyContent="flex-start" alignItems="flex-start">
            <Grid item sm={1}>
              Thống kê :
            </Grid>
            <Grid
              item
              sm={11}
              display="flex"
              justifyContent="flex-start"
              alignItems="center"
            >
              <ThumbUpIcon
                style={{ marginRight: 12 }}
                className={classes.iconStatistic}
                fontSize="small"
              />
              5416546
              <FavoriteIcon style={{ marginRight: 12 }} fontSize="small" />
              4654654
              <RemoveRedEyeIcon style={{ marginRight: 12 }} fontSize="small" />
              41146465
            </Grid>
          </Grid>
          <Grid container justifyContent="flex-start" alignItems="flex-start">
            <Grid item sm={12}>
              <Button
                variant="outlined"
                color="secondary"
                className={classes.buttonCategory}
                size="small"
              >
                action
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                className={classes.buttonCategory}
                size="small"
              >
                action
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                className={classes.buttonCategory}
                size="small"
              >
                action
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                className={classes.buttonCategory}
                size="small"
              >
                action
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                className={classes.buttonCategory}
                size="small"
              >
                action
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                className={classes.buttonCategory}
                size="small"
              >
                action
              </Button>
            </Grid>
          </Grid>

          <Grid container justifyContent="flex-start" alignItems="flex-start">
            <Grid item sm={12}>
              <div className={classes.buttonAction}>
                <ImportContactsIcon /> Đọc từ đầu
              </div>
              <div className={classes.buttonAction}>
                <FavoriteIcon /> Theo dõi
              </div>
              <div className={classes.buttonAction}>
                <ThumbUpIcon /> Thích
              </div>
              <div className={classes.buttonAction}>
                <img src={ICON_STORY_IMG} alt="" /> Đọc tiếp
              </div>
            </Grid>
          </Grid>

          <Grid
            marginTop={3}
            marginRight={3}
            paddingRight={3}
            container
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <Grid item sm={12} height={content ? 'auto' : 40} overflow="hidden">
              One Piece là câu truyện kể về Luffy và các thuyền viên của mình.
              Khi còn nhỏ, Luffy ước mơ trở thành Vua Hải Tặc. Cuộc sống của cậu
              bé thay đổi khi cậu vô tình có được sức mạnh có thể co dãn như cao
              su, nhưng đổi lại, cậu không bao giờ có thể bơi được nữa. Giờ đây,
              Luffy cùng những người bạn hải tặc của mình ra khơi tìm kiếm kho
              báu One Piece, kho báu vĩ đại nhất trên thế giới. Trong One Piece,
              mỗi nhân vật trong đều mang một nét cá tính đặc sắc kết hợp cùng
              các tình huống kịch tính, lối dẫn truyện hấp dẫn chứa đầy các bước
              ngoặt bất ngờ và cũng vô cùng hài hước đã biến One Piece trở thành
              một trong những bộ truyện nổi tiếng nhất không thể bỏ qua. Hãy đọc
              One Piece để hòa mình vào một thế giới của những hải tặc rộng lớn,
              đầy màu sắc, sống động và thú vị, cùng đắm chìm với những nhân vật
              yêu tự do, trên hành trình đi tìm ước mơ của mình.
            </Grid>
            <Grid
              item
              sm={12}
              display="flex"
              justifyContent="center"
              alignItems="center"
              marginTop={2}
            >
              <Button
                onClick={handleToggleHiddenContent}
                variant="contained"
                color="warning"
              >
                {content ? 'Thu gọn' : 'Xem thêm'}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/*          */}

      <Grid
        marginTop="12px"
        container
        justifyContent="center"
        alignItems="flex-start"
        spacing={2}
      >
        <Grid
          item
          sm={12}
          justifyContent="flex-start"
          alignItems="center"
          display="flex"
          marginX={2}
        >
          <h1> Danh sách chương : </h1>
        </Grid>
        <Grid
          item
          sm={12}
          justifyContent="center"
          alignItems="center"
          display="flex"
          marginX={2}
        >
          <TableChapter />
        </Grid>
        <Grid
          item
          sm={12}
          justifyContent="center"
          alignItems="center"
          display="flex"
          marginX={2}
        >
          <Pagination count={10} color="primary" />
        </Grid>
      </Grid>
    </BasicContainer>
  );
};

export default Detail;
