import BasicContainer from './../../HOC/BasicContainer/index';
import SliderCarousel from './SliderCarousel/index';
import RowContent from '../../components/RowContent/index';

export const DATA_FAKE = [
  {
    id: 12,
    name: 'Marietta Howe',
    thumbnail:
      'https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/tuyetdinh_thumb_640x960-729813bd9c90-1629440877452-7BhOAsWq.jpg?v=0&maxW=260&format=webp',
    another_name: 'Concepcion Hyatt',
    public: true,
    status: 1,
    approval_status: 1,
    note: 'Mr. Jarod Carroll',
    title: [],
    period_time: 2,
    type_period_time: 2,
    views: 12,
    follow: 2,
    created_at: '2021-08-23 16:45:39',
    seo_title: 'Miss Makenzie Swaniawski V',
    seo_description: 'Carolina Herman',
    seo_slug: 'Mr. Connor Erdman',
  },
  {
    id: 12,
    name: 'Marietta Howe',
    thumbnail:
      'https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/tuyetdinh_thumb_640x960-729813bd9c90-1629440877452-7BhOAsWq.jpg?v=0&maxW=260&format=webp',
    another_name: 'Concepcion Hyatt',
    public: true,
    status: 1,
    approval_status: 1,
    note: 'Mr. Jarod Carroll',
    title: [],
    period_time: 2,
    type_period_time: 2,
    views: 12,
    follow: 2,
    created_at: '2021-08-23 16:45:39',
    seo_title: 'Miss Makenzie Swaniawski V',
    seo_description: 'Carolina Herman',
    seo_slug: 'Mr. Connor Erdman',
  },
  {
    id: 12,
    name: 'Marietta Howe',
    thumbnail:
      'https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/namdinhcocvi_thumb_640x960-11d3c18a6dc3-1614594555403-zjGZhy6o.jpg?v=0&maxW=260&format=webp',
    another_name: 'Concepcion Hyatt',
    public: true,
    status: 1,
    approval_status: 1,
    note: 'Mr. Jarod Carroll',
    title: [],
    period_time: 2,
    type_period_time: 2,
    views: 12,
    follow: 2,
    created_at: '2021-08-23 16:45:39',
    seo_title: 'Miss Makenzie Swaniawski V',
    seo_description: 'Carolina Herman',
    seo_slug: 'Mr. Connor Erdman',
  },
  {
    id: 12,
    name: 'Marietta Howe',
    thumbnail:
      'https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/namdinhcocvi_thumb_640x960-11d3c18a6dc3-1614594555403-zjGZhy6o.jpg?v=0&maxW=260&format=webp',
    another_name: 'Concepcion Hyatt',
    public: true,
    status: 1,
    approval_status: 1,
    note: 'Mr. Jarod Carroll',
    title: [],
    period_time: 2,
    type_period_time: 2,
    views: 12,
    follow: 2,
    created_at: '2021-08-23 16:45:39',
    seo_title: 'Miss Makenzie Swaniawski V',
    seo_description: 'Carolina Herman',
    seo_slug: 'Mr. Connor Erdman',
  },
  {
    id: 12,
    name: 'Marietta Howe',
    thumbnail:
      'https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/namdinhcocvi_thumb_640x960-11d3c18a6dc3-1614594555403-zjGZhy6o.jpg?v=0&maxW=260&format=webp',
    another_name: 'Concepcion Hyatt',
    public: true,
    status: 1,
    approval_status: 1,
    note: 'Mr. Jarod Carroll',
    title: [],
    period_time: 2,
    type_period_time: 2,
    views: 12,
    follow: 2,
    created_at: '2021-08-23 16:45:39',
    seo_title: 'Miss Makenzie Swaniawski V',
    seo_description: 'Carolina Herman',
    seo_slug: 'Mr. Connor Erdman',
  },
  {
    id: 12,
    name: 'Marietta Howe',
    thumbnail:
      'https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/namdinhcocvi_thumb_640x960-11d3c18a6dc3-1614594555403-zjGZhy6o.jpg?v=0&maxW=260&format=webp',
    another_name: 'Concepcion Hyatt',
    public: true,
    status: 1,
    approval_status: 1,
    note: 'Mr. Jarod Carroll',
    title: [],
    period_time: 2,
    type_period_time: 2,
    views: 12,
    follow: 2,
    created_at: '2021-08-23 16:45:39',
    seo_title: 'Miss Makenzie Swaniawski V',
    seo_description: 'Carolina Herman',
    seo_slug: 'Mr. Connor Erdman',
  },
  {
    id: 12,
    name: 'Marietta Howe',
    thumbnail:
      'https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/namdinhcocvi_thumb_640x960-11d3c18a6dc3-1614594555403-zjGZhy6o.jpg?v=0&maxW=260&format=webp',
    another_name: 'Concepcion Hyatt',
    public: true,
    status: 1,
    approval_status: 1,
    note: 'Mr. Jarod Carroll',
    title: [],
    period_time: 2,
    type_period_time: 2,
    views: 12,
    follow: 2,
    created_at: '2021-08-23 16:45:39',
    seo_title: 'Miss Makenzie Swaniawski V',
    seo_description: 'Carolina Herman',
    seo_slug: 'Mr. Connor Erdman',
  },
  {
    id: 12,
    name: 'Marietta Howe',
    thumbnail:
      'https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_thumbnails/namdinhcocvi_thumb_640x960-11d3c18a6dc3-1614594555403-zjGZhy6o.jpg?v=0&maxW=260&format=webp',
    another_name: 'Concepcion Hyatt',
    public: true,
    status: 1,
    approval_status: 1,
    note: 'Mr. Jarod Carroll',
    title: [],
    period_time: 2,
    type_period_time: 2,
    views: 12,
    follow: 2,
    created_at: '2021-08-23 16:45:39',
    seo_title: 'Miss Makenzie Swaniawski V',
    seo_description: 'Carolina Herman',
    seo_slug: 'Mr. Connor Erdman',
  },
];

const DashBoard = () => {
  return (
    <BasicContainer>
      <SliderCarousel />
      <RowContent data={DATA_FAKE} title="Truyện mới cập nhật" link="/" />
      <RowContent data={DATA_FAKE} title="Truyện mới cập nhật" link="/" />
      <RowContent data={DATA_FAKE} title="Truyện mới cập nhật" link="/" />
      <RowContent data={DATA_FAKE} title="Truyện mới cập nhật" link="/" />
      <RowContent data={DATA_FAKE} title="Truyện mới cập nhật" link="/" />
    </BasicContainer>
  );
};

export default DashBoard;
