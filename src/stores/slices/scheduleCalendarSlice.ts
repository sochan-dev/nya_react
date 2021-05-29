import { createAsyncThunk } from '@reduxjs/toolkit'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppDispatch, AppThunk, RootState } from '../../stores'

/*////////////////////////////////////////////////
  型宣言
/*/ ///////////////////////////////////////////////
//loadingStatusの初期値
interface scheduleCalendar {
  isLoading: boolean
  isSuccess: boolean
  isError: String
  testMessage: String
}
//テスト処理のAsyncThunk
type test = {
  test: String
}
/*////////////////////////////////////////////////
  stateの初期値
/*/ ///////////////////////////////////////////////
const initialState: scheduleCalendar = {
  isLoading: false,
  isSuccess: false,
  isError: '',
  testMessage: 'hello AsyncThunk'
}
/*////////////////////////////////////////////////
  createAsyncThunk
/*/ ///////////////////////////////////////////////
//テスト
export const testCreateAsyncThunk = createAsyncThunk<
  test,
  String,
  { dispatch: AppDispatch; state: RootState }
>('scheduleCalendar/test', async (message, thunkApi) => {
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
export const scheduleCalendarSlice = createSlice({
  name: 'scheduleCalendar',
  initialState,
  //reducer
  reducers: {
    //読み込み中にする
    switchLoading: (state, action: PayloadAction<string>) => {
      console.log('switchLoading')
      state.isLoading = true
      state.isSuccess = false
      state.isError = ''
      state.testMessage = action.payload + 'Action成功'
    }
  },
  //AsyncThunkを扱うreducer
  extraReducers: (builder) => {
    builder.addCase(testCreateAsyncThunk.fulfilled, (state, action) => {
      state.testMessage = action.payload.test
    })
    builder.addCase(testCreateAsyncThunk.pending, (state, action) => {
      state.testMessage = '読み込み中'
    })
  }
})
/*////////////////////////////////////////////////
  Actions
/*/ ///////////////////////////////////////////////
export const { switchLoading } = scheduleCalendarSlice.actions

/*////////////////////////////////////////////////
  Selector
/*/ ///////////////////////////////////////////////

export default scheduleCalendarSlice.reducer
