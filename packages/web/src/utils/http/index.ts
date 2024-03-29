/* eslint-disable no-case-declarations */

import { getAppEnvConfig } from '../env';
import { VAxios } from './Axios';
import type { AxiosTransform, CreateAxiosOptions } from './axiosTransform';
// import { checkStatus } from './checkStatus';
import { formatRequestDate, joinTimestamp, setObjToUrlParams } from './helper';
import { ContentTypeEnum, RequestEnum, ResultEnum } from '@/enums/httpEnum';
import type { RequestOptions, Result } from '#/axios';
import type { AxiosInstance, AxiosResponse } from 'axios';
import axios from 'axios';
import { clone, isString, merge } from 'lodash-es';

// const { createMessage, createErrorModal, notification } = useMessage();

const { VITE_GLOB_API_URL_PREFIX } = getAppEnvConfig();

/**
 * @description: 数据处理，方便区分多种处理方式
 */
const transform: AxiosTransform = {
  /**
   * @description: 处理响应数据。如果数据不是预期格式，可直接抛出错误
   */
  transformResponseHook: (res: AxiosResponse<Result>, options: RequestOptions) => {
    const { isTransformResponse, isReturnNativeResponse, errorMessageMode } = options;
    // 是否返回原生响应头 比如：需要获取响应头时使用该属性
    if (isReturnNativeResponse) {
      return res;
    }
    // 不进行任何处理，直接返回
    // 用于页面代码可能需要直接获取code，data，message这些信息时开启
    if (!isTransformResponse) {
      return res.data;
    }

    // 错误的时候返回
    const { data } = res;

    const { success, data: result, code, message } = data;

    // 这里逻辑可以根据项目进行修改
    if (success) {
      return result;
    }

    // // 在此处根据自己项目的实际情况对不同的code执行不同的操作
    // // 如果不希望中断当前请求，请return数据，否则直接抛出异常即可
    // let _message = message;
    // switch (code) {
    //   case ResultEnum.TIMEOUT:
    //     _message = t('sys.api.timeoutMessage');
    //     // TODO pending
    //     // const userStore = useUserStoreWithOut();
    //     // userStore.setToken(undefined);
    //     // userStore.logout(true);
    //     break;
    // }

    // // errorMessageMode='modal'的时候会显示modal错误弹窗，而不是消息提示，用于一些比较重要的错误
    // // errorMessageMode='none' 一般是调用时明确表示不希望自动弹出错误提示
    // if (errorMessageMode === 'modal') {
    //   createErrorModal({ title: t('exportData.modal.error.errorMessage'), content: _message });
    // } else if (errorMessageMode === 'message') {
    //   createMessage.error(_message);
    // } else if (errorMessageMode === 'notification') {
    //   notification.error({
    //     message: t('exportData.modal.error.errorMessage'),
    //     description: _message,
    //     duration: 3,
    //   });
    // }

    throw new Error(code);
  },

  // 请求之前处理config
  beforeRequestHook: (config, options) => {
    const { apiUrl, joinPrefix, joinParamsToUrl, formatDate, joinTime = true, urlPrefix } = options;

    if (joinPrefix) {
      config.url = `${urlPrefix}${config.url}`;
    }

    if (apiUrl && isString(apiUrl)) {
      config.url = `${apiUrl}${config.url}`;
    }
    const params = config.params || {};
    const data = config.data || false;
    formatDate && data && !isString(data) && formatRequestDate(data);
    if (config.method?.toUpperCase() === RequestEnum.GET) {
      if (!isString(params)) {
        // 给 get 请求加上时间戳参数，避免从缓存中拿数据。
        config.params = Object.assign(params || {}, joinTimestamp(joinTime, false));
      } else {
        // 兼容restful风格
        config.url = config.url + params + `${joinTimestamp(joinTime, true)}`;
        config.params = undefined;
      }
    } else {
      if (!isString(params)) {
        formatDate && formatRequestDate(params);
        if (
          Reflect.has(config, 'data') &&
          config.data &&
          (Object.keys(config.data).length > 0 || config.data instanceof FormData)
        ) {
          config.data = data;
          config.params = params;
        } else {
          // 非GET请求如果没有提供data，则将params视为data
          config.data = params;
          config.params = undefined;
        }
        if (joinParamsToUrl) {
          config.url = setObjToUrlParams(
            config.url as string,
            Object.assign({}, config.params, config.data),
          );
        }
      } else {
        // 兼容restful风格
        config.url = config.url + params;
        config.params = undefined;
      }
    }
    return config;
  },

  /**
   * @description: 请求拦截器处理
   */
  requestInterceptors: (config, options) => {
    // 请求之前处理config
    // const userStore = useUserStoreWithOut();
    // const localeStore = useLocaleStoreWithOut();
    // const token = userStore.getAccessToken;
    // const locale = localeStore.getLocale;
    const token = '';
    const locale = '';
    if (token && (config as Recordable)?.requestOptions?.withToken !== false) {
      // jwt token
      (config as Recordable).headers.Authorization = options.authenticationScheme
        ? `${options.authenticationScheme} ${token}`
        : token;
    }
    if (config.headers) {
      config.headers['Accept-Language'] = locale;
    }
    return config;
  },

  /**
   * @description: 响应拦截器处理
   */
  responseInterceptors: (res: AxiosResponse<any>) => {
    return res;
  },

  /**
   * @description: 响应错误处理
   */
  responseInterceptorsCatch: (_: AxiosInstance, error: any) => {
    // axiosInstance(error.response.config);
    // return;
    // const { t } = useI18n();
    const { response, code, message, config } = error || {};
    const errorMessageMode = config?.requestOptions?.errorMessageMode || 'none';
    const msg: string = response?.data?.message ?? '';
    const err: string = error?.toString?.() ?? '';
    let errMessage = msg;

    if (axios.isCancel(error)) {
      return Promise.reject(error);
    }

    try {
      //   if (code === 'ECONNABORTED' && message.indexOf('timeout') !== -1) {
      //     errMessage = t('sys.api.apiTimeoutMessage');
      //   }
      //   if (err?.includes('Network Error')) {
      //     errMessage = t('sys.api.networkExceptionMsg');
      //   }

      // errorMessageMode='modal'的时候会显示modal错误弹窗，而不是消息提示，用于一些比较重要的错误
      // errorMessageMode='none' 一般是调用时明确表示不希望自动弹出错误提示
      // if (error?.response?.status == 401) {
      //   // useUserStoreWithOut().logout(true);
      //   router.replace(LOGIN_PATH);
      // }
      const isUnauthorized =
        error?.response?.status === 401 &&
        response?.config?.url !== `${VITE_GLOB_API_URL_PREFIX}/auth/token`;
      if (errMessage) {
        if (isUnauthorized) return Promise.reject(error);
        // if (errorMessageMode === 'modal') {
        //   createErrorModal({
        //     title: t('exportData.modal.error.errorMessage'),
        //     content: errMessage,
        //   });
        // } else if (errorMessageMode === 'message') {
        //   createMessage.error(errMessage);
        // } else if (errorMessageMode === 'notification') {
        //   notification.error({
        //     message: t('exportData.modal.error.errorMessage'),
        //     description: errMessage,
        //     duration: 3,
        //   });
        // }
        return Promise.reject(error);
      }
    } catch (error) {
      throw new Error(error as unknown as string);
    }

    const isRefreshUnauthorized =
      error?.response?.status === 401 &&
      response?.config?.url === `${VITE_GLOB_API_URL_PREFIX}/auth/token`;
    if (isRefreshUnauthorized) {
      //   checkStatus(error?.response?.status, msg, errorMessageMode);
    }

    // 添加自动重试机制 保险起见 只针对GET请求
    // const retryRequest = new AxiosRetry();
    // const { isOpenRetry } = config.requestOptions.retryRequest;
    // config.method?.toUpperCase() === RequestEnum.GET &&
    //   isOpenRetry &&
    //   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //   // @ts-ignore
    //   retryRequest.retry(axiosInstance, error);
    return Promise.reject(error);
  },
};

function createAxios(opt?: Partial<CreateAxiosOptions>) {
  return new VAxios(
    // 深度合并
    merge(
      {
        // See https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication#authentication_schemes
        // authentication schemes，e.g: Bearer
        // authenticationScheme: 'Bearer',
        authenticationScheme: '',
        timeout: 10 * 1000,
        // 基础接口地址
        // baseURL: globSetting.apiUrl,

        headers: { 'Content-Type': ContentTypeEnum.JSON },
        // 如果是form-data格式
        // headers: { 'Content-Type': ContentTypeEnum.FORM_URLENCODED },
        // 数据处理方式
        transform: clone(transform),
        // 配置项，下面的选项都可以在独立的接口请求中覆盖
        requestOptions: {
          // 默认将prefix 添加到url
          joinPrefix: true,
          // 是否返回原生响应头 比如：需要获取响应头时使用该属性
          isReturnNativeResponse: false,
          // 需要对返回数据进行处理
          isTransformResponse: true,
          // post请求的时候添加参数到url
          joinParamsToUrl: false,
          // 格式化提交参数时间
          formatDate: true,
          // 消息提示类型
          errorMessageMode: 'message',
          // 接口地址
          // apiUrl: VITE_GLOB_API_URL,
          // 接口拼接地址
          urlPrefix: VITE_GLOB_API_URL_PREFIX,
          //  是否加入时间戳
          joinTime: true,
          // 忽略重复请求
          ignoreCancelToken: true,
          // 是否携带token
          withToken: true,
          // retryRequest: {
          //   isOpenRetry: true,
          //   count: 5,
          //   waitTime: 100,
          // },
        },
      },
      opt || {},
    ),
  );
}
export const defHttp = createAxios();

// other api url
// export const otherHttp = createAxios({
//   requestOptions: {
//     apiUrl: 'xxx',
//     urlPrefix: 'xxx',
//   },
// });
