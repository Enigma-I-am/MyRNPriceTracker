import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const NgnSvgComponent = (props: SvgProps) => (
  <Svg width={22} height={22} fill="none" {...props}>
    <Path
      opacity={0.2}
      d="M21.93 10.995c0 6.04-4.896 10.937-10.937 10.937-6.04 0-10.937-4.896-10.937-10.937C.056 4.955 4.953.058 10.993.058c6.04 0 10.937 4.897 10.937 10.937Z"
      fill="#00A478"
    />
    <Path
      d="M14.058 6.273V15h-1.594L8.668 9.507h-.064V15H6.759V6.273h1.619l3.767 5.488h.077V6.273h1.836Z"
      fill="#fff"
    />
    <Path d="M5 9.125h11.003M5 11.125h11.003" stroke="#fff" strokeWidth={1.5} />
  </Svg>
);
