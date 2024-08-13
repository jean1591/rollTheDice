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
  1: <DieOne size="lg" />,
  2: <DieTwo size="lg" />,
  3: <DieThree size="lg" />,
  4: <DieFour size="lg" />,
  5: <DieFive size="lg" />,
  6: <DieSix size="lg" />,
}

export const GameResultModal = () => {
  const dispatch = useDispatch()

  const { selectedDie } = useSelector((state: RootState) => state.user)

  const handleKeyDown = () => {
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
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <DialogPanel
            onClick={() => dispatch(setSelectedDie(null))}
            transition
            className="relative flex w-full transform items-center justify-center overflow-hidden"
          >
            <div className="mt-2">
              <DialogTitle className="text-4xl font-extrabold uppercase leading-6 text-white lg:text-7xl">
                {gameIsWon ? 'Game won' : 'Game lost'}
              </DialogTitle>

              <div className="mt-16 flex items-center justify-center gap-x-8">
                <div className="space-y-4">
                  <p className="text-center font-medium uppercase text-slate-600">
                    Your pick
                  </p>
                  <UserDie />
                </div>
                <div className="space-y-4">
                  <p className="text-center font-medium uppercase text-slate-600">
                    Computer
                  </p>
                  <ComputerDie />
                </div>
              </div>

              <div className="mt-16">
                <p className="text-center text-lg font-medium text-white">
                  Press any key to continue
                </p>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
