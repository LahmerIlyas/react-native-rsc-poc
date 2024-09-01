/**
 * Generated by orval v7.0.1 🍺
 * Do not edit manually.
 * OMDb API
 * This API requires authorization, you can get a free key here: [http://omdbapi.com/apikey.aspx](http://omdbapi.com/apikey.aspx)
 * OpenAPI spec version: 1.0
 */
import {
  useQuery
} from '@tanstack/react-query'
import type {
  DefinedInitialDataOptions,
  DefinedUseQueryResult,
  QueryFunction,
  QueryKey,
  UndefinedInitialDataOptions,
  UseQueryOptions,
  UseQueryResult
} from '@tanstack/react-query'
import { customInstance } from '../custom-instance';
import type { ErrorType } from '../custom-instance';
export type TitleSearchR = typeof TitleSearchR[keyof typeof TitleSearchR];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const TitleSearchR = {
  json: 'json',
  xml: 'xml',
} as const;

export type TitleSearchType = typeof TitleSearchType[keyof typeof TitleSearchType];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const TitleSearchType = {
  movie: 'movie',
  series: 'series',
} as const;

export type TitleSearchParams = {
/**
 * Title of movie or series
 */
s: string;
/**
 * Year of release
 */
y?: number;
/**
 * Return movie or series
 */
type?: TitleSearchType;
/**
 * The response type to return
 */
r?: TitleSearchR;
/**
 * Page number to return
 */
page?: number;
/**
 * JSONP callback name
 */
callback?: string;
};

export type GetIdR = typeof GetIdR[keyof typeof GetIdR];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetIdR = {
  json: 'json',
  xml: 'xml',
} as const;

export type GetIdPlot = typeof GetIdPlot[keyof typeof GetIdPlot];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetIdPlot = {
  short: 'short',
  full: 'full',
} as const;

export type GetIdParams = {
/**
 * A valid IMDb ID (e.g. tt0000001)
 */
i: string;
/**
 * Return short or full plot
 */
plot?: GetIdPlot;
/**
 * The response type to return
 */
r?: GetIdR;
/**
 * JSONP callback name
 */
callback?: string;
};

export type GetTitleR = typeof GetTitleR[keyof typeof GetTitleR];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetTitleR = {
  json: 'json',
  xml: 'xml',
} as const;

export type GetTitlePlot = typeof GetTitlePlot[keyof typeof GetTitlePlot];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetTitlePlot = {
  short: 'short',
  full: 'full',
} as const;

export type GetTitleType = typeof GetTitleType[keyof typeof GetTitleType];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetTitleType = {
  movie: 'movie',
  series: 'series',
} as const;

export type GetTitleParams = {
/**
 * Title of movie or series
 */
t: string;
/**
 * Year of release
 */
y?: number;
/**
 * Return movie or series
 */
type?: GetTitleType;
/**
 * Return short or full plot
 */
plot?: GetTitlePlot;
/**
 * The response type to return
 */
r?: GetTitleR;
/**
 * JSONP callback name
 */
callback?: string;
};



type AwaitedInput<T> = PromiseLike<T> | T;

      type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;


type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];


/**
 * @summary Returns the most popular match for a given title
 */
export const getTitle = (
    params: GetTitleParams,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<void>(
      {url: `/?t`, method: 'GET',
        params, signal
    },
      options);
    }
  

export const getGetTitleQueryKey = (params: GetTitleParams,) => {
    return [`/?t`, ...(params ? [params]: [])] as const;
    }

    
export const getGetTitleQueryOptions = <TData = Awaited<ReturnType<typeof getTitle>>, TError = ErrorType<void>>(params: GetTitleParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getTitle>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetTitleQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getTitle>>> = ({ signal }) => getTitle(params, requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getTitle>>, TError, TData> & { queryKey: QueryKey }
}

export type GetTitleQueryResult = NonNullable<Awaited<ReturnType<typeof getTitle>>>
export type GetTitleQueryError = ErrorType<void>


export function useGetTitle<TData = Awaited<ReturnType<typeof getTitle>>, TError = ErrorType<void>>(
 params: GetTitleParams, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getTitle>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getTitle>>,
          TError,
          TData
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetTitle<TData = Awaited<ReturnType<typeof getTitle>>, TError = ErrorType<void>>(
 params: GetTitleParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getTitle>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getTitle>>,
          TError,
          TData
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetTitle<TData = Awaited<ReturnType<typeof getTitle>>, TError = ErrorType<void>>(
 params: GetTitleParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getTitle>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey }
/**
 * @summary Returns the most popular match for a given title
 */

export function useGetTitle<TData = Awaited<ReturnType<typeof getTitle>>, TError = ErrorType<void>>(
 params: GetTitleParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getTitle>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getGetTitleQueryOptions(params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * @summary Returns a single result based on the ID provided
 */
export const getId = (
    params: GetIdParams,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<void>(
      {url: `/?i`, method: 'GET',
        params, signal
    },
      options);
    }
  

export const getGetIdQueryKey = (params: GetIdParams,) => {
    return [`/?i`, ...(params ? [params]: [])] as const;
    }

    
export const getGetIdQueryOptions = <TData = Awaited<ReturnType<typeof getId>>, TError = ErrorType<void>>(params: GetIdParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getId>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetIdQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getId>>> = ({ signal }) => getId(params, requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getId>>, TError, TData> & { queryKey: QueryKey }
}

export type GetIdQueryResult = NonNullable<Awaited<ReturnType<typeof getId>>>
export type GetIdQueryError = ErrorType<void>


export function useGetId<TData = Awaited<ReturnType<typeof getId>>, TError = ErrorType<void>>(
 params: GetIdParams, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getId>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getId>>,
          TError,
          TData
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetId<TData = Awaited<ReturnType<typeof getId>>, TError = ErrorType<void>>(
 params: GetIdParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getId>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getId>>,
          TError,
          TData
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetId<TData = Awaited<ReturnType<typeof getId>>, TError = ErrorType<void>>(
 params: GetIdParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getId>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey }
/**
 * @summary Returns a single result based on the ID provided
 */

export function useGetId<TData = Awaited<ReturnType<typeof getId>>, TError = ErrorType<void>>(
 params: GetIdParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getId>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getGetIdQueryOptions(params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * @summary Returns an array of results for a given title
 */
export const titleSearch = (
    params: TitleSearchParams,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<void>(
      {url: `/?s`, method: 'GET',
        params, signal
    },
      options);
    }
  

export const getTitleSearchQueryKey = (params: TitleSearchParams,) => {
    return [`/?s`, ...(params ? [params]: [])] as const;
    }

    
export const getTitleSearchQueryOptions = <TData = Awaited<ReturnType<typeof titleSearch>>, TError = ErrorType<void>>(params: TitleSearchParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof titleSearch>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getTitleSearchQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof titleSearch>>> = ({ signal }) => titleSearch(params, requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof titleSearch>>, TError, TData> & { queryKey: QueryKey }
}

export type TitleSearchQueryResult = NonNullable<Awaited<ReturnType<typeof titleSearch>>>
export type TitleSearchQueryError = ErrorType<void>


export function useTitleSearch<TData = Awaited<ReturnType<typeof titleSearch>>, TError = ErrorType<void>>(
 params: TitleSearchParams, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof titleSearch>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof titleSearch>>,
          TError,
          TData
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useTitleSearch<TData = Awaited<ReturnType<typeof titleSearch>>, TError = ErrorType<void>>(
 params: TitleSearchParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof titleSearch>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof titleSearch>>,
          TError,
          TData
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useTitleSearch<TData = Awaited<ReturnType<typeof titleSearch>>, TError = ErrorType<void>>(
 params: TitleSearchParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof titleSearch>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey }
/**
 * @summary Returns an array of results for a given title
 */

export function useTitleSearch<TData = Awaited<ReturnType<typeof titleSearch>>, TError = ErrorType<void>>(
 params: TitleSearchParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof titleSearch>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getTitleSearchQueryOptions(params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



