import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import './index.less';

export default function AddButton() {
  const { t } = useTranslation();

  return (
    <div className="w-full main-sider-add-button">
      <Button className="w-full" icon={<PlusOutlined />} type="text">
        {t('add')}
      </Button>
    </div>
  );
}
