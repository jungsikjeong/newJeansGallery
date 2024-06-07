// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    darkColor: string;
    bgColor: string;
    accentColor: string;
  }
}
