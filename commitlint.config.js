module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'references-empty': [2, 'never'],
    'subject-case': [0, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'chore',
        'minor',
        'major',
      ],
    ],
  },
  parserPreset: {
    parserOpts: {
      issuePrefixes: ['#'],
    },
  },
};
