import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const BusdSvgComponent = (props: SvgProps) => (
  <Svg width={22} height={22} fill="none" {...props}>
    <Path
      opacity={0.2}
      d="M10.995 21.99c6.072 0 10.995-4.923 10.995-10.995C21.99 4.923 17.067 0 10.995 0 4.923 0 0 4.923 0 10.995 0 17.067 4.923 21.99 10.995 21.99Z"
      fill="#F3BA2F"
    />
    <Path
      fill="#F3BA2F"
      d="m4 11 1.498-1.498 1.748 1.748-1.498 1.498zM10.993 4.007 5.998 9.002l1.748 1.748 4.995-4.995zM13.323 6.338l-6.992 6.993 1.748 1.748 6.992-6.993zM15.654 8.67l-6.992 6.992 1.748 1.748 6.992-6.993z"
    />
  </Svg>
);
