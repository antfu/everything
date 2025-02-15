import { defineConfig } from 'node-modules-inspector'

export default defineConfig({
  excludeDependenciesOf: [
    'eslint',
    'webpack',
  ],
})
