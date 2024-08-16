'use client'

import {
  Player,
  addToHistory,
  addToTurnPoints,
  addToUserLostPoints,
  addToUserPoints,
  changePlayer,
  resetTurnPoints,
} from '@/app/lib/store/features/user/slice'
import { useDispatch, useSelector } from 'react-redux'

import { GameOverModal } from './GameOverModal'
import { RootState } from '@/app/lib/store/store'
import { getRandomNumber } from '@/utils/getRandomNumber'
import useComputerTurn from '../hooks/useComputerTurn'
import { useEffect } from 'react'

export const PlayButtons = () => {
  const dispatch = useDispatch()
  const { currentPlayer, displayGameOverModal, turnPoints } = useSelector(
    (state: RootState) => state.user
  )

  useComputerTurn()

  const handleRollDie = () => {
    const dieValue = getRandomNumber()
    dispatch(addToHistory(dieValue))

    // Turn is lost, player change
    if (dieValue === 1) {
      dispatch(addToUserLostPoints(turnPoints))
      dispatch(resetTurnPoints())
      dispatch(changePlayer())
      return
    }

    dispatch(addToTurnPoints(dieValue))
  }

  const handleEndTurn = () => {
    dispatch(addToUserPoints(turnPoints))
    dispatch(resetTurnPoints())
    dispatch(changePlayer())
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'r') {
      handleRollDie()
    }

    if (event.key === 'e') {
      handleEndTurn()
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [turnPoints])

  return (
    <div className="flex flex-row gap-8 md:flex-col">
      <button
        onClick={handleRollDie}
        disabled={currentPlayer === Player.COMPUTER}
        className="flex-1 rounded-lg bg-blue-100 px-4 py-4 shadow-lg transition duration-500 ease-in-out hover:bg-blue-50 hover:shadow-none disabled:bg-white disabled:shadow-none md:py-8"
      >
        <p className="text-xl font-bold md:text-3xl">Roll 🔥</p>
        <p className="hidden text-sm text-slate-400 md:block">
          You can use the <span className="font-bold">R</span> key to play
        </p>
      </button>

      <button
        onClick={handleEndTurn}
        disabled={currentPlayer === Player.COMPUTER}
        className="flex-1 rounded-lg bg-slate-100 px-4 py-4 shadow-lg transition duration-500 ease-in-out hover:bg-slate-50 hover:shadow-none disabled:bg-white disabled:shadow-none md:py-8"
      >
        <p className="text-xl font-bold md:text-3xl">End turn 💎</p>
        <p className="hidden text-sm text-slate-400 md:block">
          You can use the <span className="font-bold">E</span> key to play
        </p>
      </button>

      {displayGameOverModal && <GameOverModal />}
    </div>
  )
}
