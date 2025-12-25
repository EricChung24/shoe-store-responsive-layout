import js from "@eslint/js";
import globals from "globals";

export default [
  // 先套用 ESLint 官方推薦規則
  js.configs.recommended,

  // 你的專案規則
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser, // window / document / location ...
        ...globals.node     // 如果你有用到 node 腳本也不會報錯
      }
    },
    rules: {
      // 常見切版專案：先別太嚴苛，保持好用
      "no-console": "off",
      "no-debugger": "warn",
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }]
    }
  },

  // 讓 Prettier 不跟 ESLint 打架（你已安裝 eslint-config-prettier）
  {
    rules: {}
  }
];
