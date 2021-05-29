export const getToken = (): string | false => {
  let token = ''
  const cookies = document.cookie.split(';')
  for (const c of cookies) {
    const cookie = c.split('%3D')
    if (cookie[0] == 'nya-token') token = cookie[1]
  }
  return token !== '' ? token : false
}

export const setToken = (value: string): void => {
  document.cookie = encodeURIComponent(`nya-token=${value} max-age=172800;`)
  return
}

export const deleteToken = (): void => {
  document.cookie = 'key=nya-token; max-age=0'
}
