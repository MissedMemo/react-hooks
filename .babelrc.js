const isTest = String(process.env.NODE_ENV) === 'test'
const isProduction = String(process.env.NODE_ENV) === 'production'

module.exports = {
  "presets": [
    "@babel/preset-react",
    [ "@babel/preset-env", {
      "loose": true,
      "modules": isTest ? 'commonjs' : false,
      //"debug": true
    }]
  ],
  "plugins": [
    isProduction ? "emotion" : ["emotion", {"sourceMap": true}],
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-syntax-dynamic-import"
  ]
}