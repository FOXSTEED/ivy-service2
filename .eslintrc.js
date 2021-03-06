/**
 * These rules enforce the Hack Reactor Style Guide
 *
 * Visit this repo for more information:
 *   https://github.com/reactorcore/eslint-config-hackreactor
 */

module.exports = {
  "extends": 'airbnb',
  rules: {
    "no-console": "off",
    "no-undef": "off",
    "react/prop-types": "off",
    "const database = require('../database/data');": "off"
   // "indent": "off"
  }
};