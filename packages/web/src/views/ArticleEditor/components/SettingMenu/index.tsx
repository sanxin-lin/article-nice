import { SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown } from 'antd';
import { useTranslation } from 'react-i18next';

export default function index() {
  const { t } = useTranslation();

  const items: MenuProps['items'] = [
    {
      label: t('article.copy'),
      key: '0',
    },
    {
      label: t('article.edit'),
      key: '1',
    },
    {
      type: 'divider',
    },
    {
      label: t('article.review'),
      key: '3',
    },
    {
      label: t('article.cancel'),
      key: '4',
    },
    {
      type: 'divider',
    },
    {
      label: t('article.saveAsTheme'),
      key: '5',
    },
    {
      type: 'divider',
    },
    {
      label: t('article.delete'),
      key: '6',
    },
  ];

  return (
    <Dropdown menu={{ items }} trigger={['click']}>
      <SettingOutlined />
    </Dropdown>
  );
}
