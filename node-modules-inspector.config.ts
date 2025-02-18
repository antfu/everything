import { defineConfig } from 'node-modules-inspector'

export default defineConfig({
  name: '@antfu/everything',
  defaultFilters: {
    'source-type': 'prod',
    'exclude-workspace': true,
  },
  excludeDependenciesOf: [
    'eslint',
    'webpack',
  ],
  excludePackages: [
    'typescript',
  ],
})
