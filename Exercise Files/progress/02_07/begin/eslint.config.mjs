import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
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
        "prefer-const": "error",
    },
}];
