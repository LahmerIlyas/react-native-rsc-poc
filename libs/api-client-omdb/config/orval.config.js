module.exports = {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  'OMDB App Client API': {
    input: './swagger.json',
    output: {
      client: 'react-query',
      override: {
        mutator: {
          name: 'customInstance',
          path: '../src/custom-instance.ts',
        },
        query: {
          useQuery: true,
        },
      },
      target: '../src/__generated__/omdb-app-client-api.ts',
    },
  },
  'OMDB Server Client API': {
    input: './swagger.json',
    output: {
      client: 'axios',
      override: {
        mutator: {
          name: 'customInstance',
          path: '../src/custom-instance.ts',
        },
      },
      target: '../src/__generated__/omdb-server-client-api.ts',
    },
  },

};
