import { useEffect, useState, useRef } from 'react';
import { Button, Modal, Input, message, type InputRef } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import './index.less';

export default function AddButton() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const inputRef = useRef<InputRef>();

  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };
  const onOk = () => {
    if (value.trim() === '') {
      message.warning(t('article.title.warning'));
      inputRef.current?.focus();
      return;
    }
    message.success(t('article.title.success'));
    handleCloseModal();
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    if (!open) {
      setTimeout(() => {
        setValue('');
      }, 200);
    } else {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 200);
    }
  }, [open]);

  return (
    <div className="w-full main-sider-add-button">
      <Button className="w-full" icon={<PlusOutlined />} type="text" onClick={handleOpenModal}>
        {t('article.add')}
      </Button>
      <Modal
        forceRender
        maskClosable={false}
        title={t('article.add')}
        open={open}
        onOk={onOk}
        onCancel={handleCloseModal}
      >
        <div className="flex items-center">
          <span className="whitespace-nowrap">{t('article.title.label')}：</span>
          <Input
            ref={inputRef as any}
            value={value}
            onChange={onChange}
            showCount
            maxLength={50}
            placeholder={t('article.title.placeholder')}
          />
        </div>
      </Modal>
    </div>
  );
}
