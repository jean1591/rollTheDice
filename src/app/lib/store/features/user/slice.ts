import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

export type DieNumber = 1 | 2 | 3 | 4 | 5 | 6
const dieNumber = new Set<DieNumber>([1, 2, 3, 4, 5, 6])

export enum Player {
  COMPUTER = 'computer',
  USER = 'user',
}

interface Stat {
  count: number
  percentage: string
}

type Rolls = Record<DieNumber, Stat>

export interface UserSlice {
  computerPoints: number
  currentPlayer: Player
  lostComputerPoints: { points: number; turns: number }
  lostUserPoints: { points: number; turns: number }
  rolls: Rolls
  turnPoints: number
  userPoints: number
}

const initialRolls: Rolls = {
  '1': { count: 0, percentage: '0' },
  '2': { count: 0, percentage: '0' },
  '3': { count: 0, percentage: '0' },
  '4': { count: 0, percentage: '0' },
  '5': { count: 0, percentage: '0' },
  '6': { count: 0, percentage: '0' },
}

const initialState: UserSlice = {
  computerPoints: 0,
  currentPlayer: Player.USER,
  lostComputerPoints: { points: 0, turns: 0 },
  lostUserPoints: { points: 0, turns: 0 },
  rolls: initialRolls,
  turnPoints: 0,
  userPoints: 0,
}

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    addToRolls: (state, action: PayloadAction<DieNumber>) => {
      const updatedRolls = { ...state.rolls }
      const totalRolls = Object.values(updatedRolls).reduce(
        (acc, current) => acc + current.count,
        1
      )

      updatedRolls[action.payload].count += 1

      dieNumber.forEach((keyRoll) => {
        updatedRolls[keyRoll].percentage = (
          (updatedRolls[keyRoll].count / totalRolls) *
          100
        ).toFixed(2)
      })

      state.rolls = updatedRolls
    },
    addToTurnPoints: (state, action: PayloadAction<number>) => {
      state.turnPoints += action.payload
    },
    addToComputerPoints: (state, action: PayloadAction<number>) => {
      state.computerPoints += action.payload
    },
    addToUserPoints: (state, action: PayloadAction<number>) => {
      state.userPoints += action.payload
    },
    addToComputerLostPoints: (state, action: PayloadAction<number>) => {
      state.lostComputerPoints.points += action.payload
      state.lostComputerPoints.turns += 1
    },
    addToUserLostPoints: (state, action: PayloadAction<number>) => {
      state.lostUserPoints.points += action.payload
      state.lostUserPoints.turns += 1
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
  addToComputerLostPoints,
  addToComputerPoints,
  addToRolls,
  addToTurnPoints,
  addToUserLostPoints,
  addToUserPoints,
  changePlayer,
  resetTurnPoints,
  setComputerPoints,
} = userSlice.actions

export default userSlice.reducer
