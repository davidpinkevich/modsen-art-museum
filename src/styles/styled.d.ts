import { type TypesTheme } from "@src/types";

import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme extends TypesTheme {}
}
