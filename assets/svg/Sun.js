import * as React from "react"
import Svg, {
  G,
  Rect,
  Path,
  Defs,
  LinearGradient,
  Stop
} from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function Sun(props) {
  return (
    <Svg
      width={394}
      height={380}
      viewBox="0 0 394 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G filter="url(#filter0_f_1_49)">
        <Rect x={77} y={77} width={240} height={226} rx={94} fill="#FFEF9A" />
      </G>
      <G filter="url(#filter1_i_1_49)">
        <Path
          d="M303 190c0 59.094-47.458 107-106 107S91 249.094 91 190 138.458 83 197 83s106 47.906 106 107z"
          fill="url(#paint0_linear_1_49)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_1_49"
          x1={180.899}
          y1={248.241}
          x2={269.356}
          y2={94.5502}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#F90" />
          <Stop offset={1} stopColor="#FFEE94" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default Sun
