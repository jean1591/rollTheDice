import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

export enum Player {
  COMPUTER = 'computer',
  USER = 'user',
}

export interface UserSlice {
  computerPoints: number
  currentPlayer: Player
  turnPoints: number
  userPoints: number
}

const initialState: UserSlice = {
  computerPoints: 0,
  currentPlayer: Player.USER,
  turnPoints: 0,
  userPoints: 0,
}

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    addToTurnPoints: (state, action: PayloadAction<number>) => {
      state.turnPoints += action.payload
    },
    addToComputerPoints: (state, action: PayloadAction<number>) => {
      state.computerPoints += action.payload
    },
    addToUserPoints: (state, action: PayloadAction<number>) => {
      state.userPoints += action.payload
    },
    changePlayer: (state) => {
      state.currentPlayer =
        state.currentPlayer === Player.USER ? Player.COMPUTER : Player.USER
    },
    resetTurnPoints: (state) => {
      state.turnPoints = 0
    },
    setComputerPoints: (state, action: PayloadAction<number>) => {
      state.computerPoints = action.payload
    },
  },
})

export const {
  addToComputerPoints,
  addToTurnPoints,
  addToUserPoints,
  changePlayer,
  resetTurnPoints,
  setComputerPoints,
} = userSlice.actions

export default userSlice.reducer
