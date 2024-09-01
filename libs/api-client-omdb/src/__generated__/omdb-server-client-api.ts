/**
 * Generated by orval v7.0.1 🍺
 * Do not edit manually.
 * OMDb API
 * This API requires authorization, you can get a free key here: [http://omdbapi.com/apikey.aspx](http://omdbapi.com/apikey.aspx)
 * OpenAPI spec version: 1.0
 */
import { customInstance } from '../custom-instance';
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




type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];


  export const getOMDbAPI = () => {
/**
 * @summary Returns the most popular match for a given title
 */
const getTitle = (
    params: GetTitleParams,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<void>(
      {url: `/?t`, method: 'GET',
        params
    },
      options);
    }
  
/**
 * @summary Returns a single result based on the ID provided
 */
const getId = (
    params: GetIdParams,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<void>(
      {url: `/?i`, method: 'GET',
        params
    },
      options);
    }
  
/**
 * @summary Returns an array of results for a given title
 */
const titleSearch = (
    params: TitleSearchParams,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<void>(
      {url: `/?s`, method: 'GET',
        params
    },
      options);
    }
  
return {getTitle,getId,titleSearch}};

type AwaitedInput<T> = PromiseLike<T> | T;

    type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;

export type GetTitleResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getOMDbAPI>['getTitle']>>>
export type GetIdResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getOMDbAPI>['getId']>>>
export type TitleSearchResult = NonNullable<Awaited<ReturnType<ReturnType<typeof getOMDbAPI>['titleSearch']>>>