import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
import prettierPluginConfig from 'eslint-plugin-prettier/recommended'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const nextConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
]

const prettierConfig = [prettierPluginConfig]

export default [...nextConfig, ...prettierConfig]
