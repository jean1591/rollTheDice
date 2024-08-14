import {
  addToComputerPoints,
  addToTurnPoints,
  changePlayer,
  Player,
  resetTurnPoints,
} from '@/app/lib/store/features/user/slice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import { RootState } from '@/app/lib/store/store'
import { getRandomNumber } from '@/utils/getRandomNumber'

const THRESHOLD = 15

function useComputerTurn() {
  const dispatch = useDispatch()
  const {currentPlayer, turnPoints } = useSelector((state: RootState) => state.user)

  useEffect(() => {
    if (currentPlayer === Player.COMPUTER) {
      const timer = setTimeout(() => {
        const dieValue = getRandomNumber()

        if (dieValue === 1) {
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
