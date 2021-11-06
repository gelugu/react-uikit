import babel from "rollup-plugin-babel";
import external from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import typescript from "@rollup/plugin-typescript";

export default [
  {
    input: "./src/lib.ts",
    output: {
      file: "lib/index.js",
      format: "es",
    },
    plugins: [
      babel({
        exclude: "node_modules/*",
        presets: ["@babel/preset-react"],
      }),
      external(),
      terser(),
      typescript({ tsconfig: "./tsconfig.lib.json" }),
    ],
  },
];
