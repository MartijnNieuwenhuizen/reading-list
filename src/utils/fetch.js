export const get = async url => {
  try {
    const response = await fetch(url, { method: 'GET' })
    return await response.json()
  } catch (err) {
    console.log('err: ', err)
    return []
  }
}

export const post = async (url, payload) => {
  try {
    const response = await fetch(url, { method: 'GET' })
    return await response.json()
  } catch (err) {
    console.log('err: ', err)
    return []
  }
}
