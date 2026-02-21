import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import nextPlugin from "@next/eslint-plugin-next";

// Clean globals to remove any trailing/leading whitespace
const cleanGlobals = (globs) => {
   return Object.fromEntries(Object.entries(globs).map(([key, value]) => [key.trim(), value]));
};

export default tseslint.config(
   { ignores: ["dist", ".next", "node_modules"] },
   {
      extends: [js.configs.recommended, ...tseslint.configs.recommended],
      files: ["**/*.{ts,tsx}"],
      languageOptions: {
         ecmaVersion: 2020,
         globals: {
            ...cleanGlobals(globals.browser),
            ...cleanGlobals(globals.node),
         },
      },
      plugins: {
         "react-hooks": reactHooks,
         "react-refresh": reactRefresh,
         "@next/next": nextPlugin,
      },
      rules: {
         ...reactHooks.configs.recommended.rules,
         "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
         "react-hooks/exhaustive-deps": "off",
         "no-prototype-builtins": "off",
         "no-unsafe-optional-chaining": "off",
         "no-empty": "off",
         "no-console": 2,
         ...(nextPlugin.configs?.recommended?.rules || {}),
         ...(nextPlugin.configs?.["core-web-vitals"]?.rules || {}),
         "@next/next/no-html-link-for-pages": "off",
         "@next/next/no-img-element": "off",
      },
   }
);
