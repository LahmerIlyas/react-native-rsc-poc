import Axios, {
  AxiosError,
  AxiosRequestConfig,
} from 'axios';

export type ErrorType<Error> = AxiosError<Error>;

export type BodyType<BodyData> = BodyData;

export const omdbApiHttpClient = Axios.create();

export const customInstance = <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig,
): Promise<T> => {
  const source = Axios.CancelToken.source();
  const promise = omdbApiHttpClient({
    ...config,
    ...options,
    cancelToken: source.token,
  }).then(({ data }) => data || null);

  // @ts-expect-error missing type
  promise.cancel = () => {
    source.cancel('Query was cancelled');
  };

  return promise;
};

type OmdbApiHttpClientConfiguration = {
  baseUrl: string;
  apiKey: string; //Ex: apikey=b8c4e425
};

export const setOmdbApiHttpClientConfiguration = (
  config: OmdbApiHttpClientConfiguration,
) => {
  omdbApiHttpClient.defaults.baseURL = config.baseUrl;

  omdbApiHttpClient.defaults.params = {}
  omdbApiHttpClient.defaults.params['apikey'] = config.apiKey
};
