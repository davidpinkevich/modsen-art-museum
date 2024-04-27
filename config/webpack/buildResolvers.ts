import { Configuration } from "webpack";
import { BuildOptions } from "@/types/webpackTypes";

export function buildResolvers(
  options: BuildOptions
): Configuration["resolve"] {
  return {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@assets": options.paths.assets,
      "@components": options.paths.components,
      "@constants": options.paths.constants,
      "@pages": options.paths.pages,
      "@utils": options.paths.utils,
      "@types": options.paths.types
    }
  };
}
