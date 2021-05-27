import { createAsyncThunk } from '@reduxjs/toolkit'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppDispatch, AppThunk, RootState } from '../../stores'
import axios, { AxiosResponse } from 'axios'

/*////////////////////////////////////////////////
  型宣言
/*/ ///////////////////////////////////////////////
//loadingStatusの初期値
interface authStatus {
  isLoading: boolean
  errorMessage: string
}
//login関数の戻り値(成功)
type successResponse = {
  result: {
    token: String
    user_id: string
  }
}
//login関数の戻り値(失敗)
type failedResponse = {
  error: {
    id: { code: string; message: string } | {}
    password: { code: string; message: string } | {}
  }
}
//仮の型
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

/*////////////////////////////////////////////////
  stateの初期値
/*/ ///////////////////////////////////////////////
const initialState: authStatus = {
  isLoading: false,
  errorMessage: 'okokokokok'
}
/*////////////////////////////////////////////////
  createAsyncThunk
/*/ ///////////////////////////////////////////////
//ログイン
/*
export const tlogin = createAsyncThunk<
  AxiosResponse<successResponse | failedResponse>,
  { user_id: String; password: String },
  { dispatch: AppDispatch; state: RootState }
>('authStatus/login', async (inputInfo, thunkApi) => {
  const res = await axios.post<failedResponse | successResponse>('', '')

  if (res.data.result) {
  }

  return res
})
*/

//型不完全。仮実装。
export const login = createAsyncThunk<
  AxiosResponse<response>,
  { user_id: String; password: String },
  { dispatch: AppDispatch; state: RootState }
>('authStatus/login', async (inputInfo, thunkApi) => {
  const res = await axios.post<response>('', '')
  return res
})

/*////////////////////////////////////////////////
  createSlice
/*/ ///////////////////////////////////////////////
export const authStatusSlice = createSlice({
  name: 'authStatus',
  initialState,
  //reducer
  reducers: {
    //読み込み中にする
    switchLoading: (state, action: PayloadAction<string>) => {
      state.isLoading = true
    }
  },
  //AsyncThunkを扱うreducer
  extraReducers: (builder) => {
    //login関数
    builder.addCase(login.fulfilled, (state, action) => {
      if (action.payload.data.error) {
        state.errorMessage = 'idまたはパスワードが違います。'
        return
      }
      state.isLoading = false
    })
    builder.addCase(login.pending, (state, action) => {
      state.isLoading = true
    })
  }
})
/*////////////////////////////////////////////////
  Actions
/*/ ///////////////////////////////////////////////
export const { switchLoading } = authStatusSlice.actions

/*////////////////////////////////////////////////
  Selector
/*/ ///////////////////////////////////////////////
export const getAuthStatus = (state: RootState): authStatus => state.authStatus

//エクスポート
export default authStatusSlice.reducer
