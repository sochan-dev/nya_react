import { createAsyncThunk } from '@reduxjs/toolkit'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppDispatch, AppThunk, RootState } from '..'

/*////////////////////////////////////////////////
  型宣言
/*/ ///////////////////////////////////////////////
//loadingStatusの初期値

export interface schedule {
  id: number
  title: string
  detail: string
  datetime: Date
  type_id: number
  channel_id: number
}

interface schedules {
  isLoading: false
  schedules: schedule[]
}
//テスト処理のAsyncThunk
type test = {
  test: String
}
/*////////////////////////////////////////////////
  stateの初期値
/*/ ///////////////////////////////////////////////
const initialState: schedules = {
  isLoading: false,
  schedules: []
}
/*////////////////////////////////////////////////
  createAsyncThunk
/*/ ///////////////////////////////////////////////
//テスト
export const testCreateAsyncThunk = createAsyncThunk<
  test,
  String,
  { dispatch: AppDispatch; state: RootState }
>('schedule/test', async (message, thunkApi) => {
  let a = message
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve((a += '完了'))
    }, 1000)
  )
  return { test: a }
})

/*////////////////////////////////////////////////
  createSlice
/*/ ///////////////////////////////////////////////
export const scheduleSlice = createSlice({
  name: 'schedules',
  initialState,
  //reducer
  reducers: {
    //読み込み中にする
    setSchedule: (state, action: PayloadAction<any>) => {
      state.schedules = action.payload
    }
  },
  //AsyncThunkを扱うreducer
  extraReducers: (builder) => {}
})
/*////////////////////////////////////////////////
  Actions
/*/ ///////////////////////////////////////////////
export const { setSchedule } = scheduleSlice.actions

/*////////////////////////////////////////////////
  Selector
/*/ ///////////////////////////////////////////////
export const getSchedule = (state: RootState): schedule[] =>
  state.schedule.schedules
export default scheduleSlice.reducer
