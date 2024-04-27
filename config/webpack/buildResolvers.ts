import { Configuration } from "webpack";
import { BuildOptions } from "./types";

export function buildResolvers(
  options: BuildOptions
): Configuration["resolve"] {
  return {
    alias: {
      "@assets": options.paths.assets,
      "@components": options.paths.components,
      "@styles": options.paths.styles,
      "@constants": options.paths.constants,
      "@pages": options.paths.pages,
      "@utils": options.paths.utils,
      "@types": options.paths.types
    },
    extensions: [".tsx", ".ts", ".js"]
  };
}
