import axios from 'axios'
import Router from 'next/router'
type params = {
  user_id: string
  password: string
}

type response = {
  result?: {
    token: string
    user_id: string
  }
  error?: {
    id: { code: string; message: string } | {}
    password: { code: string; message: string } | {}
  }
}

export const login = async (id: string, password: string): Promise<void> => {
  const url = 'https://qiita.com/api/v2/items'
  try {
    const req: params = {
      user_id: id,
      password: password
    }
    const res = await axios.post<response>(url, req)
    if (res.data.error) {
      console.log('エラー')
      return
    }
    const token = res.data.result.token
    document.cookie = encodeURIComponent(`nya-token=${token}`)
    Router.push('/')
  } catch (e) {
    console.log('error')
  }
}
