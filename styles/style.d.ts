import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      black: string;
      blue: string;
      red: string;
      white: string;
    };
  }
}
