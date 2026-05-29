import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import cypress from "eslint-plugin-cypress";
import jest from "eslint-plugin-jest";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.browser } },
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { files: ["cypress/**/*.js"], extends: [cypress.configs.recommended] },
  { files: ["**/__tests__/*.js", "test-utils/*.js"], plugins: { jest }, languageOptions: { globals: jest.environments.globals.globals } },
  { files: ["**/__tests__/*.js", "test-utils/*.js"], plugins: { jest }, languageOptions: { globals: globals.node } }
]);
