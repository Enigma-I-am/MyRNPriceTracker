import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const FusdSvgComponent = (props: SvgProps) => (
  <Svg width={22} height={22} fill="none" {...props}>
    <Path
      opacity={0.2}
      d="M13 0C5.82 0 0 5.82 0 13s5.82 13 13 13 13-5.82 13-13S20.18 0 13 0Z"
      fill="#44DBF0"
    />
    <Path
      clipRule="evenodd"
      d="M12.631 5.128a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z"
      stroke="#44DBF0"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.716 15.943a.759.759 0 0 0 1.516-.001v-.7c0-.487.396-.883.884-.883h.39a.493.493 0 1 0 0-.985h-.78a.492.492 0 1 1-.001-.985h.78a.493.493 0 1 0 0-.985h-.725a.548.548 0 1 1 0-1.096h2.566a.654.654 0 0 0 0-1.308h-3.427c-.664 0-1.203.539-1.203 1.203v.843c0 .198-.16.358-.358.358a.358.358 0 0 0-.358.359v.268c0 .198.16.358.358.358.198 0 .358.16.358.358v.27c0 .197-.16.357-.357.357a.359.359 0 0 0-.359.36V14c0 .198.16.359.358.359.198 0 .358.16.358.357v1.226Z"
      fill="#44DBF0"
    />
  </Svg>
);
