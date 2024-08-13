import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react'
import { DieFive, DieFour, DieOne, DieSix, DieThree, DieTwo } from './Dice'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '@/app/lib/store/store'
import { classNames } from '@/utils/classNames'
import { isNil } from 'lodash'
import { setSelectedDie } from '@/app/lib/store/features/user/slice'
import { useEffect } from 'react'

const getRandomNumber = (): number => {
  return Math.floor(Math.random() * 6) + 1
}

const dieNumberToDieComponent: Record<number, JSX.Element> = {
  1: <DieOne />,
  2: <DieTwo />,
  3: <DieThree />,
  4: <DieFour />,
  5: <DieFive />,
  6: <DieSix />,
}

export const GameResultModal = () => {
  const dispatch = useDispatch()

  const { selectedDie } = useSelector((state: RootState) => state.user)

  const handleKeyDown = (event: KeyboardEvent) => {
    dispatch(setSelectedDie(null))
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  if (isNil(selectedDie)) {
    throw new Error('Selected die cannot be null here')
  }

  const computerNumber = getRandomNumber()

  const gameIsWon = computerNumber === selectedDie

  const UserDie = () => dieNumberToDieComponent[selectedDie]
  const ComputerDie = () => dieNumberToDieComponent[computerNumber]

  return (
    <Dialog
      className="relative z-10"
      open={!isNil(selectedDie)}
      onClose={() => dispatch(setSelectedDie(null))}
    >
      <DialogBackdrop
        transition
        className={classNames(
          gameIsWon ? 'bg-blue-300' : 'bg-red-300',
          'fixed inset-0 bg-opacity-75'
        )}
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center md:items-center md:p-0">
          <DialogPanel
            transition
            className="relative flex w-full transform items-center justify-center overflow-hidden"
          >
            <div className="text-left">
              <DialogTitle className="text-2xl font-extrabold uppercase leading-6 text-white lg:text-7xl">
                {gameIsWon ? 'Game won' : 'Game lost'}
              </DialogTitle>

              <div className="mt-16 flex items-center justify-center gap-x-8">
                <UserDie />
                <ComputerDie />
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
