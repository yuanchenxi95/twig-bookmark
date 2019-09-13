module.exports =  {
  plugins: ['node'],
  parser:  '@typescript-eslint/parser',  // Specifies the ESLint parser
  extends:  [
    'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'airbnb-typescript',
  ],
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  parserOptions:  {
    ecmaVersion:  2018,  // Allows for the parsing of modern ECMAScript features
    sourceType:  'module',  // Allows for the use of imports
  },
  rules: {
    // '@typescript-eslint/no-parameter-properties': [
    //   'error',
    //   {
    //     allows: ['readonly', 'private readonly', 'public readonly']
    //   }
    // ],
    '@typescript-eslint/no-parameter-properties': [
      'off',
    ],
    '@typescript-eslint/explicit-member-accessibility': [
      'off',
    ],
    'object-curly-newline': [
      'error',
      {
        // 'ObjectExpression': { 'multiline': true, 'minProperties': 3 },
        // 'ObjectPattern': { 'multiline': true, 'minProperties': 3 },
        // 'ObjectExpression': 'always',
        // 'ObjectPattern': 'always',
        'ImportDeclaration': { 'multiline': true, 'minProperties': 3 },
        'ExportDeclaration': { 'multiline': true, 'minProperties': 3 },
      },
    ],
    'object-property-newline': [
      'error',
      {
        'allowAllPropertiesOnSameLine': false,
      },
    ],
    'import/prefer-default-export': [
      'off',
    ],
    'class-methods-use-this': [
      'off',
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        'args': 'all',
      }
    ],
    'no-useless-constructor': [
      'off',
    ],
    'no-empty-function': [
      'error',
      {
        'allow': [ 'constructors' ],
      }
    ],
    'max-len': [
      'error',
      { 'code': 120 },
    ],
    '@typescript-eslint/indent': [
      'error',
      4,
    ],
  },
};
