/**
 * TS 的定义声明： *.d.ts 文件
 * 该文件只包含类型声明，不包含逻辑
 * 不会被编译、也不会被 webpack 打包
 */
declare module "*.css" {
  const css: { [key: string]: string }
  export default css;
}