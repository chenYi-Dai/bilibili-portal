import { AxiosRequestConfig } from 'axios';

export interface RequestOptions {
  apiUrl?: string;
  isJoinPrefix?: boolean;
  urlPrefix?: string;
  joinParamsToUrl?: boolean;
  formatDate?: boolean;
  isTransformResponse?: boolean;
  isReturnNativeResponse?: boolean;
  ignoreRepeatRequest?: boolean;
  joinTime?: boolean;
  withToken?: boolean;
  retry?: {
    count: number;
    delay: number;
  };
}

//此处表明接收返回结果的结构
export interface Result<T = any> {
  //code: number;
  data: T;
}

export interface AxiosRequestConfigRetry extends AxiosRequestConfig {
  retryCount?: number;
}
