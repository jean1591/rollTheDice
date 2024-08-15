'use client'

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react'
import {
  Player,
  resetGame,
  setDisplayGameOverModal,
} from '@/app/lib/store/features/user/slice'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '@/app/lib/store/store'

const title = {
  [Player.COMPUTER]: '😵 Oh no ! You lost the game ! 😵',
  [Player.USER]: '✨ Congrats ! You won the game ! ✨',
}

export const GameOverModal = () => {
  const dispatch = useDispatch()
  const {
    displayGameOverModal,
    userPoints,
    computerPoints,
    lostUserPoints,
    lostComputerPoints,
  } = useSelector((state: RootState) => state.user)

  const winner = userPoints >= 100 ? Player.USER : Player.COMPUTER

  return (
    <Dialog
      className="relative z-10"
      open={displayGameOverModal}
      onClose={() => undefined}
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-slate-700 bg-opacity-75"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center md:items-center md:p-0">
          <DialogPanel
            transition
            className="relative w-full transform overflow-hidden text-white md:w-3/4 md:p-8"
          >
            <div className="text-left">
              <DialogTitle className="text-center text-2xl font-bold leading-6 lg:text-5xl">
                {title[winner]}
              </DialogTitle>

              <div className="mx-auto mt-24 w-1/2 text-sm text-white">
                <div>
                  <div className="mb-2 mt-2 grid grid-cols-3 text-right font-semibold">
                    <p></p>
                    <p>You</p>
                    <p>Computer</p>
                  </div>
                  <div className="grid grid-cols-3 border-t-[1px] border-white py-2">
                    <p>Points</p>
                    <p className="text-right font-semibold">{userPoints}</p>
                    <p className="text-right">{computerPoints}</p>
                  </div>
                  <div className="grid grid-cols-3 border-t-[1px] border-white py-2">
                    <p>Lost points</p>
                    <p className="text-right font-semibold">
                      {lostUserPoints.points}
                    </p>
                    <p className="text-right">{lostComputerPoints.points}</p>
                  </div>
                  <div className="grid grid-cols-3 border-t-[1px] border-white py-2">
                    <p>Lost turns</p>
                    <p className="text-right font-semibold">
                      {lostUserPoints.turns}
                    </p>
                    <p className="text-right">{lostComputerPoints.turns}</p>
                  </div>
                </div>
              </div>

              <button
                className="mx-auto mt-12 flex items-center justify-center rounded-lg bg-gradient-to-r from-violet-500 to-indigo-300 px-8 py-4 font-semibold uppercase shadow-lg transition duration-500 ease-in-out hover:shadow-none"
                onClick={() => dispatch(resetGame())}
              >
                New game
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
