module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-preset-env': {
      stage: 2,
      features: {
        'nesting-rules': true,
        'custom-properties': false // On garde les variables CSS natives car le framework repose dessus (thèmes)
      }
    },
    'cssnano': {
      preset: 'default',
    },
  },
}
