'use client'

import { Player } from '@/app/lib/store/features/user/slice'
import { RootState } from '@/app/lib/store/store'
import { classNames } from '@/utils/classNames'
import { useSelector } from 'react-redux'

export const Score = () => {
  const { computerPoints, currentPlayer, turnPoints, userPoints } = useSelector(
    (state: RootState) => state.user
  )

  return (
    <div className="grid grid-cols-1 gap-8 rounded-lg bg-slate-100 p-8 shadow-lg md:grid-cols-2">
      <div className="rounded-lg bg-white p-4">
        <p className="text-center text-3xl font-bold">You</p>

        <div className="mt-12 flex items-center justify-between gap-x-4">
          <div
            className={classNames(
              userPoints >= 100 ? 'bg-green-100' : 'bg-slate-100',
              'flex-1 rounded-lg p-4 text-right shadow-md'
            )}
          >
            <p className="text-2xl font-bold">{userPoints}</p>
            <p className="text-sm text-slate-400">Score</p>
          </div>
          <div className="flex-1 rounded-lg bg-slate-100 p-4 text-right shadow-md">
            <p className="text-2xl font-bold">
              {currentPlayer === Player.USER ? turnPoints : 0}
            </p>
            <p className="text-sm text-slate-400">Turn</p>
          </div>
        </div>
      </div>

      <div className="rounded-lg bg-white p-4">
        <p className="text-center text-3xl font-bold">Computer</p>

        <div className="mt-12 flex items-center justify-between gap-x-4">
          <div
            className={classNames(
              computerPoints >= 100 ? 'bg-green-100' : 'bg-slate-100',
              'flex-1 rounded-lg p-4 text-right shadow-md'
            )}
          >
            <p className="text-2xl font-bold">{computerPoints}</p>
            <p className="text-sm text-slate-400">Score</p>
          </div>
          <div className="flex-1 rounded-lg bg-slate-100 p-4 text-right shadow-md">
            <p className="text-2xl font-bold">
              {currentPlayer === Player.COMPUTER ? turnPoints : 0}
            </p>
            <p className="text-sm text-slate-400">Turn</p>
          </div>
        </div>
      </div>
    </div>
  )
}
