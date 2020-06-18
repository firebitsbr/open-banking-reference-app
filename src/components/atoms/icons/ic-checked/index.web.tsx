/* Generated by scripts/convert-svg from src/assets/icons/ic-checked.svg */
import * as React from 'react'
import { IconProps } from '../common'

const Checked = (props: IconProps): JSX.Element => (
  <svg width={24} height={24} viewBox="0 0 24 24" {...props}>
    <defs>
      <path
        id="prefix__a"
        d="M21.14 4.225l-8.74 8.65-4.8-4.75L4 11.688 12.4 20 23.6 8.917c.261.983.4 2.017.4 3.083 0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0c3.661 0 6.94 1.64 9.14 4.225z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="prefix__b" fill="#fff">
        <use xlinkHref="#prefix__a" />
      </mask>
      <use fill="#029FD6" fillRule="nonzero" xlinkHref="#prefix__a" />
      <g fill="#029FD6" fillRule="nonzero" mask="url(#prefix__b)">
        <path d="M-23-30h86v76h-86z" />
      </g>
    </g>
  </svg>
)

export default Checked