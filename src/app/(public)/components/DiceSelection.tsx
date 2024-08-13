'use client'

import { DieFive, DieFour, DieOne, DieSix, DieThree, DieTwo } from './Dice'
import { useDispatch, useSelector } from 'react-redux'

import { DieCard } from './DieCard'
import { GameResultModal } from './GameResultModal'
import { RootState } from '@/app/lib/store/store'
import { isNil } from 'lodash'
import { setSelectedDie } from '@/app/lib/store/features/user/slice'
import { useEffect } from 'react'

export const DiceSelection = () => {
  const dispatch = useDispatch()
  const { selectedDie } = useSelector((state: RootState) => state.user)

  const handleKeyDown = (event: KeyboardEvent) => {
    if (['1', '2', '3', '4', '5', '6'].includes(event.key)) {
      console.log(`${event.key} typed!`)

      dispatch(setSelectedDie(parseInt(event.key, 10)))
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-4 lg:grid-cols-6">
      <DieCard value="one">
        <DieOne />
      </DieCard>
      <DieCard value="two">
        <DieTwo />
      </DieCard>
      <DieCard value="three">
        <DieThree />
      </DieCard>
      <DieCard value="four">
        <DieFour />
      </DieCard>
      <DieCard value="five">
        <DieFive />
      </DieCard>
      <DieCard value="six">
        <DieSix />
      </DieCard>

      {!isNil(selectedDie) && <GameResultModal />}
    </div>
  )
}
