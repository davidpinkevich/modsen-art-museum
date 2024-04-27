import { Configuration } from "webpack";
import { BuildOptions } from "./types";

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
      "@utils ": options.paths.pages
    }
  };
}
