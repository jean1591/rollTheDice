import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

export interface UserSlice {
  selectedDie: number | null
}

const initialState: UserSlice = { selectedDie: null }

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setSelectedDie: (state, action: PayloadAction<number | null>) => {
      state.selectedDie = action.payload
    },
  },
})

export const { setSelectedDie } = userSlice.actions

export default userSlice.reducer
