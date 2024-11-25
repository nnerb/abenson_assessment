const CallIcon = () => {
  return ( 
    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <rect y="0.5" width="20" height="20" fill="url(#pattern0_9070_922)"/>
      <defs>
      <pattern id="pattern0_9070_922" patternContentUnits="objectBoundingBox" width="1" height="1">
      <use xlinkHref="#image0_9070_922" transform="scale(0.0037037)"/>
      </pattern>
      <image id="image0_9070_922" width="270" height="270" xlinkHref="data:image/png;base64,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"/>
      </defs>
    </svg>

   );
}
 
export default CallIcon;