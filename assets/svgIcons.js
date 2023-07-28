export const FishCatSVG = (props) => (
  <svg
    preserveAspectRatio="xMidYMax meet"
    // xmlns="http://www.w3.org/2000/svg"
    // width={274}
    // height={1834}
    fill="none"
    {...props}>
    <g filter="url(#a)">
      <path
        stroke="#EE1A1A"
        strokeWidth={5}
        d="m124.297 1 2.5 557.357C137.297 567.69 139.5 591 89.329 619.5L62 639.996 22.797 599.5 19.5 692c18.833-34 75.969-98.427 154.5-94.5 20 1 42.5 7.5 42.5 7.5 16.833 7.167 47.597 21.1 50.797 41.5 4 25.5-91.5 75-143 43-15.667-7.167-42.3-13.6-23.5 18 18.8 31.6 23.5 47.167 23.5 51v954m0 0c-18 17.33-50 59.8-34 91-3.167 7.33-11.3 21.4-18.5 19-23.333 4-68.9-3.9-64.5-67.5.326-11.88 11.176-34.23 51.56-30.79m65.44-11.71c5.833-5 18.4-19.3 22-36.5 4.5-21.5 11.5-27.5 9-63.5-2-28.8 28.833-33.67 44.5-32.5-1.667 8.5-.5 25.1 17.5 23.5 8 1.5 24.7 6.3 27.5 13.5 3.5 9 11.5 17.5 0 43.5l-26 1.5-1.5 92c-.5 9.83.6 31.2 9 38 6.667-1.17 20.3-.1 21.5 13.5v17l-47.5-1.5c2.833-6.17 3.9-20.6-14.5-29m-126.94-67.79c.963.08 1.943.18 2.94.29 42.8 4.8 15.873 1.81-2.94-.29Zm0 0c10.313-9.24 23.34-31.81-7.06-48.21m134 116h-61.5m61.5 0-9-49.5M207 636.5h-1.5a7 7 0 1 1 0-14h1.5a7 7 0 1 1 0 14Z"
        shapeRendering="crispEdges"
      />
    </g>
    <defs>
      <filter
        id="a"
        width={273.419}
        height={1832.87}
        x={0.501}
        y={0.989}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse">
        <feFlood
          floodOpacity={0}
          result="BackgroundImageFix"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite
          in2="hardAlpha"
          operator="out"
        />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_101_25"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_101_25"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)
