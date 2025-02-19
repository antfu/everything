import { defineConfig } from 'node-modules-inspector'

export default defineConfig({
  name: '@antfu/everything',
  defaultFilters: {
    'source-type': 'prod',
    'exclude-workspace': true,
  },
  defaultSettings: {
    showPublishTimeBadge: true,
    showInstallSizeBadge: true,
    showFileComposition: true,
  },
  excludeDependenciesOf: [
    'eslint',
    'webpack',
    'jsdom',
    '@typescript-eslint/eslint-plugin',
    '@typescript-eslint/utils',
    '@vercel/nft',
  ],
  excludePackages: [
    'typescript',
    'pnpm',
  ],
})
