'use strict';

const init = require('eslint-config-metarhia');

init[0].rules['prefer-rest-params'] = 'off';
init[0].rules['no-extra-parens'] = 'off';

module.exports = init;
