module.exports = {
    "env": {
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": "airbnb-base",
    "globals": {
        "Atomics": "readable",
        "SharedArrayBuffer": "readable"
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
      "class-methods-use-this": "off",
      "camelcase": "off"
    }
};
