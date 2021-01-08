export const breakpoints = {
  phone: 414,
  tab: 1024
}

export const mediaQueries = key => {
  return style => `@media (max-width: ${breakpoints[key]}px) { ${style} }`
}
