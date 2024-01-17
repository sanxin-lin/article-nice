import { Row, Col } from 'antd';
import Header from '../NavBar';
import Editor from '../Editor';
import Review from '../Review';
import './index.less';

export default function index() {
  return (
    <div className="flex-1 editor-main-container">
      <Header />
      <Row>
        <Col span={12}>
          <Editor />
        </Col>
        <Col span={12}>
          <Review />
        </Col>
      </Row>
    </div>
  );
}
