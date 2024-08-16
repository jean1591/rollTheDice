import {
  Player,
  addToComputerLostPoints,
  addToComputerPoints,
  addToHistory,
  addToTurnPoints,
  changePlayer,
  resetTurnPoints,
} from '@/app/lib/store/features/user/slice'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '@/app/lib/store/store'
import { getRandomNumber } from '@/utils/getRandomNumber'
import { useEffect } from 'react'

const THRESHOLD = 15

function useComputerTurn() {
  const dispatch = useDispatch()
  const { computerPoints, currentPlayer, displayGameOverModal, turnPoints } =
    useSelector((state: RootState) => state.user)

  useEffect(() => {
    if (!displayGameOverModal && currentPlayer === Player.COMPUTER) {
      const timer = setTimeout(() => {
        const dieValue = getRandomNumber()
        dispatch(addToHistory(dieValue))

        if (dieValue === 1) {
          dispatch(addToComputerLostPoints(turnPoints))
          dispatch(resetTurnPoints())
          dispatch(changePlayer())
        } else {
          const currentTurnPoints = dieValue + turnPoints
          dispatch(addToTurnPoints(dieValue))

          if (
            currentTurnPoints >= THRESHOLD ||
            currentTurnPoints + computerPoints >= 100
          ) {
            dispatch(addToComputerPoints(currentTurnPoints))
            dispatch(resetTurnPoints())
            dispatch(changePlayer())
          }
        }
      }, 500)

      return () => clearTimeout(timer)
    }
  }, [currentPlayer, turnPoints])
}

export default useComputerTurn
