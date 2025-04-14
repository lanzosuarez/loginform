/* eslint-disable @typescript-eslint/no-empty-object-type */

import type { CSSProp } from "styled-components";
import { type Theme } from "./components/theme";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}

declare module "react" {
  interface DOMAttributes {
    css?: CSSProp;
  }
}
