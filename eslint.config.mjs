import { FlatCompat } from '@eslint/eslintrc'
import prettierPluginConfig from 'eslint-plugin-prettier/recommended'
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const nextConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
]

const simpleImportSortConfig = [
  {
    plugins: {
      'simple-import-sort': simpleImportSortPlugin,
    },
    rules: {
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': 'error',
    },
  },
]

const prettierConfig = [prettierPluginConfig]

export default [...nextConfig, ...simpleImportSortConfig, ...prettierConfig]
