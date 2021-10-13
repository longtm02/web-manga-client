import RowContent from '../../../components/RowContent';
import BasicContainer from '../../../HOC/BasicContainer';
import { DATA_FAKE } from '../../DashBoard';

const Follow = () => {
  return (
    <BasicContainer>
      <RowContent data={DATA_FAKE} title="Đang theo dõi" link="/" />
    </BasicContainer>
  );
};

export default Follow;
