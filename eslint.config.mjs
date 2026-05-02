import nextVitals from "eslint-config-next/core-web-vitals";
import prettier from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import unusedImports from "eslint-plugin-unused-imports";

const eslintConfig = [
  {
    ignores: [".next/**", "out/**", "node_modules/**", "next-env.d.ts"],
  },
  ...nextVitals,
  prettier,
  {
    plugins: {
      import: importPlugin,
      "simple-import-sort": simpleImportSort,
      "unused-imports": unusedImports,
    },
    rules: {
      "import/first": "error",
      "import/newline-after-import": "error",
      "import/no-duplicates": "error",
      "simple-import-sort/exports": "error",
      "simple-import-sort/imports": "error",
      "unused-imports/no-unused-imports": "error",
    },
  },
];

export default eslintConfig;
