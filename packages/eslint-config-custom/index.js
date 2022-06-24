module.exports = {
  extends: ['next', 'prettier', 'airbnb', 'plugin:storybook/recommended'],
  plugins: ['prettier'],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    'react/jsx-key': 'off',
    'prettier/prettier': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.stories.tsx',
          '**/*.@(spec|test).@(js|ts)?(x)',
          '**/jest.setup.ts',
          '**/.storybook/*.@(js|ts)?(x)',
          '**/webpack.*.js',
          '**/script/*.js',
          '**/mocks/**/*.@(js|ts)?(x)',
        ],
      },
    ],
    semi: 0,
    'comma-dangle': 'off',
    'no-new': 0,
    'import/extensions': 'off',
    'unicorn/number-literal-case': 'off',
    'object-curly-newline': 0,
    'import/prefer-default-export': 'off',
    'no-shadow': ['error', { allow: ['state', 'getters'] }],
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'acc', // for reduce accumulators
          'e', // for e.returnvalue
          'ctx', // for Koa routing
          'req', // for Express requests
          'request', // for Express requests
          'res', // for Express responses
          'response', // for Express responses
          '$scope', // for Angular 1 scopes
          'state', // for vuex variables
          'config', // for axios interceptor
        ],
      },
    ],
  },
  overrides: [
    {
      // or whatever matches stories specified in .storybook/main.js
      files: ['*.stories.@(ts|tsx|js|jsx|mjs|cjs)'],
      rules: {
        // example of overriding a rule
        'storybook/hierarchy-separator': 'error',
        // example of disabling a rule
        'storybook/default-exports': 'off',
      },
    },
  ],
};
