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
    await fetch(enhancedUrl, { method: 'POST' })
  } catch (err) {
    throw new Error(err)
  }
}
