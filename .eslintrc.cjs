module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  extends: ['@nuxt/eslint-config'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaVersion: 2020
  },
  parser: 'vue-eslint-parser',
  plugins: [
    'vue'
  ],
  rules: {
    'object-curly-spacing': ['error', 'always'],
    'no-multiple-empty-lines': 'error',
    'space-infix-ops': 'error',
    'arrow-spacing': 'error',
    quotes: ['error', 'single'],
    indent: ['error', 2],
    camelcase: 'off',
    'no-undef': 'off',
    'vue/max-attributes-per-line': ['error', {
      singleline: 3,
      multiline: {
        max: 2
      }
    }],
    'vue/attribute-hyphenation': 'off',
    'vue/multi-word-component-names': 0,
    'vue/html-indent': 'off',
    'vue/html-self-closing': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'prefer-const': 'off',
    'space-before-function-paren': 'off',
    'no-use-before-define': 'off',
    'no-unreachable-loop': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off'
  }
}
  