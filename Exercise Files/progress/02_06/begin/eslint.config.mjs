import globals from "globals";
import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    languageOptions: {
        globals: {
            ...globals.node,
        },
    },
    rules: {
        "no-multiple-empty-lines": "warn",
        "no-var": "error",
        "prefer-const": "error",
    },
}];
