import Slider from 'react-slick';
import { useStyles } from './style';
import ItemCarousel from './ItemCarousel';
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';
import PagingCarousel from './PagingCarousel';
import IMG_TEST from './../../../../public/img/kimetsu.jpg';
import IMG_TEST2 from './../../../../public/img/kimetsu2.jpg';
import IMG_TEST3 from './../../../../public/img/one_piece.jpg';

export default function SliderCarousel() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    customPaging: PagingCarousel,
  };

  return (
    <Slider {...settings} className={classes.container}>
      <ItemCarousel description={des} link="" srcImage={IMG_TEST} key={1} />
      <ItemCarousel description={des} link="" srcImage={IMG_TEST2} key={2} />
      <ItemCarousel description={des} link="" srcImage={IMG_TEST3} key={3} />
    </Slider>
  );
}

const des = `Ánh đèn này lấp lánh (bling bling) Khói mờ nhân ảnh (Hàn Mặc Tử) Bật nắp champange Body em cong không góc cạnh Bước đi lên club (lên) Đây là lần đầu tiên 1 đêm duy nhất Ai cũng giơ tay mỗi khi mà nhạc lên (lets go) DJ DuyB lets drop that beat Anh thì lắc lư cùng với giai điệu hay Nếu mà uống rượu thì anh NOT AFRAID Cứ mang ra đây mấy chai rượu tây Đứng ở trong phòng không ai tuyệt hơn anh Vì anh nhiều tiền ở trong Vietcombank Múa quạt theo kiểu đôn chề Alo cho mẹ hết nhạc con về Hết nhạc con về Hết nhạc con về Hết nhạc con về Alo cho mẹ hết nhạc con về`;
