'use strict';

module.exports = {
  'extends': 'stylelint-config-standard',
  'plugins': ['stylelint-order', 'stylelint-scss'],
  'rules': {
    'at-rule-blacklist': ['debug'],
    'at-rule-no-unknown': null,
    'at-rule-no-vendor-prefix': true,
    'color-named': 'never',
    'comment-empty-line-before': 'always',
    'declaration-block-no-duplicate-properties': true,
    'declaration-block-no-redundant-longhand-properties': true,
    'declaration-block-semicolon-newline-after': 'always',
    'font-family-name-quotes': 'always-unless-keyword',
    'font-weight-notation': 'numeric',
    'function-parentheses-space-inside': 'never',
    'function-url-quotes': 'always',
    'indentation': 2,
    'max-line-length': 120,
    'max-nesting-depth': 5,
    'media-feature-name-no-vendor-prefix': true,
    'no-unknown-animations': true,
    'number-max-precision': 2,
    'order/properties-alphabetical-order': true,
    'property-no-vendor-prefix': null,
    'scss/at-extend-no-missing-placeholder': true,
    'scss/at-function-pattern': '^[a-z]+([a-z0-9-]+[a-z0-9]+)?$',
    'scss/at-mixin-pattern': '^[a-z]+([a-zA-Z0-9-]+[a-zA-Z0-9]+)?$',
    'scss/dollar-variable-colon-space-after': 'always',
    'scss/dollar-variable-colon-space-before': 'never',
    'scss/dollar-variable-pattern': '^[_]?[a-z]+([a-z0-9-]+[a-z0-9]+)?$',
    'scss/percent-placeholder-pattern': '^[a-z]+([a-z0-9-]+[a-z0-9]+)?$',
    'scss/selector-no-redundant-nesting-selector': true,
    'selector-class-pattern': [
      '^[a-z0-9\\-]+(__[a-z0-9\\-]*[a-z0-9])*(--[a-z0-9\\-]+)?$',
      {
        'message': 'Selector should be written in lowercase with hyphens (selector-class-pattern)'
      }
    ],
    'selector-max-compound-selectors': 5,
    'selector-max-id': 1,
    'selector-no-qualifying-type': [
      true,
      {
        'ignore': ['class']
      }
    ],
    'selector-no-vendor-prefix': true,
    'shorthand-property-no-redundant-values': true,
    'string-quotes': 'single',
    'value-keyword-case': 'lower',
    'value-list-comma-newline-after': null,
    'value-no-vendor-prefix': true
  }
};