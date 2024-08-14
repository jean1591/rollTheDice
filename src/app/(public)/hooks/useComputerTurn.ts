import {
  addToComputerPoints,
  addToTurnPoints,
  changePlayer,
  resetTurnPoints,
} from '@/app/lib/store/features/user/slice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import { RootState } from '@/app/lib/store/store'
import { getRandomNumber } from '@/utils/getRandomNumber'

const THRESHOLD = 20

function useComputerTurn() {
  const dispatch = useDispatch()
  const { turnPoints } = useSelector((state: RootState) => state.user)
  const [rolling, setRolling] = useState(true)

  useEffect(() => {
    if (rolling) {
      const timer = setTimeout(() => {
        const dieValue = getRandomNumber()

        if (dieValue === 1) {
          dispatch(resetTurnPoints())
          setRolling(false)
        } else {
          dispatch(addToTurnPoints(dieValue))

          if (turnPoints >= THRESHOLD) {
            setRolling(false)
          }
        }
      }, 500)

      return () => clearTimeout(timer)
    } else {
      dispatch(addToComputerPoints(turnPoints))
      dispatch(resetTurnPoints())
      dispatch(changePlayer())
    }
  }, [turnPoints])

  const startComputerTurn = () => {
    setRolling(true)
  }

  return { startComputerTurn }
}

export default useComputerTurn
