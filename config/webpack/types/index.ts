export interface BuildPaths {
  entry: string;
  html: string;
  output: string;
  assets: string;
  components: string;
  constants: string;
  pages: string;
  utils: string;
  types: string;
  styles: string;
}

export type BuildMode = "production" | "development";

export interface BuildOptions {
  port: number;
  paths: BuildPaths;
  mode: BuildMode;
}
