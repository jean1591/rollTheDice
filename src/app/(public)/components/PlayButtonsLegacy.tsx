'use client'

import {
  Player,
  addToRolls,
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

export const PlayButtonsLegacy = () => {
  const dispatch = useDispatch()
  const { currentPlayer, displayGameOverModal, turnPoints } = useSelector(
    (state: RootState) => state.user
  )

  useComputerTurn()

  const handleRollDie = () => {
    const dieValue = getRandomNumber()
    dispatch(addToRolls(dieValue))

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
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      <button
        onClick={handleRollDie}
        disabled={currentPlayer === Player.COMPUTER}
        className="rounded-lg border-[1px] border-slate-200 bg-blue-100 px-4 py-8 shadow-lg transition duration-500 ease-in-out hover:bg-blue-50 hover:shadow-none focus:border-slate-200 disabled:bg-white disabled:shadow-none"
      >
        <p className="text-3xl font-bold">Roll</p>
        <p className="text-sm text-slate-400">
          You can use the <span className="font-bold">R</span> key to play
        </p>
      </button>

      <button
        onClick={handleEndTurn}
        disabled={currentPlayer === Player.COMPUTER}
        className="rounded-lg border-[1px] border-slate-200 bg-slate-100 px-4 py-8 shadow-lg transition duration-500 ease-in-out hover:bg-slate-50 hover:shadow-none focus:border-slate-200 disabled:bg-white disabled:shadow-none"
      >
        <p className="text-3xl font-bold">End turn</p>
        <p className="text-sm text-slate-400">
          You can use the <span className="font-bold">E</span> key to play
        </p>
      </button>

      {displayGameOverModal && <GameOverModal />}
    </div>
  )
}
