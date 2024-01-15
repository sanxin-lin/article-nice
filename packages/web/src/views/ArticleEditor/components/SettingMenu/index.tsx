import { SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown } from 'antd';

export default function index() {
  const items: MenuProps['items'] = [
    {
      label: '复制标题',
      key: '0',
    },
    {
      label: '修改标题',
      key: '1',
    },
    {
      type: 'divider',
    },
    {
      label: '查看文章',
      key: '3',
    },
    {
      label: '取消发布',
      key: '4',
    },
    {
      type: 'divider',
    },
    {
      label: '保存为主题',
      key: '5',
    },
    {
      type: 'divider',
    },
    {
      label: '删除文章',
      key: '6',
    },
  ];

  return (
    <Dropdown menu={{ items }} trigger={['click']}>
      <SettingOutlined />
    </Dropdown>
  );
}
