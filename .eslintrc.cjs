/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
	'vue/no-multiple-template-root': 0,
  'vue/html-indent': ['error', 2],
  'vue/script-indent': ['error', 2],
  'vue/max-len': [
    'error',
    {
      code: 120,
      ignoreUrls: true,
      tabWidth: 2,
      comments: 120,
      ignoreTrailingComments: true,
      ignoreTemplateLiterals: true,
      ignorePattern: '^\\s*const\\s.+=\\s*require\\s*\\(',
      ignoreHTMLTextContents: true,
      ignoreHTMLAttributeValues: true,
      ignoreStrings: true
    }
  ],
  'vue/multi-word-component-names': 'off',
  'vue/valid-v-slot': [
    'error',
    {
      allowModifiers: true
    }
  ],
  // 'vue/component-name-in-template-casing': ['error', 'PascalCase', {
  'vue/component-name-in-template-casing': ['error', 'PascalCase', {
    registeredComponentsOnly: true,
    ignores: []
  }],
  'vue/html-closing-bracket-newline': 'error',
  'vue/padding-lines-in-component-definition': [
    'error',
    {
      betweenOptions: 'always'
    }
  ],
  'vue/component-tags-order': ['error', {
    order: [['script', 'template'], 'style']
  }]
  }
}
