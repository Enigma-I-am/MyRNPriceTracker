import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const CusdSvgComponent = (props: SvgProps) => (
  <Svg width={22} height={22} fill="none" {...props}>
    <Path
      opacity={0.2}
      d="M21.93 10.995c0 6.04-4.896 10.937-10.937 10.937-6.04 0-10.937-4.896-10.937-10.937C.056 4.955 4.953.058 10.993.058c6.04 0 10.937 4.897 10.937 10.937Z"
      fill="#00A478"
    />
    <Path
      d="M15.4 14.615A6 6 0 1 1 9.944 6l.014 1.538a4.462 4.462 0 1 0 4.058 6.407l1.384.67Z"
      fill="#00A478"
    />
    <Path
      d="M13.65 12.818V4.636h.524v8.182h-.524Zm1.64-5.644a.934.934 0 0 0-.423-.703c-.247-.168-.558-.253-.933-.253-.268 0-.5.043-.697.128a1.072 1.072 0 0 0-.457.345.815.815 0 0 0-.16.496c0 .155.037.29.109.402a.976.976 0 0 0 .29.285c.122.075.252.137.39.189.14.049.272.089.4.12l.64.167c.208.051.422.12.642.208.22.087.423.202.61.345.188.143.34.32.454.53.117.212.176.464.176.758 0 .37-.096.7-.288.988-.19.287-.465.514-.827.68-.36.167-.796.25-1.308.25-.49 0-.914-.078-1.272-.234a1.959 1.959 0 0 1-.84-.661 1.918 1.918 0 0 1-.336-1.023h.991c.02.237.096.434.23.591.137.156.31.272.521.349.213.074.446.111.7.111.28 0 .527-.043.745-.13.22-.09.392-.214.517-.371a.879.879 0 0 0 .189-.56.686.686 0 0 0-.166-.476 1.228 1.228 0 0 0-.444-.307 4.337 4.337 0 0 0-.63-.214l-.774-.21c-.524-.143-.94-.353-1.246-.63-.305-.277-.457-.644-.457-1.1 0-.377.102-.706.307-.987.204-.281.481-.5.83-.655.35-.158.744-.237 1.183-.237.444 0 .835.078 1.173.233.341.156.61.37.806.643.196.27.298.581.306.933h-.952Z"
      fill="#00A478"
    />
  </Svg>
);