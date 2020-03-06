module.exports = {
  extends: [
    'stylelint-config-rational-order',
    'stylelint-order',
    'stylelint-config-rational-order',
    'stylelint-config-prettier',
  ],
  plugins: [
    'stylelint-prettier',
    'stylelint-order',
    'stylelint-config-rational-order/plugin',
  ],
};
