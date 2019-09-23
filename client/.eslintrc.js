module.exports = {
    env: {
        'browser': true,
        'commonjs': true,
        'es6': true,
        'node': true
    },
    plugins: [
        '@typescript-eslint',
        'react',
    ],
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'airbnb',
        'plugin:@typescript-eslint/recommended',
    ],
    settings: {
        // Append 'ts' extensions to Airbnb 'import/resolver' setting
        'import/resolver': {
            node: {
                extensions: ['.mjs', '.js', '.ts', 'tsx', '.json'],
            },
        },
        // Append 'ts' extensions to Airbnb 'import/extensions' setting
        'import/extensions': ['.js', '.ts', 'tsx', '.mjs'],
    },
    rules: {
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
        // '@typescript-eslint/indent': [
        //     'error',
        //     4,
        // ],
        // 'indent': [
        //     'error',
        //     4,
        // ],
        '@typescript-eslint/explicit-function-return-type': [
            'error',
        ],
        'react/jsx-filename-extension': [
            'error',
            {
                'extensions': [
                    '.js',
                    '.jsx',
                    '.tsx',
                    '.ts',
                ]
            },
        ],

    },
};
