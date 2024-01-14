/**
 * @description: Request result set
 */
export enum ResultEnum {
  SUCCESS = 0,
  ERROR = -1,
  TIMEOUT = 401,
  TYPE = 'success',
}

/**
 * @description: request method
 */
export enum RequestEnum {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

/**
 * @description:  contentType
 */
export enum ContentTypeEnum {
  // json
  JSON = 'application/json;charset=UTF-8',
  // form-data qs
  FORM_URLENCODED = 'application/x-www-form-urlencoded;charset=UTF-8',
  // form-data  upload
  FORM_DATA = 'multipart/form-data;charset=UTF-8',
}

export type ErrorCodeType = {
  code: string;
  message: string;
  httpStatus?: number;
};

export class ErrorCode {
  public static INTERNAL_SERVER_ERROR: ErrorCodeType = {
    code: '500000',
    message: 'Internal Server Error',
    httpStatus: 500,
  };

  public static PROJECT_ID_REQUIRED2: ErrorCodeType = {
    code: '400001',
    message: 'No project id was found',
    httpStatus: 400,
  };

  public static INVALID_PARAM: ErrorCodeType = {
    code: '422001',
    message: 'Invalid Param',
    httpStatus: 422,
  };

  public static DATABASE_DATA_TOO_LONG: ErrorCodeType = {
    code: '422002',
    message: 'Param data too long',
    httpStatus: 422,
  };

  public static MISSING_PARAM: ErrorCodeType = {
    code: '422003',
    message: 'Param is missing',
    httpStatus: 422,
  };

  public static EMAIL_EXIST: ErrorCodeType = {
    code: '400101',
    message: 'Email exist',
    httpStatus: 400,
  };

  public static EMAIL_NOT_EXIST: ErrorCodeType = {
    code: '400102',
    message: 'Email not exist',
    httpStatus: 400,
  };

  public static RESET_PASSWORD_TOKEN_INVALID: ErrorCodeType = {
    code: '400103',
    message: 'Reset password token invalid',
    httpStatus: 400,
  };

  public static INVITATION_TOKEN_INVALID: ErrorCodeType = {
    code: '400107',
    message: 'Invitation token invalid',
    httpStatus: 400,
  };

  public static USERNAME_EXISTED: ErrorCodeType = {
    code: '400104',
    message: 'Username exist',
    httpStatus: 400,
  };

  public static CLIENT_VERSION_TOO_LOW: ErrorCodeType = {
    code: '400105',
    message: 'Client version too low',
    httpStatus: 400,
  };

  public static USER_DATA_LIMIT: ErrorCodeType = {
    code: '400106',
    message: 'user data limit',
    httpStatus: 400,
  };

  public static UNAUTHORIZED: ErrorCodeType = {
    code: '401000',
    message: 'Unauthorized Error',
    httpStatus: 401,
  };

  public static INVALID_ACCOUNT_OR_PASSWORD: ErrorCodeType = {
    code: '401001',
    message: 'Invalid account or password',
    httpStatus: 401,
  };

  public static CREDENTIALS_REQUIRED: ErrorCodeType = {
    code: '401002',
    message: 'No authorization token was found',
    httpStatus: 401,
  };

  public static CREDENTIALS_BAD_SCHEME: ErrorCodeType = {
    code: '401003',
    message: 'Format is Authorization: Bearer [token]',
    httpStatus: 401,
  };

  public static REVOKED_TOKEN: ErrorCodeType = {
    code: '401004',
    message: 'The token has been revoked',
    httpStatus: 401,
  };

  public static INVALID_TOKEN: ErrorCodeType = {
    code: '401005',
    message: 'The token was invalid',
    httpStatus: 401,
  };

  public static RATE_LIMITED: ErrorCodeType = {
    code: '401006',
    message: 'Rate limited',
    httpStatus: 401,
  };

  public static RATE_LIMITED_CAPTCHA: ErrorCodeType = {
    code: '401007',
    message: 'Rate limited, need captcha',
    httpStatus: 401,
  };

  public static CAPTCHA_ERROR: ErrorCodeType = {
    code: '401008',
    message: 'Captcha error',
    httpStatus: 401,
  };

  public static INVALID_PASSWORD: ErrorCodeType = {
    code: '401009',
    message: 'Invalid password',
    httpStatus: 401,
  };

  public static RESOURCE_EXPIRED: ErrorCodeType = {
    code: '404010',
    message: 'Resource expired',
    httpStatus: 401,
  };

  public static FORBIDDEN: ErrorCodeType = {
    code: '403001',
    message: 'Forbidden',
    httpStatus: 403,
  };

  public static NO_PROJECT_GUEST_PRIVILEGE: ErrorCodeType = {
    code: '403010',
    message: 'no project guest privilege',
    httpStatus: 403,
  };

  public static NO_PROJECT_READONLY_PRIVILEGE: ErrorCodeType = {
    code: '403011',
    message: 'No project readonly privilege',
    httpStatus: 403,
  };

  public static NO_PROJECT_MAINTAINER_PRIVILEGE: ErrorCodeType = {
    code: '403012',
    message: 'No project maintainer privilege',
    httpStatus: 403,
  };

  public static NO_PROJECT_ADMIN_PRIVILEGE: ErrorCodeType = {
    code: '403013',
    message: 'No project admin privilege',
    httpStatus: 403,
  };

  public static NO_TEAM_OWNER_PRIVILEGE: ErrorCodeType = {
    code: '403021',
    message: 'No team owner privilege',
    httpStatus: 403,
  };

  public static NO_TEAM_ADMIN_PRIVILEGE: ErrorCodeType = {
    code: '403022',
    message: 'No team admin privilege',
    httpStatus: 403,
  };

  public static NO_TEAM_MEMBER_PRIVILEGE: ErrorCodeType = {
    code: '403022',
    message: 'No team member privilege',
    httpStatus: 403,
  };

  public static DEVICE_COUNT_OVERLOAD: ErrorCodeType = {
    code: '403023',
    message: 'Team Device Count Overload',
    httpStatus: 403,
  };

  public static USER_LIMITED: ErrorCodeType = {
    code: '403024',
    message: 'User Limited',
    httpStatus: 403,
  };

  public static NOT_FOUND: ErrorCodeType = {
    code: '404000',
    message: 'Not found',
    httpStatus: 404,
  };

  public static DOMAIN_EXIST: ErrorCodeType = {
    code: '400201',
    message: 'Domain exist',
    httpStatus: 400,
  };

  public static DOMAIN_RESERVE: ErrorCodeType = {
    code: '400202',
    message: 'Domain reserve',
    httpStatus: 400,
  };

  public static LICENSE_EXPIRED: ErrorCodeType = {
    // 授权 LICENSE 过期
    code: '0',
    message: '',
    httpStatus: 403,
  };

  public static LICENSE_INVALID: ErrorCodeType = {
    // 授权 LICENSE 不正确
    code: '1',
    message: '',
    httpStatus: 403,
  };

  public static PROJECT_NOT_FOUND: ErrorCodeType = {
    code: '400001',
    message: 'Project not found',
    httpStatus: 400,
  };
}

export default ErrorCode;
