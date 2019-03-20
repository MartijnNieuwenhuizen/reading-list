export const get = async url => {
  try {
    const response = await fetch(url, { method: 'GET' })
    return await response.json()
  } catch (err) {
    return []
  }
}

export const post = async (url, payload) => {
  const enhancedUrl = `${url}?articleData=${encodeURIComponent(payload)}`

  try {
    return await fetch(enhancedUrl, { method: 'POST' })
  } catch (err) {
    return err
  }
}
