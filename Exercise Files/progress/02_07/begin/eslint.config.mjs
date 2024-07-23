import js from "@eslint/js";
import globals from "globals";
import { includeIgnoreFile } from "@eslint/compat";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const eslintIgnorePath = path.resolve(__dirname, ".eslintignore");

export default [
  js.configs.recommended,
  includeIgnoreFile(eslintIgnorePath),
  {
    languageOptions: {
        globals: {
            ...globals.node,
        },
    },

    rules: {
        "no-empty": "error",
        "no-multiple-empty-lines": "warn",
        "no-var": "error",
        "prefer-const": "error"
    },
}];
