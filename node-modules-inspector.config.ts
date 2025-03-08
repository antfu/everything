import { defineConfig } from 'node-modules-inspector'

export default defineConfig({
  name: '@antfu/everything',
  defaultFilters: {
    sourceType: 'prod',
    excludeWorkspace: true,
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
    'netlify-plugin-cache',
    'lint-staged',
    'simple-git-hooks',
  ],
  publint: true,
})
