import type { Config } from "jest";

const config: Config = {
  testMatch: ["<rootDir>/**/*.spec.{ts,tsx}"],
  preset: "ts-jest",
  testEnvironment: "jest-fixed-jsdom",
  transform: {
    "^.+\\.(ts|tsx)$": [
      "@swc/jest",
      {
        jsc: {
          parser: {
            syntax: "typescript",
            decorators: true,
            tsx: true,
          },
          target: "es2020",
          transform: {
            legacyDecorator: true,
            react: {
              runtime: "automatic",
            },
          },
        },
        isModule: true,
      },
    ],
  },
  moduleDirectories: ["node_modules", "src"],
  roots: ["<rootDir>"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
};

export default config;
