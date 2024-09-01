
/**
 * Copyright © 2022 650 Industries.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
let baseUrl = 'http://localhost:3000';

export const setBaseUrl = (url: string) => {
  baseUrl = url;
};

function joinComponents(prefix: string, suffix: string): string {
  return `${prefix.replace(/\/+$/, '')}/${suffix.replace(/^\/+/, '')}`;
}

export function buildUrlForBundle(bundlePath: string): string {
  if (/^https?:\/\//.test(bundlePath)) {
    return bundlePath;
  }

  if (process.env.NODE_ENV === 'production') {
    if (typeof baseUrl !== 'undefined') {
      return joinComponents(baseUrl, bundlePath);
    }
    throw new Error(
      'Unable to determine the production URL where additional JavaScript chunks are hosted because the global "location" variable is not defined.',
    );
  } else {
    if (typeof baseUrl !== 'undefined') {
      return joinComponents(baseUrl, bundlePath);
    }
    throw new Error(
      'Unable to determine the development URL where additional JavaScript chunks are hosted because the global "location" variable is not defined.',
    );
  }
}
