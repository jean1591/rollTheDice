import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

export type DieNumber = 1 | 2 | 3 | 4 | 5 | 6
const dieNumber = new Set<DieNumber>([1, 2, 3, 4, 5, 6])

export enum Player {
  COMPUTER = 'computer',
  USER = 'user',
}

interface History {
  player: Player
  value: DieNumber
}

interface Stat {
  count: number
  percentage: string
}

type Rolls = Record<DieNumber, Stat>

export interface UserSlice {
  computerPoints: number
  currentPlayer: Player
  displayGameOverModal: boolean
  history: History[]
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
  displayGameOverModal: false,
  history: [],
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
    addToHistory: (state, action: PayloadAction<DieNumber>) => {
      // Update history
      state.history = [
        ...state.history,
        { player: state.currentPlayer, value: action.payload },
      ]

      // Update rolls
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

      if (state.computerPoints >= 100) {
        state.displayGameOverModal = true
      }
    },
    addToUserPoints: (state, action: PayloadAction<number>) => {
      state.userPoints += action.payload

      if (state.userPoints >= 100) {
        state.displayGameOverModal = true
      }
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
    resetGame: () => initialState,
    resetTurnPoints: (state) => {
      state.turnPoints = 0
    },
    setComputerPoints: (state, action: PayloadAction<number>) => {
      state.computerPoints = action.payload
    },
    setDisplayGameOverModal: (state, action: PayloadAction<boolean>) => {
      state.displayGameOverModal = action.payload
    },
  },
})

export const {
  addToComputerLostPoints,
  addToComputerPoints,
  addToHistory,
  addToTurnPoints,
  addToUserLostPoints,
  addToUserPoints,
  changePlayer,
  resetGame,
  resetTurnPoints,
  setComputerPoints,
  setDisplayGameOverModal,
} = userSlice.actions

export default userSlice.reducer
