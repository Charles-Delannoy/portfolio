export const breakpoints = {
  sPhone: 320,
  mPhone: 375,
  phone: 414,
  tab: 1024
}

export const mediaQueries = key => {
  return style => `@media (max-width: ${breakpoints[key]}px) { ${style} }`
}
