module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
    },
    plugins: ['@typescript-eslint', 'react'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    extends: [
        'plugin:react/recommended',
        // 'airbnb',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'prettier/react',
    ],
    settings: {
        'react': {
            'version': 'detect',
        },
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
        'react/jsx-filename-extension': [
            'error',
            {
                extensions: ['.js', '.jsx', '.tsx', '.ts'],
            },
        ],
        // 'import/prefer-default-export': 0,
    },
};
