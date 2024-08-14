import {
  Player,
  addToComputerLostPoints,
  addToComputerPoints,
  addToRolls,
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
  const { currentPlayer, turnPoints } = useSelector(
    (state: RootState) => state.user
  )

  useEffect(() => {
    if (currentPlayer === Player.COMPUTER) {
      const timer = setTimeout(() => {
        const dieValue = getRandomNumber()
        dispatch(addToRolls(dieValue))

        if (dieValue === 1) {
          dispatch(addToComputerLostPoints(turnPoints))
          dispatch(resetTurnPoints())
          dispatch(changePlayer())
        } else {
          dispatch(addToTurnPoints(dieValue))

          if (turnPoints >= THRESHOLD) {
            dispatch(addToComputerPoints(turnPoints))
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
