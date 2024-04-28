export interface BuildPaths {
  entry: string;
  html: string;
  output: string;
  src: string;
  assets: string;
  services: string;
  components: string;
  constants: string;
  pages: string;
  utils: string;
  styles: string;
}

export type BuildMode = "production" | "development";

export interface BuildOptions {
  port: number;
  paths: BuildPaths;
  mode: BuildMode;
}
