'use client'

import { Player } from '@/app/lib/store/features/user/slice'
import { ProgressBar } from './ProgressBar'
import { RootState } from '@/app/lib/store/store'
import { useSelector } from 'react-redux'

export const Score = () => {
  const { computerPoints, currentPlayer, turnPoints, userPoints } = useSelector(
    (state: RootState) => state.user
  )

  return (
    <div className="grid grid-cols-1 gap-8 rounded-lg p-4 shadow-lg md:grid-cols-2 md:p-8">
      <PlayerScore
        player="You"
        points={userPoints}
        turnPoints={currentPlayer === Player.USER ? turnPoints : 0}
      />
      <PlayerScore
        player="Computer"
        points={computerPoints}
        turnPoints={currentPlayer === Player.COMPUTER ? turnPoints : 0}
      />
    </div>
  )
}

const PlayerScore = ({
  player,
  points,
  turnPoints,
}: {
  player: string
  points: number
  turnPoints: number
}) => {
  return (
    <div className="grid grid-cols-5 gap-x-8">
      <div className="col-span-3">
        <p className="text-2xl font-extrabold">{player}</p>
        <div className="mt-2">
          <ProgressBar progress={points} />
        </div>
      </div>

      <div className="my-auto text-left">
        <p className="text-xl font-bold">{points}</p>
        <p className="text-sm text-slate-400">Points</p>
      </div>

      <div className="my-auto text-left">
        <p className="text-xl font-bold">{turnPoints}</p>
        <p className="text-sm text-slate-400">Turn</p>
      </div>
    </div>
  )
}
