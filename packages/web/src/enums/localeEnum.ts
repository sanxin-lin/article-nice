import type { DropMenu } from '#/global';

export const enum LocaleEnum {
  ZH_CN = 'zh_CN',
  EN_US = 'en',
}

export const enum LocaleTextEnum {
  ZH_CN = '简体中文',
  EN_US = 'English',
}

export const LOCALE_LIST: DropMenu[] = [
  {
    text: LocaleTextEnum.ZH_CN,
    event: LocaleEnum.ZH_CN,
  },
  {
    text: LocaleTextEnum.EN_US,
    event: LocaleEnum.EN_US,
  },
];
