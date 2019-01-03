const stripTrailingSlash = string => {
  return string.replace(/\/$/, '')
}

export default stripTrailingSlash
