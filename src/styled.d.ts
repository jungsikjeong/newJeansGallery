// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    bgColor: string;
    transparentWhite: string;
    darkColor: string;
    accentColor: string;
    dullGray: string;
    tomatoColor: string;
  }
}
