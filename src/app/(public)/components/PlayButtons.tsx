'use client'

import {
  Player,
  addToTurnPoints,
  addToUserPoints,
  changePlayer,
  resetTurnPoints,
} from '@/app/lib/store/features/user/slice'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '@/app/lib/store/store'
import { getRandomNumber } from '@/utils/getRandomNumber'
import useComputerTurn from '../hooks/useComputerTurn'
import { useEffect } from 'react'

// TODO: turnPoints is always 0 even though the turn point score is OK 🤔
// Seems to be ok when using button click and not key stroke
export const PlayButtons = () => {
  const dispatch = useDispatch()
  const { currentPlayer, turnPoints } = useSelector(
    (state: RootState) => state.user
  )

  useComputerTurn()

  const handleRollDie = () => {
    const dieValue = getRandomNumber()

    // Turn is lost, player change
    if (dieValue === 1) {
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
    <div className="flex w-full flex-wrap items-center justify-center gap-8">
      <button
        onClick={handleRollDie}
        disabled={currentPlayer === Player.COMPUTER}
        className="flex-1 rounded-lg border-[1px] border-slate-200 bg-blue-100 px-4 py-8 shadow-lg transition duration-500 ease-in-out hover:bg-blue-50 hover:shadow-none focus:border-slate-200 disabled:bg-white disabled:shadow-none"
      >
        <p className="text-3xl font-bold">Roll</p>
        <p className="text-sm text-slate-400">
          You can use the <span className="font-bold">R</span> key to play
        </p>
      </button>

      <button
        onClick={handleEndTurn}
        disabled={currentPlayer === Player.COMPUTER}
        className="flex-1 rounded-lg border-[1px] border-slate-200 bg-slate-100 px-4 py-8 shadow-lg transition duration-500 ease-in-out hover:bg-slate-50 hover:shadow-none focus:border-slate-200 disabled:bg-white disabled:shadow-none"
      >
        <p className="text-3xl font-bold">End turn</p>
        <p className="text-sm text-slate-400">
          You can use the <span className="font-bold">E</span> key to play
        </p>
      </button>
    </div>
  )
}
