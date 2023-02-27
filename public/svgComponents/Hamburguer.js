import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={62}
    height={42}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x={8} y={8} width={46} height={6} rx={3} fill="#000" />
    <rect x={8} y={18} width={38} height={6} rx={3} fill="#000" />
    <rect x={8} y={28} width={46} height={6} rx={3} fill="#000" />
  </svg>
)

export default SvgComponent
