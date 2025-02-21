import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

const config = [
  {
    ...eslintConfig,
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_', // Игнорировать переменные, начинающиеся с "_"
          varsIgnorePattern: '^_', // Игнорировать переменные, начинающиеся с "_"
          ignoreRestSiblings: true, // Игнорировать остаточные переменные
        },
      ],
    },
  },
];

export default config;