/**
 * @description 
 * @since Friday, 3 12th 2021, 11:21:32 am
 * @author Nguyễn Trung Hiếu <nguyentrunghieu@getflycrm.com>
 * @copyright Copyright (c) 2021, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write chanelog>
 */


 import commonjs from "@rollup/plugin-commonjs";
 import resolve from "@rollup/plugin-node-resolve";
 import peerDepsExternal from "rollup-plugin-peer-deps-external";
 import typescript from "rollup-plugin-typescript2";
 import postcss from "rollup-plugin-postcss";
 import image from 'rollup-plugin-image';
 
 import packageJson from "./package.json";
 
 // eslint-disable-next-line import/no-anonymous-default-export
 export default {
	input: "./src/index.tsx",
	output: [
		{
		file: packageJson.main,
		format: "cjs",
		sourcemap: true
		},
		{
		file: packageJson.module,
		format: "esm",
		sourcemap: true
		}
	],
	plugins: [peerDepsExternal(), resolve(), commonjs(), typescript(), postcss(), image()]
};