import RowContent from '../../../components/RowContent';
import BasicContainer from '../../../HOC/BasicContainer';
import { DATA_FAKE } from '../../DashBoard';

const History = () => {
  return (
    <BasicContainer>
      <RowContent data={DATA_FAKE} title="Truyện đã đọc" link="/" />
    </BasicContainer>
  );
};

export default History;
